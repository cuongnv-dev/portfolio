import styled from "styled-components";
import tw from "twin.macro";

export const HeroContainer = styled.div`
  ${tw`flex flex-col md:flex-row  w-full justify-between  xl:px-48 items-center
    px-6 py-6 md:py-16`}
`;

export const LeftContent = styled.div`
  ${tw`w-full md:w-1/2 relative`};
`;

export const RightContent = styled.div`
  ${tw`w-full md:w-1/2 mt-6 md:mt-0`};
`;
export const Avatar = styled.img`
  ${tw`mx-auto h-60 md:h-80 lg:h-96`};
`;

export const SocialButtonGroups = styled.div`
  ${tw`absolute top-0 h-full  flex justify-center flex-col gap-5`};
`;

export const SocialButton = styled.button`
  ${tw`w-8 h-8 shadow rounded-full bg-red-400`};
`;

export const Intro = styled.div`
  ${tw`text-sm font-medium text-gray-400 dark:text-gray-500 `};
`;
export const Name = styled.div`
  ${tw`font-medium text-3xl lg:text-4xl mt-3`};
`;

export const Title = styled.div`
  ${tw`font-medium text-2xl  mt-3 lg:pr-32  `};
`;
export const DescText = styled.div`
  ${tw`text-sm text-gray-500 dark:text-gray-500  mt-3 lg:pr-32`};
`;

export const DownloadButton = styled.button`
  ${tw`bg-red-500 inline-block flex flex-row items-center text-white text-sm font-medium px-4 py-2 rounded-lg shadow mt-6`};
`;
