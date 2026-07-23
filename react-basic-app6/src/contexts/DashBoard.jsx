import React from 'react'
import { useTheme } from './ThemeProvider'
import { useUser } from './UserProvider';
import DashBoardCard from './DashBoardCard';
import ProfileCard from './ProfileCard';
import SettingsPanel from './SettingsPanel';

function Dashboard() {
    const { theme, isDark } = useTheme();
    const { user } = useUser();

    return (
        <section className={`dashboard${isDark ? "dark" : ""}`}>
            <div className="dashboardGrid">
                <DashBoardCard
                    title="현재 테마"
                    value={theme}
                    description="ThemeContext에서 관리하는 전역 테마 값입니다."
                />

                <DashBoardCard
                    title="사용자 역할"
                    value={user.role}
                    description="UserContext에서 관리하는 사용자 역할입니다."
                />

                <DashBoardCard
                    title="Context 사용"
                    value="2개"
                    description="ThemeContext와 UserContext를 함께 사용합니다."
                />
            </div>

            <div className="contentGrid">
                <ProfileCard />
                <SettingsPanel />
            </div>
        </section>
    );
}

export default Dashboard;
