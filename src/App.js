import "./styles.css";
import Before from "./data/Before";
import After from "./data/After";
export default function App() {
  return (
    <div className="App">
      <h1>CONV</h1>
      <Before />
      <button>保存</button>
      <button>変換</button>
      <After />
    </div>
  );
}
