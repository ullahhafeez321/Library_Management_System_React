export default function Button({ children, onClick, style }) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
