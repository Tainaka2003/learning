import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <NewHeader />
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <div className="App">
                <ul>
                    <li>Член</li>
                    <li>Член</li>
                    <li>Член</li>
                    <li>Член</li>
                </ul>
            </div>
        </div>
    );
}


const NewHeader = () => {
    return (
        <div className="App">
            <ul>
                <li>Не член</li>
                <li>Не член</li>
                <li>Не член</li>
                <li>Не член</li>
            </ul>
        </div>
    );
}

export default App;
