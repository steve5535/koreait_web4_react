import { useState } from "react";
import { useTheme } from "./ThemeProvider"
import { useUser } from "./UserProvider";

function SettingsPanel() {
    const { theme, changeTheme } = useTheme();
    const { user, updateName, updateRole, resetUser } = useUser();

    const [nameInput, setNameInput] = useState(user.name);

    const handleNameSubmit = (event) => {
        event.preventDefault();

        const nextName = nameInput.trim();

        if (!nextName) {
            return;
        }

        updateName(nextName);
    };

    return (
        <section className="panel">
            <div className="panelHeader">
                <h2>설정</h2>
                <p>Context 값을 읽고, Context에서 제공한 함수로 값을 변경합니다.</p>
            </div>

            <div className="settingGroup">
                <h3>테마 설정</h3>

                <label>
                    <input
                        type="radio"
                        name="theme"
                        checked={theme === "light"}
                        onChange={() => changeTheme("light")}
                    />
                    라이트 모드
                </label>

                <label>
                    <input
                        type="radio"
                        name="theme"
                        checked={theme === "dark"}
                        onChange={() => changeTheme("dark")}
                    />
                    다크 모드
                </label>
            </div>

            <div className="settingGroup">
                <h3>역할 설정</h3>

                <select
                    value={user.role}
                    onChange={(event) => updateRole(event.target.value)}
                >
                    <option value="수강생">수강생</option>
                    <option value="멘토">멘토</option>
                    <option value="관리자">관리자</option>
                </select>
            </div>

            <form className="settingGroup" onSubmit={handleNameSubmit}>
                <h3>이름 변경</h3>

                <input
                    value={nameInput}
                    onChange={(event) => setNameInput(event.target.value)}
                    placeholder="이름을 입력하세요"
                />

                <button type="submit">
                    이름 변경
                </button>
            </form>

            <button type="button" onClick={resetUser}>
                사용자 정보 초기화
            </button>
        </section>
    );
}

export default SettingsPanel;