import ThemeProvider from "./contexts/ThemeProvider";
import Header from "./contexts/Header";
import UserProvider from "./contexts/UserProvider";

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
    <Header />
  );
}

export default App
