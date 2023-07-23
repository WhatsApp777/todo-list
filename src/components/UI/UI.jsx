function Button({ onClick, title, children, disable = false }) {
  return (
    <button onClick={onClick} title={title} disable={disable}>
      {children}
    </button>
  );
}

export default Button;
