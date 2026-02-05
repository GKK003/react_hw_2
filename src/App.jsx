import "./App.css";
import Image from "./components/img component/img";
import Header from "./components/header components/header";
import Paragraph from "./components/paragraph component/p";
import Eth from "./components/eth and time components/eth";
import Line from "./components/line component/line";
import Author from "./components/author component/author";

function App() {
  return (
    <>
      <div className="main_div">
        <Image />
        <Header />
        <Paragraph />
        <Eth />
        <Line />
        <Author />
      </div>
    </>
  );
}

export default App;
