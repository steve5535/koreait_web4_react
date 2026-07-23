import ThemeProvider from "./contexts/ThemeProvider";
import Header from "./contexts/Header";
import UserProvider from "./contexts/UserProvider";
import "./App.css";
import DashBoard from "./contexts/DashBoard";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <main className="app">
      <Header />
      <DashBoard />
    </main>
  );
}

export default App
