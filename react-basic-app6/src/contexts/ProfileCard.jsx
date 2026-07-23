import { useUser } from "./UserProvider";

function ProfileCard() {
    const { user } = useUser();

    return (
        <section className="panel">
            <div className="panelHeader">
                <h2>사용자 프로필</h2>
                <p>UserContext에서 사용자 정보를 읽어옵니다.</p>
            </div>

            <div className="profileBox">
                <div className="avatar">{user.name.slice(0, 1)}</div>

                <dl>
                    <div>
                        <dt>이름</dt>
                        <dd>{user.name}</dd>
                    </div>

                    <div>
                        <dt>이메일</dt>
                        <dd>{user.email}</dd>
                    </div>

                    <div>
                        <dt>역할</dt>
                        <dd>{user.role}</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}

export default ProfileCard;