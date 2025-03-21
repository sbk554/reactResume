import person from "../assets/person.jpg";
import "../css/Info.css";

export default function Info(){
    return (
        <div id="info">
            <div className="info-wrap">
                <div className="info-wrap-content">
                    <span className="info-wrap-content-name">성보경</span>
                    <span className="info-wrap-content-history">2년차 백엔드 개발자</span>
                    <div>
                        <span>이메일</span>
                        <span>sbk8731@naver.com</span>
                    </div>
                </div>
                <div className="info-wrap-img">
                    <img src={person} />
                </div>
            </div>
            <div className="info-wrap-main">
                <span>서비스에 기여하여 애정과 보람을 느끼고,
                끊임없이 성장할 수 있는 일을 하고자 개발자를 희망하게 되었습니다.</span>

                <span>Java, Springboot, MySQL 을 사용해 웹 백엔드 개발자로 근무중입니다.</span>
                <span>사용 기술스택은 Java, SpringBoot, Spring Data JPA, RESTful API, Git입니다.</span>
                <span>JavaScript&#40;TypeScript&#41;, React로 프론트엔드 개발도 가능합니다.</span>

                <span>당장 필요한 요구사항을 해결하면서, 더 넓은 시야를 가지고 추후에 생길 수 있는 일을 고려해 개발하려고 합니다.</span>
            </div>
        </div>
    )
}