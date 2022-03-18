import "./styles.css";
import Hello from "./components/Hello";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Thú vị vậy ta</h2>
      <Hello name="nhan" />
      <Hello name="Hoa">
        <div>allo</div>
      </Hello>
    </div>
  );
}
