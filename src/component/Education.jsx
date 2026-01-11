import "../css/Education.css"

export default function Education(){
    return (
        <div id="education">
            <span>교육</span>
            <div className="education-content">
                <span>영진직업전문학교(스마트웹앱)</span>
                <div className="education-date">
                    <p>사설교육 | React 풀스텍 교육</p>
                    <p>2024.12.31 ~ 2025.07.31</p>
                </div>
            </div>
            <div className="education-content">
                <span>Ai스쿨</span>
                <div className="education-date">
                    <p>사설교육</p>
                    <p>2022.03 ~ 2022.08 | 수료</p>
                </div>
            </div>
            <div className="education-content">
                <span>경운대학교</span>
                <div className="education-date">
                    <p>4년제 대학교 | 항공정보통신공학과</p>
                    <p>2013.03 ~ 2020.02 | 졸업</p>
                </div>
            </div>
        </div>
    );
}