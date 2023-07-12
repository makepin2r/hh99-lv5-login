import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Router/>
        </BrowserRouter>
    );
}

export default App;
