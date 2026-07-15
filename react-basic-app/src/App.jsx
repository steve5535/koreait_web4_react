import "./App.css";
import ConceptSection from "./components/ConceptSection";
import GoalList from "./components/GoalList";
import Header from "./components/Header";
import NextStep from "./components/NextStep";

function App() {
  return (
    <main className="app">
      <Header>안녕하세요 제목입니다</Header>
      <NextStep id="123" gggg="hello">
        <p>
          다음 시간에는 useState, useRef, useEffect를 사용해 화면의 상태와
          생명주기 흐름을 다룹니다.
        </p>
      </NextStep>
      <GoalList></GoalList>
      <ConceptSection></ConceptSection>
    </main>
  );
}

export default App;
