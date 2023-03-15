import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
          <div className="subtitle">What do you want to know?</div>
          <Dictionary defaultWord={"Smile"} />
        </header>
        <footer>
          <a
            href="https://github.com/MargaridaFCosta/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Coded
          </a>{" "}
          by Margarida Fonseca e Costa
        </footer>
      </div>
    </div>
  );
}
