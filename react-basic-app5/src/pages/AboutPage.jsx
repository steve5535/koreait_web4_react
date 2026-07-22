function AboutPage() {
    return (
        <section className="page">
            <div className="pageHeader">
                <p>About</p>
                <h2>라우팅이 필요한 이유</h2>
                <span>
                    SPA에서도 사용자는 여러 화면을 이동해야 하므로 URL과 화면을
                    연결하는 라우팅이 필요합니다.
                </span>
            </div>

            <div className="infoGrid">
                <article>
                    <h3>URL과 화면 연결</h3>
                    <p>
                        `/about`, `/study`, `/profile`처럼 경로에 따라 다른
                        컴포넌트를 렌더링합니다.
                    </p>
                </article>

                <article>
                    <h3>새로고침 없는 이동</h3>
                    <p>
                        Link와 NavLink를 사용하면 전체 문서를 다시 받지 않고 화면을
                        전환할 수 있습니다.
                    </p>
                </article>

                <article>
                    <h3>공통 레이아웃</h3>
                    <p>
                        Outlet을 사용하면 Header 같은 공통 구조는 유지하고 페이지
                        내용만 바꿀 수 있습니다.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default AboutPage;