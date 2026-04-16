import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", position: "relative" }}>
      <CursorGlow />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
