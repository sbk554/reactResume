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
                <p>인원 : 2명(프론트 1명 ,백엔드 1명) 본인 지분율(100%)</p>
                <p>개발기간 : 5주</p>
                <p>[담당한부분]</p>
                <ul>
                    <li>교육 수강신청 시스템 백엔드 전반 개발</li>
                    <li>본인인증 모듈 연동 및 요청 데이터 처리 로직 구현</li>
                    <li>PG사 연동을 통한 결제 기능 개발 및 검증</li>
                    <li>주차 등록 기능 및 신청 사용자 관리 기능 구현</li>
                    <li>수강 신청 이력 저장/조회 기능 포함한 DB 설계 및 SQL 최적화 수행</li>
                </ul>
            </div>

            <div className="project-content">
                <span>Mmate 플래시21 솔루션</span>
                <div className="project-date">
                    <p>(주)플래시21</p>
                    <p>2022.11 - 2024.10</p>
                </div>
                <p>
                    <a href="https://mmate.flash21.com" target="_blank">https://mmate.flash21.com</a>
                </p>
                <p>인원 : 2명(프론트 1명 ,백엔드 5명) 본인 지분율(80%)</p>
                <p>유지보수 기간 : 2년</p>
                <p>추가개발 : 6개월</p>
                <p>[담당한부분]</p>
                <ul>
                    <li>기존 솔루션 유지보수 및 고도화 작업 지속 수행</li>
                    <li>게시판 내 투표 기능 추가 및 관련 데이터 모델 설계</li>
                    <li>대회 접수 및 신청 관리 기능 개발 (신청 상태, 접수 내역 확인 등 포함)</li>
                    <li>운영 중 발생한 버그 수정 및 신규 요청사항 처리 다수 대응</li>
                </ul>
            </div>

            <div className="project-content">
                <span>경기도국민안전체험관</span>
                <div className="project-date">
                    <p>(주)플래시21</p>
                    <p>2023.01 - 2023.03</p>
                </div>
                <p>
                    <a href="https://ggsec.gg.go.kr/index" target="_blank">https://ggsec.gg.go.kr/index</a>
                </p>
                <p>인원 : 7명(프론트 3명 ,백엔드 4명) 본인 지분율(20%)</p>
                <p>개발기간 : 3개월</p>
                <p>[담당한부분]</p>
                <ul>
                    <li>SNS 연동형 인스타그램 피드 실시간 동기화 기능 구현 (API 기반 연동)</li>
                    <li>사용자 예약 편의를 위한 체험 예약 기능 개발 (날짜별 인원 제한, 중복 방지 처리 등 포함)</li>
                    <li>관리자 페이지 내 공휴일 설정 기능 개발, 예약 차단 기능과 연동</li>
                    <li>DB 테이블 설계 및 각 모듈별 연계 처리 로직 구현</li>
                </ul>
            </div>

            <div className="project-content">
                <span>대구광역시건축사회 건축사 업무지원시스템</span>
                <div className="project-date">
                    <p>(주)플래시21</p>
                    <p>	2023.07 - 2023.10</p>
                </div>
                <p>
                    <a href="https://kirasys.kr/" target="_blank">https://kirasys.kr/</a>
                </p>
                <p>인원 : 5명(프론트 1명 ,백엔드 4명) 본인 지분율(30%)</p>
                <p>개발기간 : 3개월</p>
                <p>[담당한부분]</p>
                <ul>
                    <li>건축사 업무 처리를 위한 내부 시스템 백엔드 개발 참여</li>
                    <li>데이터베이스 설계 및 구축 담당 (MySQL 기반 ERD 구성 및 테이블 생성)</li>
                    <li>게시판, 자재 정보 시스템, 표준계약서 관리 기능 등 주요 모듈 개발</li>
                    <li>JSP 기반 페이지와 연동되는 RESTful API 및 쿼리 구현</li>
                </ul>
            </div>

        </div>
    );
}