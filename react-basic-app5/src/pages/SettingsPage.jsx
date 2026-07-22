import { useState } from "react";

function SettingsPage() {
    const [receiveEmail, setReceiveEmail] = useState(true);
    const [showGuide, setShowGuide] = useState(false);

    return (
        <section className="page">
            <div className="pageHeader">
                <p>Settings</p>
                <h2>설정</h2>
                <span>
                    페이지 컴포넌트 안에서도 기존에 배운 useState를 함께 사용할 수
                    있습니다.
                </span>
            </div>

            <div className="settingsList">
                <label>
                    <span>
                        <strong>이메일 알림</strong>
                        <small>수업 관련 알림을 이메일로 받습니다.</small>
                    </span>

                    <input
                        type="checkbox"
                        checked={receiveEmail}
                        onChange={() => setReceiveEmail((prev) => !prev)}
                    />
                </label>

                <label>
                    <span>
                        <strong>학습 가이드 표시</strong>
                        <small>페이지 상단에 추가 안내 문구를 표시합니다.</small>
                    </span>

                    <input
                        type="checkbox"
                        checked={showGuide}
                        onChange={() => setShowGuide((prev) => !prev)}
                    />
                </label>
            </div>

            {showGuide && (
                <p className="guideMessage">
                    React Router는 화면 이동을 담당하고, 각 페이지 내부에서는
                    useState, useEffect 같은 Hook을 그대로 사용할 수 있습니다.
                </p>
            )}
        </section>
    );
}

export default SettingsPage;