function ProfilePage() {
    return (
        <section className="page">
            <div className="pageHeader">
                <p>Profile</p>
                <h2>프로필</h2>
                <span>
                    페이지 이동 후에도 공통 Header는 유지되고 본문만 변경됩니다.
                </span>
            </div>

            <div className="profileBox">
                <div className="avatar">R</div>

                <div>
                    <h3>React Learner</h3>
                    <p>컴포넌트, Hook, Router를 단계적으로 학습하고 있습니다.</p>
                </div>
            </div>
        </section>
    );
}

export default ProfilePage;