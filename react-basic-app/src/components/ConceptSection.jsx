import ConceptCard from "./ConceptCard";

const concepts = [
  {
    id: 1,
    title: "컴포넌트",
    description: "화면을 구성하는 독립적인 UI 조각입니다.",
    example: "<Header />",
  },
  {
    id: 2,
    title: "JSX",
    description: "JavaScript 안에서 HTML과 비슷한 문법으로 UI를 작성합니다.",
    example: "<h1>Hello React</h1>",
  },
  {
    id: 3,
    title: "props",
    description: "부모 컴포넌트가 자식 컴포넌트에 전달하는 값입니다.",
    example: 'title="React"',
  },
];

function ConceptSection() {
  return (
    <section className="section">
      <h2>핵심 개념</h2>

      <div className="conceptGrid">
        {concepts.map((concept) => (
          <ConceptCard
            key={concept.id}
            title={concept.title}
            description={concept.description}
            example={concept.example}
          />
        ))}
      </div>
    </section>
  );
}

export default ConceptSection;