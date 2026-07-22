const studyItems = [
    {
        id: 1,
        title: "BrowserRouter",
        description: "브라우저 주소와 React Router를 연결합니다.",
    },
    {
        id: 2,
        title: "Routes와 Route",
        description: "URL 경로와 페이지 컴포넌트를 연결합니다.",
    },
    {
        id: 3,
        title: "Link와 NavLink",
        description: "새로고침 없이 페이지를 이동합니다.",
    },
    {
        id: 4,
        title: "Outlet",
        description: "공통 레이아웃 안에서 자식 페이지를 렌더링합니다.",
    },
];

function StudyPage() {
    return (
        <section className="page">
            <div className="pageHeader">
                <p>Study</p>
                <h2>학습 목록</h2>
                <span>
                    React Router에서 자주 사용하는 핵심 요소를 카드로 정리합니다.
                </span>
            </div>

            <div className="cardGrid">
                {studyItems.map((item) => (
                    <article key={item.id} className="studyCard">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default StudyPage;