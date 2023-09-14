import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="page-container">
      <div id="content-wrap>">
        <Header />
        <Game />
      </div>
      <Footer />
    </div>
  );
}
