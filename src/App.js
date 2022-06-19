import "./App.css";
import Dictionary from "./dictionary";
import OpenSource from "./openSource";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header></header>
        <Dictionary />
        <OpenSource />
      </div>
    </div>
  );
}
