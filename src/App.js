import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
          <Dictionary defaultWord={"Smile"} />
        </header>
      </div>
    </div>
  );
}
