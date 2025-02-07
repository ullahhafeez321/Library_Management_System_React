export default function Button({ children, onClick, style, className }) {
  return (
    <button style={style} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
