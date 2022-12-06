import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Turkish from "./pages/Turkish";
import English from "./pages/English";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/english' element={<English/>} />
          <Route path='/turkish' element={<Turkish/>} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
