import GoalItem from "./GoalItem";

function GoalList() {
  return (
    <section className="section">
      <h2>오늘의 목표</h2>

      <ul className="goalList">
        <GoalItem>컴포넌트가 무엇인지 이해합니다.</GoalItem>
        <GoalItem>JSX의 기본 규칙을 익힙니다.</GoalItem>
        <GoalItem>props를 사용해 데이터를 전달합니다.</GoalItem>
        <GoalItem>같은 컴포넌트를 여러 번 재사용합니다.</GoalItem>
        <GoalItem>배열 데이터를 map으로 렌더링합니다.</GoalItem>
      </ul>
    </section>
  );
}

export default GoalList;