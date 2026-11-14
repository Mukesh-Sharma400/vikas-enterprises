import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Toast } from "@/app/components/Toast";
import { useEffect, useRef, useState } from "react";

// Configured via environment variables (see .env.example)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const ContactPopup = ({ handleClose }) => {
  const form = useRef();
  const timeoutRef = useRef(null);
  const [opacity, setOpacity] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const closePopup = () => {
    setTimeout(() => {
      handleClose();
    }, 1000);
    setOpacity(false);
  };

  const closePopupAfterSend = () => {
    setTimeout(() => {
      handleClose();
    }, 3000);
    setOpacity(false);
  };

  const showToast = (message) => {
    setToast({ visible: true, message });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 2000);
  };

  // Accepts Indian mobile numbers with optional +91 / 91 / 0 prefix and
  // spaces, dashes or brackets, e.g. "+91 93210 48241", "09321048241".
  // Returns the normalised 10-digit number, or null if invalid.
  const normalisePhone = (value) => {
    let digits = value.replace(/[\s\-().]/g, "");
    if (!/^\+?\d+$/.test(digits)) return null;
    digits = digits.replace(/^\+/, "");
    if (digits.length === 12 && digits.startsWith("91"))
      digits = digits.slice(2);
    else if (digits.length === 11 && digits.startsWith("0"))
      digits = digits.slice(1);
    return /^[6-9]\d{9}$/.test(digits) ? digits : null;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (isSending) return;

    const formEl = form.current;
    if (!formEl.reportValidity()) {
      showToast("Please fill out all required fields correctly");
      return;
    }

    const nameInput = formEl.elements.from_name;
    const emailInput = formEl.elements.from_email;
    const phoneInput = formEl.elements.phone_number;
    const messageInput = formEl.elements.message;

    const name = nameInput.value.trim();
    if (name.length < 2 || !/\p{L}/u.test(name)) {
      showToast("Please enter your name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showToast("Please enter a valid email address");
      return;
    }

    const phone = normalisePhone(phoneInput.value);
    if (!phone) {
      showToast("Please enter a valid 10-digit mobile number");
      return;
    }

    if (messageInput.value.trim().length < 10) {
      showToast("Please tell us a little more (at least 10 characters)");
      return;
    }

    // Send cleaned-up values
    nameInput.value = name;
    emailInput.value = emailInput.value.trim();
    phoneInput.value = phone;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.",
      );
      showToast("Oops something went wrong, please try again");
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formEl,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          showToast("Message sent, Thank you for contacting!");
          formEl.reset();
          closePopupAfterSend();
        },
        () => {
          showToast("Oops something went wrong, please try again");
          setIsSending(false);
        },
      );
  };

  useEffect(() => {
    setOpacity(true);
  }, []);

  return (
    <>
      <ToastWrapper $showToast={toast.visible}>
        <Toast message={toast.message} />
      </ToastWrapper>
      <PopupOverlay $opacity={opacity}>
        <PopupContainer $opacity={opacity}>
          <CloseBtn onClick={closePopup}>
            <i className="bi bi-x-circle-fill"></i>
          </CloseBtn>
          <ContactForm ref={form} onSubmit={handleSendMessage}>
            <FieldContainer>
              <Label>Your Full Name</Label>
              <TextBox
                placeholder="John Doe"
                name="from_name"
                autoComplete="name"
                required
              />
            </FieldContainer>
            <EmailPhoneWrapper>
              <FieldContainer>
                <Label>Your Email</Label>
                <TextBox
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="john.doe@gmail.com"
                  name="from_email"
                  required
                />
              </FieldContainer>
              <FieldContainer>
                <Label>Your Phone Number</Label>
                <TextBox
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="98765 43210"
                  name="phone_number"
                  required
                />
              </FieldContainer>
            </EmailPhoneWrapper>
            <FieldContainer>
              <Label>Your Message</Label>
              <TextArea
                placeholder="Type your message here..."
                name="message"
                required
              />
            </FieldContainer>
            <SubmitButton
              type="submit"
              disabled={isSending}
              aria-busy={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </SubmitButton>
          </ContactForm>
        </PopupContainer>
      </PopupOverlay>
    </>
  );
};

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.$showToast ? "10%" : "-20%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 17;
  transition: all 0.5s ease-in-out;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 16;
  cursor: default;
  background-color: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(2px);
  opacity: ${(props) => (props.$opacity === false ? 0 : 1)};
  transition: all 0.5s ease-in-out;
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: 900px;
  max-height: 90%;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.popup};
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${(props) => (props.$opacity === false ? 0 : 1)};
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    width: 90%;
  }
`;

const CloseBtn = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  position: relative;
  transition: all 0.5s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.5s ease-in-out;
`;

const Label = styled.label`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 16px;
  }

  @media (max-width: 426px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

const TextBox = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 0 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder} !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.inputBorderFocus} !important;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  font-size: 20px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder} !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.inputBorderFocus} !important;
  }
`;

const EmailPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SubmitButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  width: 100%;
  height: 50px;
  transition: all 0.5s ease-in-out;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
