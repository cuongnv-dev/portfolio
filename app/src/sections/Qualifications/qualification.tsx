import { useState } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";
import { HeaderContainer, SectionDesc, SectionName } from "../Services/styles";
import {
  ButtonLabel,
  Circle,
  LeftQualification,
  Line,
  QualificationContent,
  QualificationData,
  QualificationTitle,
  TabButton,
  TabContainer,
  Time,
} from "./styles";

export const Qualification = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  return (
    <div className="pt-28 pb-14">
      <HeaderContainer>
        <SectionName>Qualification</SectionName>
        <SectionDesc>My personal journey</SectionDesc>
      </HeaderContainer>

      <TabContainer>
        <div className="flex-1 flex flex-row justify-end">
          <TabButton
            active={activeTab === "work"}
            onClick={() => setActiveTab("work")}
          >
            <HiOutlineAcademicCap className="w-8 h-8" />
            <ButtonLabel>Work</ButtonLabel>
          </TabButton>
        </div>
        <div className="flex-1">
          <TabButton
            active={activeTab === "education"}
            onClick={() => setActiveTab("education")}
          >
            <HiOutlineBriefcase className="w-8 h-8" />
            <ButtonLabel>Education</ButtonLabel>
          </TabButton>
        </div>
      </TabContainer>
      <div
        className={`mt-8 transition-all ease-in-out duration-300  ${
          activeTab === "work" ? "visible" : "hidden"
        }`}
      >
        <QualificationData>
          <LeftQualification>
            <div>
              <QualificationTitle>Central Retails</QualificationTitle>
              <div className="mt-1">Full-stack Developer</div>
              <Time>
                <HiOutlineCalendar className="w-3 h-3" />
                <div className="ml-2 ">Mar 2021 - Present</div>
              </Time>
            </div>
          </LeftQualification>
          <div>
            <Circle></Circle>
            <Line></Line>
          </div>
          <div className="flex-1"></div>
        </QualificationData>
        {/* data 2 */}
        <QualificationData>
          <div className="flex-1"></div>
          <div>
            <Circle></Circle>
            <Line></Line>
          </div>
          <div className="flex-1">
            <QualificationTitle>LTV Software</QualificationTitle>
            <div className="mt-1">Full-stack Developer</div>
            <Time>
              <HiOutlineCalendar className="w-3 h-3" />
              <div className="ml-2 ">Apr 2020 - Mar 2021</div>
            </Time>
          </div>
        </QualificationData>
        {/* data3 */}
        <QualificationData>
          <LeftQualification>
            <>
              <QualificationTitle>
                Management Partner Vietnam
              </QualificationTitle>
              <div className="mt-1">Backend Developer</div>
              <Time>
                <HiOutlineCalendar className="w-3 h-3" />
                <div className="ml-2 ">Oct 2019 - Apr 2020</div>
              </Time>
            </>
          </LeftQualification>
          <div>
            <Circle></Circle>
          </div>
          <div className="flex-1"></div>
        </QualificationData>
      </div>

      {/* Education */}
      <div
        className={`mt-8 transition-all ease-in-out duration-300  ${
          activeTab === "education" ? "visible" : "hidden"
        }`}
      >
        <QualificationData>
          <LeftQualification>
            <div>
              <QualificationTitle>FPT University</QualificationTitle>
              <div className="mt-1">Software Engineering</div>
              <Time>
                <HiOutlineCalendar className="w-3 h-3" />
                <div className="ml-2 ">2014 - 2019</div>
              </Time>
            </div>
          </LeftQualification>
          <div>
            <Circle></Circle>
          </div>
          <div className="flex-1"></div>
        </QualificationData>
      </div>
    </div>
  );
};
