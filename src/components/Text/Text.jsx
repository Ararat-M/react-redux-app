import "./text.css";

function Text({ children, fz=16 }) {

  return (
    <p className="p" style={{ fontSize: fz }}>
      {children}
    </p>
  );
}

export default Text;