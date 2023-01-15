import {  useContext} from "react";
import List from "./pages/List";
import { BrowserRouter as BROWSER, Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { Context } from "./Context/Context";
import Principal from "./pages/Principal";
import NoutFount from "./pages/NotFount";

function App() {

  const {capa} = useContext(Context)
  return (  
    <div className="App">
      <BROWSER> 
        <section className="App-content">


          <div ref={capa}  className="capa">
            <a href="">A</a><a href="">B</a><a href="">C</a><a href="">D</a>
          </div>
          
          <Home />
          <Routes>

            <Route path="/search/:keyword" element={ <List />} />
            <Route path="/gif/detail/:id" element={<Detail />}/>
            <Route path="/" element={<Principal />} />
            <Route path="*" element={<NoutFount />} />

          </Routes>

        </section>
      </BROWSER>
    </div>
  );
}

export default App;
