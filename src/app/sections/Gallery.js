import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import galleryOne from "../../../public/assets/gallery-one.jpg";
import galleryTwo from "../../../public/assets/gallery-two.jpg";
import galleryFour from "../../../public/assets/gallery-four.jpg";
import galleryFive from "../../../public/assets/gallery-five.jpg";
import galleryThree from "../../../public/assets/gallery-three.jpg";

export const Gallery = () => {
  const router = useRouter();

  const sectionData = {
    smallHeading: "Gallery",
    heading: "Take a Look at Our Recent Projects",
    description:
      "Explore a collection of our recent projects, each telling a unique story of creativity and craftsmanship. Immerse yourself in our visual showcase of innovation.",
  };

  return (
    <DisplayWrapper>
      <Header data-aos="fade-up">
        <HeadingButtonWrapper>
          <HeadingWrapper>
            <GalleryHeadingWrapper>
              <GalleryHeading>{sectionData.smallHeading}</GalleryHeading>
              <SmallSeeMoreBtn
                data-aos="fade-right"
                data-aos-delay="600"
                onClick={() => router.push("/gallery")}
              >
                See More
              </SmallSeeMoreBtn>
            </GalleryHeadingWrapper>
            <Heading>{sectionData.heading}</Heading>
          </HeadingWrapper>
          <SeeMoreBtn
            data-aos="fade-right"
            data-aos-delay="600"
            onClick={() => router.push("/gallery")}
          >
            See More
          </SeeMoreBtn>
        </HeadingButtonWrapper>
        <Description>{sectionData.description}</Description>
      </Header>
      <GalleryWrapper>
        <div className="Column1">
          <StyledImage src={galleryOne} alt="Gallery One" data-aos="fade-up" />
        </div>
        <div className="Column21">
          <StyledImage src={galleryTwo} alt="Gallery Two" data-aos="fade-up" />
        </div>
        <div className="Column22">
          <StyledImage
            src={galleryThree}
            alt="Gallery Three"
            data-aos="fade-up"
          />
        </div>
        <div className="Column31">
          <StyledImage
            src={galleryFour}
            alt="Gallery Four"
            data-aos="fade-up"
          />
        </div>
        <div className="Column32">
          <StyledImage
            src={galleryFive}
            alt="Gallery Five"
            data-aos="fade-up"
          />
        </div>
      </GalleryWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
  transition: all 0.5s ease-in-out;
`;

const Header = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 750px;
  }
  @media (max-width: 850px) {
    max-width: 90%;
  }
  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

const HeadingButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GalleryHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GalleryHeading = styled.p`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.globalColors.primaryColor};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 25px;
  }
`;

const SmallSeeMoreBtn = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.globalColors.ternaryColor};
  background-color: ${({ theme }) => theme.globalColors.primaryColor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 40px;
  width: 150px;
  height: 40px;
  display: none;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SeeMoreBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.globalColors.ternaryColor};
  background-color: ${({ theme }) => theme.globalColors.primaryColor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 40px;
  width: 180px;
  height: 50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Description = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const GalleryWrapper = styled.div`
  width: 90%;
  height: 100vh;
  max-height: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  grid-auto-flow: row;
  transition: all 0.5s ease-in-out;
  grid-template-areas: "Column1 Column1 Column21 Column31" "Column1 Column1 Column21 Column32" "Column1 Column1 Column22 Column32";

  .Column1 {
    grid-area: Column1;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
  }

  .Column21 {
    grid-area: Column21;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
  }

  .Column22 {
    grid-area: Column22;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
  }

  .Column31 {
    grid-area: Column31;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
  }

  .Column32 {
    grid-area: Column32;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "Column1 Column1 Column21"
      "Column1 Column1 Column21"
      "Column1 Column1 Column22";
    gap: 10px;
    .Column31 {
      display: none;
    }
    .Column32 {
      display: none;
    }
  }

  @media (max-width: 500px) {
    max-height: 300px;
  }

  @media (max-width: 376px) {
    max-height: 250px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1) !important;
  }
`;
