import style from './ShopLanding.module.scss'
import {NavBar} from "../../components/NavBar/NavBar";
import logo from '../../assets/kot_logo.png'
import hamlet from '../../assets/hammlet.png'
import triangle from '../../assets/triangle.png'
import icon from '../../assets/icon-card.png'
import boxLogo from '../../assets/Monitor.svg'
export const ShopLanding = () => {
    return (
        <>
            <div className={style.container}>
                <NavBar
                    image={logo}
                    info={'NFT Marketplace'}
                    links={'Link 1'}
                />
                <div className={style.hero}>
                    <div className={style.information}>
                        <h1>Discover a New Era of Crypto Currency</h1>
                        <p>Panda NFT is the primier marketplace for NFT, which are digital items you can truly own.
                            Digital items have existed for a long time, but never like this.</p>
                        <button className={style.button}>
                            Get Started
                        </button>
                    </div>
                    <div className={style.card}>
                        <img className={style.imgCard} src={hamlet} alt="hamlet"/>
                        <div style={{display: "flex", justifyContent: 'space-between'}}>
                            <h3>"Hamlet Contemplates ...</h3>
                            <button className={style.button}>BUY</button>
                        </div>
                        <div className={style.cardInfo}>
                            <img src={icon} alt="icon-card"/>
                            <h3>SalvadorDali</h3>
                            <p>Current Price</p>
                            <h2>4.89 ETH</h2>
                        </div>
                    </div>
                    <div className={style.card} style={{height: 250}}>
                        <img className={style.triangle} style={{width: 200, height: 210}} src={triangle}
                             alt="triangle"/>
                    </div>
                </div>
                <div className={style.boxContainer}>
                    <h1 >Create and sell your NFTs</h1>
                    <div className={style.boxInformation}>
                        <div className={style.boxCard}>
                            <div className={style.boxCircle}>
                                <img src={boxLogo} alt="monitor" style={{margin: 10}}/>
                            </div>
                            <h1>Set up your wallet</h1>
                            <span>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</span>
                        </div>
                        <div className={style.boxCard}>
                            <div className={style.boxCircle}>
                                <img src={boxLogo} alt="monitor" style={{margin: 10}}/>
                            </div>
                            <h1>Add your NFTs</h1>
                            <span>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</span>
                        </div>
                        <div className={style.boxCard}>
                            <div className={style.boxCircle}>
                                <img src={boxLogo} alt="monitor" style={{margin: 10}}/>
                            </div>
                            <h1>List them for sale</h1>
                            <span>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}