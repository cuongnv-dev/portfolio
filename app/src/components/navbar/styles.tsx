import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.div`
  ${tw`
    bg-white
    dark:bg-black-dark
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    justify-between
    xl:px-48
    px-6
    h-16
    shadow
    fixed
    inset-x-0
    top-0
    z-50
  `};
`;

export const Logo = styled.div`
  ${tw`font-bold text-lg md:text-xl dark:text-white`};
`;

export const Nav = styled.ul`
  ${tw`flex flex-row items-center gap-4 md:gap-6 list-none`};
`;
export const NavLink = styled.li`
  ${tw`text-sm font-medium cursor-pointer transition duration-300 ease-in-out hover:text-red-500`};
`;
