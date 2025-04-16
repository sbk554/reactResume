import { useEffect, useState } from "react";
import person from "../assets/person.jpg";
import "../css/Info.css";

export default function Info(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="info">
            <div className="info-wrap" id="info-wrap">
                {isMobile && (
                    <div className="info-wrap-img">
                        <img src={person} alt="person" />
                    </div>
                )}
                <div className="info-wrap-content">
                    <span className="info-wrap-content-name">성보경</span>
                    <span className="info-wrap-content-history">2년차 백엔드 개발자</span>
                    <div className="info-wrap-email">
                        <span>이메일</span>
                        <span>sbk8731@naver.com</span>
                    </div>
                </div>
                {!isMobile && (
                    <div className="info-wrap-img">
                        <img src={person} alt="person" />
                    </div>
                )}
            </div>
            <div className="info-wrap-main">
                <span>사용자에게 가치 있는 서비스를 제공하며, 그 안에서 성취감과 애정을 느낄 수 있는 일을 하고 싶어 개발자의 길을 선택하게 되었습니다.</span>

                <span>웹 백엔드 개발자로 일하면서 Java, MySQL, Oracle 등을 활용해 다양한 기능을 구현해왔습니다.</span>
                <span>주로 Java와 REST API 기반의 시스템을 다뤘으며, 단기적인 요구를 충족시키는 동시에 장기적인 유지보수와 확장성까지 고려하는 개발을 지향합니다.</span>
                <span>문제를 해결하는 과정에서 배우고 성장하는 즐거움을 느끼며, 더 나은 코드를 고민하고 실천하려 노력하고 있습니다.</span>
            </div>
        </div>
    )
}