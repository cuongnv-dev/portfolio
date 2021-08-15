import Ava from "../../assets/images/ava.png";
import { FiGithub, FiLinkedin, FiFacebook, FiDownload } from "react-icons/fi";
import {
  Avatar,
  DescText,
  DownloadButton,
  HeroContainer,
  Intro,
  LeftContent,
  Name,
  RightContent,
  SocialButton,
  SocialButtonGroups,
  Title,
} from "./styles";

export const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <LeftContent className="">
        <Avatar src={Ava} alt="Hero" className="" />
        <SocialButtonGroups>
          <SocialButton
            onClick={() => window.open("https://github.com/cuongnv-dev")}
          >
            <FiGithub className="w-4 h-4 text-white mx-auto" />
          </SocialButton>
          <SocialButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/nguyenvietcuong23/")
            }
          >
            <FiLinkedin className="w-4 h-4 text-white mx-auto" />
          </SocialButton>
          <SocialButton
            onClick={() => window.open("https://www.facebook.com/cuongnv23")}
          >
            <FiFacebook className="w-4 h-4 text-white mx-auto" />
          </SocialButton>
        </SocialButtonGroups>
      </LeftContent>
      <RightContent>
        <Intro>Introduction</Intro>
        <Name>Viet Cuong</Name>
        <Title>Frontend Developer and Design, based in VietNam</Title>
        <DescText>
          With 4+ years of experience in creating and delivering user-centric
          applications and solutions, I look forward to bringing my strong
          creative, technical, and analytical skills to my customers.
        </DescText>
        <DownloadButton>
          <a
            download=""
            href="NguyenVietCuong_FullstackDeveloper.pdf"
            target="_blank"
          >
            Download CV
          </a>
          <FiDownload className="ml-3" />
        </DownloadButton>
      </RightContent>
    </HeroContainer>
  );
};
