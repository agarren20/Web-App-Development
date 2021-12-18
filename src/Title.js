import "./Title.css";
export default function Title({ title }) {
  const headerStyle = { backgroundColor: "black" };
  return <h1 style={headerStyle}>{title}</h1>;
}
