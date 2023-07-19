import './App.css'
import {NavBar} from "./components/NavBar/NavBar";
import {ColorTabel} from "./Landing/ColorTable/ColorTabel";
import logo from './assets/logo.png'
import {ExampleLanding} from "./Landing/ExampleLanding/ExampleLanding";
import OklchPalette from "./components/OklchPalette/Palettes/OklchPalette";

function App() {

    return (
        <>
            <div style={{background: 'lightgray'}}>
                <NavBar image={logo} info='tekerau' links={"Link"}/>
                <OklchPalette />
                <ExampleLanding />
                <ColorTabel />
            </div>
        </>
    )
}

export default App
