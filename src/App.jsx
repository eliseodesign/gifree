import { useContext } from "react";
import { HashRouter as BROWSER, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Principal from "./pages/Principal";
import NoutFount from "./pages/NotFount";
import { ProviderApp } from "./Context/ContextApp";
import ModalMenu from "./components/ModalMenu";
import Tags from "./components/Tags";

function App() {


  return (
    <ProviderApp>
      <div className="App">
    
        <BROWSER>
          <section className="App-content">
            <ModalMenu />
            

            <Home />
            <Routes>
              <Route path="/" element={<Principal ><Tags /></Principal>} />
              <Route path="/search/:keyword" element={<List />} />
              <Route path="/gif/detail/:id" element={<Detail />} />
              <Route path="*" element={<NoutFount />} />
            </Routes>
          </section>
        </BROWSER>
      </div>
    </ProviderApp>
  );
}

export default App;
