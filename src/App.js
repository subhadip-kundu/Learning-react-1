import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar'
// import TextForm from './Components/TextForm';

let name = "SUBHADIP";

function App() {
    return (
        <>
            <Navbar title="React"/>
            <div className="coder">
                <h1>Hello, {name}</h1>
            </div>

            {/* <div className="container my-3" >
            <TextForm lebel="Enter any text here to get it on Uppercase/Lowercase : "/>
            </div> */}

            <About/>
        </>
    );
}

export default App;