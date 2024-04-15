import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Toast } from "@/app/components/Toast";
import { useEffect, useRef, useState } from "react";

export const ContactPopup = ({ handleClose }) => {
  const form = useRef();
  const timeoutRef = useRef(null);
  const [opacity, setOpacity] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const handleClosePopupFast = () => {
    setTimeout(() => {
      handleClose();
    }, 1000);
    setOpacity(false);
  };

  const handleClosePopupSlow = () => {
    setTimeout(() => {
      handleClose();
    }, 3000);
    setOpacity(false);
  };

  const showToastMethod = (message) => {
    setToast({ visible: true, message });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const isValid = form.current.reportValidity();
    if (isValid) {
      const nameInput = form.current.elements.from_name;
      const emailInput = form.current.elements.from_email;
      const phoneInput = form.current.elements.phone_number;
      const messageInput = form.current.elements.message;
      if (nameInput.value.length <= 5) {
        showToastMethod("Please enter your full name");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        showToastMethod("Please enter a valid email address");
        return;
      }
      if (phoneInput.value.trim().length != 10) {
        showToastMethod("Please enter a valid phone number");
        return;
      }
      if (messageInput.value.trim().length <= 20) {
        showToastMethod("Message should be more than 20 characters");
        return;
      }
      emailjs
        .sendForm(
          "service_5ksuaid",
          "template_7i93fz4",
          form.current,
          "xE-9VLmpyymIJNfMP"
        )
        .then(
          (result) => {
            showToastMethod("Message sent, Thank you for contacting!");
            e.target.reset();
            handleClosePopupSlow();
          },
          (error) => {
            showToastMethod("Oops something went wrong");
          }
        );
    } else {
      showToastMethod("Please fill out all required fields correctly");
    }
  };

  useEffect(() => {
    setOpacity(true);
  }, []);

  return (
    <>
      <ToastWrapper showToast={toast.visible}>
        <Toast message={toast.message} />
      </ToastWrapper>
      <PopupOverlay opacity={opacity}>
        <PopupContainer opacity={opacity}>
          <CloseBtn onClick={handleClosePopupFast}>
            <i class="bi bi-x-circle-fill"></i>
          </CloseBtn>
          <ContactForm ref={form} onSubmit={handleSendMessage}>
            <FieldContainer>
              <Label>Your Full Name</Label>
              <TextBox placeholder="John Doe" name="from_name" required />
            </FieldContainer>
            <EmailPhoneWrapper>
              <FieldContainer>
                <Label>Your Email</Label>
                <TextBox
                  placeholder="john.doe@gmail.com"
                  name="from_email"
                  required
                />
              </FieldContainer>
              <FieldContainer>
                <Label>Your Phone Number</Label>
                <TextBox
                  placeholder="5555555555"
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
            <Button type="submit">Send Message</Button>
          </ContactForm>
        </PopupContainer>
      </PopupOverlay>
    </>
  );
};

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.showToast ? "10%" : "-20%")};
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
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  opacity: ${(props) => (props.opacity === false ? 0 : 1)};
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
  box-shadow: 0 4px 15px rgba(225, 225, 225, 0.5);
  background-color: white;
  opacity: ${(props) => (props.opacity === false ? 0 : 1)};
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
  color: ${({ theme }) => theme.globalColors.primaryColor};
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
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  font-size: 20px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
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

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.globalColors.ternaryColor};
  background-color: ${({ theme }) => theme.globalColors.primaryColor};
  border-radius: 10px;
  width: 100%;
  height: 50px;
  transition: all 0.5s ease-in-out;
`;
