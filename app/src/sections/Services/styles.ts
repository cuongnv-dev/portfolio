import styled from "styled-components";
import tw from "twin.macro";

export const ServicesContainer = styled.div`
  ${tw`w-full xl:px-48 px-6 py-8 md:py-24 bg-white dark:bg-black-darker`};
`;

export const HeaderContainer = styled.div`
  ${tw`w-full flex flex-col justify-center items-center`};
`;

export const SectionName = styled.span`
  ${tw`font-medium text-3xl`};
`;

export const SectionDesc = styled.div`
  ${tw`mt-2 font-medium text-sm`};
`;

export const ServicesRow = styled.div`
  ${tw`flex flex-col md:flex-row mt-10 gap-8 md:px-14 lg:px-24`};
`;

export const ServiceCard = styled.div`
  ${tw`flex-1 mx-12 md:mx-0 px-6 py-14 shadow-md hover:shadow-lg dark:hover:shadow-xl border-t bg-white dark:bg-black-dark dark:border-black-dark  border-gray-100 rounded-lg`}
`;

export const CardTitle = styled.div`
  ${tw`font-semibold text-base mt-6 leading-6`};
`;

export const CardButton = styled.button`
  ${tw`text-sm font-medium text-red-500 flex flex-row items-center mt-6`};
`;

export const HighlightGroups = styled.div`
  ${tw`flex flex-row mt-14 gap-16 justify-center`};
`;

export const HighlightContent = styled.div`
  ${tw`flex flex-col items-center font-medium text-sm`};
`;

export const HighlightCount = styled.div`
  ${tw`font-semibold  text-2xl lg:text-3xl text-gray-700 dark:text-gray-200`};
`;

export const Text = styled.span`
  ${tw``};
`;
