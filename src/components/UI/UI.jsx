function Button({ onClick, title, children, disabled = false }) {
  return (
    <button onClick={onClick} title={title} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
