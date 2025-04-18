import "../css/Project.css";

export default function Project(){
    return (
        <div id="project">
            <span>프로젝트</span>
            <div className="project-content">
                <span>영진건설기술교육원</span>
                <div className="project-date">
                    <p>미래내일 일경험</p>
                    <p>2024.11.25 ~ 2024.12.30 (5주)</p>
                </div>
                <p>
                    <a href="https://yj3.or.kr/courRegist.do?page=1" target="_blank">https://yj3.or.kr/courRegist.do?page=1</a>
                </p>
                <p>인원 : 2명(프론트 1명 ,백엔드 1명)</p>
                <p>개발기간 : 5주</p>
                <p>[담당한부분]</p>
                <ul>
                    <li>교육 수강신청</li>
                    <li>본인인증</li>
                    <li>결제기능</li>
                    <li>주차등록</li>
                    <li>신청유저 관리</li>
                </ul>
            </div>

            <div className="project-content">
                <span>Mmate 플래시21 솔루션</span>
                <div className="project-date">
                    <p>(주)플래시21</p>
                    <p>2022.11.01 - 2024.10.24</p>
                </div>
                <p>
                    <a href="https://mmate.flash21.com" target="_blank">https://mmate.flash21.com</a>
                </p>
                <p>인원 : 2명(프론트 1명 ,백엔드 1명)</p>
                <p>유지보수 기간 : 2년</p>
                <p>추가개발 : 6개월</p>
                <p>[담당한부분]</p>
                <ul>
                    <li>게시판 투표 기능</li>
                    <li>회원관리</li>
                    <li>대회접수기능</li>
                    <li>회원가입</li>
                </ul>
            </div>

            <div className="project-content">
                <span>경기도국민안전체험관</span>
                <div className="project-date">
                    <p>(주)플래시21</p>
                    <p>2023.01.02 - 2023.03.30</p>
                </div>
                <p>
                    <a href="https://ggsec.gg.go.kr/index" target="_blank">https://ggsec.gg.go.kr/index</a>
                </p>
                <p>인원 : 7명(프론트 3명 ,백엔드 4명)</p>
                <p>개발기간 : 3개월</p>
                <p>[담당한부분]</p>
                <ul>
                    <li>인스타피드 실시간 동기화</li>
                    <li>예약하기</li>
                    <li>관리자페이지 공휴일 설정</li>
                </ul>
            </div>

            <div className="project-content">
                <span>대구광역시건축사회 건축사 업무지원시스템</span>
                <div className="project-date">
                    <p>(주)플래시21</p>
                    <p>	2023.07.07 - 2023.10.20</p>
                </div>
                <p>
                    <a href="https://kirasys.kr/" target="_blank">https://kirasys.kr/</a>
                </p>
                <p>인원 : 5명(프론트 1명 ,백엔드 4명)</p>
                <p>개발기간 : 3개월</p>
                <p>[담당한부분]</p>
                <ul>
                    <li>게시판기능</li>
                    <li>자재정보시스템</li>
                    <li>표준계약서</li>
                </ul>
            </div>

        </div>
    );
}