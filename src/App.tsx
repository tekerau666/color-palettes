import './App.css'
import {NavBar} from "./components/NavBar/NavBar";
import OklchPalette from "./components/OklchPalette/OklchPalette";
import {PhoneLanding} from "./Landing/Phone/PhoneLanding";
import {ColorTabel} from "./Landing/ColorTable/ColorTabel";
import {ShopLanding} from "./Landing/Shop/ShopLanding";
import logo from './assets/logo.png'
import {ExampleLanding} from "./Landing/ExampleLanding/ExampleLanding";
function App() {

    return (
        <>
            <div style={{background: 'lightgray'}}>
            <NavBar image={logo} info='tekerau' links='Link'/>
            <OklchPalette/>
            <ExampleLanding/>
            <ColorTabel/>
            </div>
        </>
    )
}

export default App
