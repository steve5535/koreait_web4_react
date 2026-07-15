function NextStep({ children, title = "사용자가 입력안함", ...restProps }) {
  return (
    <section className="nextStep" {...restProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default NextStep;
