import "../css/Antecedents.css"

export default function Antecedents(){
    return (
        <div id="antecedent">
            <span>경력</span>
            <div className="antecedent-content">
                <span>영진건설기술교육원</span>
                <div className="content-date">
                    <p>미래내일 일경험</p>
                    <p>2024.11.25 ~ 2024.12.30 (5주)</p>
                </div>
                <p>수강신청</p>
            </div>
            <div className="antecedent-content">
                <span>(주)플래시21</span>
                <div className="content-date">
                    <p>주임 | 개발팀 </p>
                    <p>2022.09.19 ~ 2024.11.04 (2년 2개월)</p>
                </div>
                <p></p>
            </div>
        </div>
    );
}