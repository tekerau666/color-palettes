import {PhoneLanding} from "../Phone/PhoneLanding";
import {ShopLanding} from "../Shop/ShopLanding";
import c from './ExampleLanding.module.scss'
export const ExampleLanding = () => {
    return (
        <>
            <div className={c.container}>
                <PhoneLanding/>
                <ShopLanding/>
            </div>
        </>
    )
}