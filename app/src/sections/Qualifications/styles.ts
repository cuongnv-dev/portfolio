import styled from "styled-components";
import tw from "twin.macro";

export const TabContainer = styled.div`
  ${tw`flex flex-row justify-center items-center mt-14 gap-10`};
`;

export const TabButton = styled.div`
  ${tw`flex flex-row items-center gap-2 cursor-pointer`}
  ${({ active }: any) => (active ? tw`text-red-500` : tw``)}
` as any;

export const ButtonLabel = styled.div`
  ${tw`text-lg font-semibold`};
`;

export const QualificationContent = styled.div`
  ${tw`mt-8`};
`;

export const QualificationData = styled.div`
  ${tw`flex flex-row gap-6`};
`;

export const QualificationTitle = styled.div`
  ${tw`text-base font-semibold`};
`;

export const Time = styled.div`
  ${tw`flex flex-row items-center text-xs text-gray-400 mt-2`};
`;
export const Circle = styled.span`
  ${tw`inline-block bg-red-500 rounded-full`}
  width: 13px;
  height: 13px;
`;
export const Line = styled.span`
  ${tw`block h-full bg-red-500`};
  width: 1px;
  transform: translate(6px, -7px);
`;

export const LeftQualification = styled.div`
  ${tw`flex-1 flex flex-col items-end`};
`;
