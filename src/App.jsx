import { useEffect, useState } from "react";
import './App.css'
import Info from './component/Info';
import Introduction from './component/Introduction';
import Technique from './component/Technique';
import Antecedents from './component/Antecedents';
import Project from './component/Project';
import Education from './component/Education';

function App() {
  const sections = ["info", "introduction", "technique", "antecedent", "project", "education"];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function handleScroll() {
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
          }
        }
      });

      // 페이지 끝까지 스크롤했을 경우 마지막 섹션을 active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        currentSection = "education";
      }

      setActiveSection(currentSection);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='content'>
      <div className='content-info'>
        <Info/>
        <Introduction/>
        <Technique/>
        <Antecedents/>
        <Project/>
        <Education/>
      </div>
      <div className="content-menu">
        <div className="content-menu-position">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={activeSection === section ? "active" : ""}
            >
              {section === "info" ? "기본 정보" :
               section === "introduction" ? "자기소개" :
               section === "technique" ? "기술 스택" :
               section === "antecedent" ? "경력" :
               section === "project" ? "프로젝트" : "교육"}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
