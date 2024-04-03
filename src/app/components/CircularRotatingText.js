import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.section`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RotatingCircularText = styled.h1`
  --char-count: 32;
  --radius: -3.5rem;
  --font-size: 1;
  --char-index: 0;
  --inner-angle: calc((360deg / var(--char-count)));
  font-family: monospace;
  text-transform: uppercase;
  font-size: calc(var(--font-size) * 1rem);
  position: relative;
  color: white;
  animation: ${spinAnimation} 25s infinite linear;
`;

const Char = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    rotate(calc(var(--inner-angle) * var(--char-index)))
    translateY(var(--radius));
`;

const CircularText = () => {
  const text = "Best Interior Firm Since 2001 •";

  return (
    <Container>
      <RotatingCircularText>
        {text.split("").map((char, index) => (
          <Char
            key={index}
            style={{ "--char-index": index }}
            className="secondary-font"
          >
            {char}
          </Char>
        ))}
      </RotatingCircularText>
    </Container>
  );
};

export default CircularText;
