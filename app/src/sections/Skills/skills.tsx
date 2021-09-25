import { Disclosure } from "@headlessui/react";
import {
  HiChevronUp,
  HiCode,
  HiOutlineCollection,
  HiOutlineDeviceMobile,
  HiOutlineTerminal,
} from "react-icons/hi";
import { HeaderContainer, SectionDesc, SectionName } from "../Services/styles";
import { Qualification } from "../Qualifications/qualification";
import {
  CollapseContent,
  ShortDesc,
  SkillContainer,
  SkillsContent,
  SkillWrapper,
  TextSection,
  Title,
} from "./styles";

export const SkillsSection = () => {
  return (
    <SkillContainer id="skills">
      <HeaderContainer>
        <SectionName>Skills</SectionName>
        <SectionDesc>My Technical skills</SectionDesc>
      </HeaderContainer>
      <SkillsContent>
        <SkillWrapper>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row w-full items-center">
                  <HiCode className="w-8 h-8 text-red-500" />
                  <CollapseContent>
                    <TextSection>
                      <Title>Frontend Development</Title>
                      <ShortDesc>More than 4 years experience</ShortDesc>
                    </TextSection>
                    <HiChevronUp
                      className={`${
                        open ? "" : "transform rotate-180"
                      } w-7 h-7 text-red-500 `}
                    />
                  </CollapseContent>
                </Disclosure.Button>
                <Disclosure.Panel className="px-10 pt-4 pb-2 text-sm ">
                  <ul>
                    <li className="py-2">Typescript - Javascript</li>
                    <li className="py-2">
                      React - Next.js - Redux - Redux Saga
                    </li>
                    <li className="py-2">Vue.js - Nuxt.js - Vuex</li>
                    <li className="py-2">Tailwindcss - Css - Scss - Html</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </SkillWrapper>

        <SkillWrapper>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row w-full items-center">
                  <HiOutlineDeviceMobile className="w-8 h-8 text-red-500" />
                  <CollapseContent>
                    <TextSection>
                      <Title>Mobile Development</Title>
                      <ShortDesc>More than 2 years experience</ShortDesc>
                    </TextSection>
                    <HiChevronUp
                      className={`${
                        open ? "" : "transform rotate-180"
                      } w-7 h-7 text-red-500 `}
                    />
                  </CollapseContent>
                </Disclosure.Button>
                <Disclosure.Panel className="px-10 pt-4 pb-2 text-sm ">
                  <ul>
                    <li className="py-2">Typescript - Javascript - Dart</li>
                    <li className="py-2">React Native - Expo</li>
                    <li className="py-2">Flutter - Bloc - GetX</li>
                    <li className="py-2">
                      Firebase - Hive Database - SQL Lite - Supabase
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </SkillWrapper>
      </SkillsContent>

      <SkillsContent>
        <SkillWrapper>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row w-full items-center">
                  <HiOutlineTerminal className="w-8 h-8 text-red-500" />
                  <CollapseContent>
                    <TextSection>
                      <Title>Backend Development</Title>
                      <ShortDesc>More than 4 years experience</ShortDesc>
                    </TextSection>
                    <HiChevronUp
                      className={`${
                        open ? "" : "transform rotate-180"
                      } w-7 h-7 text-red-500 `}
                    />
                  </CollapseContent>
                </Disclosure.Button>
                <Disclosure.Panel className="px-10 pt-4 pb-2 text-sm ">
                  <ul>
                    <li className="py-2">Typescript - Javascript</li>
                    <li className="py-2">Nodejs - Express - Moleculer</li>
                    <li className="py-2">Firebase - AWS Amplify</li>
                    <li className="py-2">Rest Api - GraphQL - Socket.io</li>
                    <li className="py-2">
                      PostgreSQL - MySQL - MongoDB - Oracle
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </SkillWrapper>

        <SkillWrapper>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row w-full items-center">
                  <HiOutlineCollection className="w-8 h-8 text-red-500" />
                  <CollapseContent>
                    <TextSection>
                      <Title>Other Skills</Title>
                      <ShortDesc>Some another skills</ShortDesc>
                    </TextSection>
                    <HiChevronUp
                      className={`${
                        open ? "" : "transform rotate-180"
                      } w-7 h-7 text-red-500 ml-8`}
                    />
                  </CollapseContent>
                </Disclosure.Button>
                <Disclosure.Panel className="px-10 pt-4 pb-2 text-sm ">
                  <ul>
                    <li className="py-2">Linux Command - Docker - Git</li>
                    <li className="py-2">Figma Design</li>
                    <li className="py-2">
                      Microservices - Domain Driven Design
                    </li>
                    <li className="py-2">
                      Communication - Research - Teamworks - Management -
                      Problem-solving
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </SkillWrapper>
      </SkillsContent>

      <Qualification />
    </SkillContainer>
  );
};
