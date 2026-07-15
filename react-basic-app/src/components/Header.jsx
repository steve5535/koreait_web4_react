function Header({children}) {
  return (
    <header className="header">
      <p className="eyebrow">React 2일차</p>
      <h1>{children}</h1>
      <p className="description">
        하나의 화면을 여러 컴포넌트로 나누고, props를 사용해 데이터를
        전달하는 방법을 배웁니다.
      </p>
    </header>
  );
}

export default Header;