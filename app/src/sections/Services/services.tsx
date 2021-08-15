import { BiPaint } from "react-icons/bi";
import {
  HiArrowNarrowRight,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import {
  CardButton,
  CardTitle,
  HeaderContainer,
  HighlightContent,
  HighlightCount,
  HighlightGroups,
  SectionDesc,
  SectionName,
  ServiceCard,
  ServicesContainer,
  ServicesRow,
  Text,
} from "./styles";

export const ServicesSection = () => {
  return (
    <ServicesContainer id="services">
      <HeaderContainer>
        <SectionName>Services</SectionName>
        <SectionDesc>What I Offer</SectionDesc>
      </HeaderContainer>

      <ServicesRow>
        <ServiceCard>
          <BiPaint className="w-8 h-8 text-red-500" />
          <CardTitle>User Experience & User Interface Design.</CardTitle>
          <CardButton>
            <span>view more</span>
            <HiArrowNarrowRight className="w-4 h-4 ml-4" />
          </CardButton>
        </ServiceCard>
        <ServiceCard>
          <HiOutlineDesktopComputer className="w-8 h-8 text-red-500" />
          <CardTitle> Web Applications Development.</CardTitle>
          <CardButton>
            <span>view more</span>
            <HiArrowNarrowRight className="w-4 h-4 ml-4" />
          </CardButton>
        </ServiceCard>
        <ServiceCard>
          <HiOutlineDeviceMobile className="w-8 h-8 text-red-500" />
          <CardTitle> Mobile Applications Development.</CardTitle>
          <CardButton>
            <span>view more</span>
            <HiArrowNarrowRight className="w-4 h-4 ml-4" />
          </CardButton>
        </ServiceCard>
      </ServicesRow>
      <HighlightGroups>
        <HighlightContent>
          <HighlightCount>04+</HighlightCount>
          <Text>Years</Text>
          <Text>experience</Text>
        </HighlightContent>
        <HighlightContent>
          <HighlightCount>15+</HighlightCount>
          <Text>Projects</Text>
          <Text>completed</Text>
        </HighlightContent>
        <HighlightContent>
          <HighlightCount>3+</HighlightCount>
          <Text>Companies</Text>
          <Text>worked</Text>
        </HighlightContent>
      </HighlightGroups>
    </ServicesContainer>
  );
};
