import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="page-container">
      <div id="content-wrap>">
        <Header />
        <Board />
      </div>
      <Footer />
    </div>
  );
}
