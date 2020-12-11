import './styles/main.css';
import './index.js';
import Header from "./components/Header/index.js";
import Main from "./pages/Main/index.js";
import Footer from "./components/Footer/index.js";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
