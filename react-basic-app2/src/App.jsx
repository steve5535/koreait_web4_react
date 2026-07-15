import CounterBox from "./components/CounterBox";
import "./App.css";
import NameForm from "./components/NameForm";
import FocusInput from "./components/FocusInput";
import DocumentTitle from "./components/DocumentTitle";
import TimerBox from "./components/TimerBox";

function App() {
  return (
    <main className="app">
      <CounterBox />
      <NameForm />
      <FocusInput />
      <DocumentTitle />
      <TimerBox />
    </main>
  );
}

export default App;
