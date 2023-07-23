import "./UI.css";

function Button({ onClick, title, children, disabled = false }) {
  return (
    <button
      className="button"
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
