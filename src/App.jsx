import "./app.css";
import GetUnicorns from "./pages/GetUnicorns";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowUnicorn from "./pages/ShowUnicorn";
import CreateUnicorn from "./pages/CreateUnicorn";

function App() {
  const urlBase = 'https://example-unicorns-api.vercel.app/unicornios'
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<GetUnicorns url={urlBase}/>} path="/unicorns"/>
            <Route element={<ShowUnicorn update={true} url={urlBase}/>} path="/show-unicorn/:id"/>
            <Route element={<CreateUnicorn validation="create" url={urlBase}/>} path="/create-unicorn"/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
