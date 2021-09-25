import styled from "styled-components";
import tw from "twin.macro";

export const SkillContainer = styled.div`
  ${tw`w-full xl:px-48 px-6 py-8 md:py-24 bg-white dark:bg-black-dark`};
`;
export const SkillsContent = styled.div`
  ${tw`flex flex-col md:flex-row mt-6 md:mt-14 gap-6 lg:gap-8 md:px-4 lg:px-24`};
`;
export const SkillWrapper = styled.div`
  ${tw`flex-1 flex-row lg:pl-10`};
`;

export const CollapseContent = styled.div`
  ${tw`flex flex-row ml-4 w-full items-center justify-between`};
`;
export const TextSection = styled.div`
  ${tw`flex flex-col items-start`};
`;
export const Title = styled.div`
  ${tw`text-base lg:text-xl font-semibold text-left`};
`;
export const ShortDesc = styled.div`
  ${tw`text-sm font-medium text-gray-500 dark:text-gray-500 mt-1 text-left`};
`;
