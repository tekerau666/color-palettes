import style from './PhoneLanding.module.scss'
import battery from '../../assets/iphone-battery.svg'
import wifi from '../../assets/iphone-wifi.svg'
import network from '../../assets/iphone-network.svg'
import vahui from '../../assets/vahui.png'
import bank from '../../assets/bank.svg'
import ipnone from '../../assets/iphone.svg'
import comment from '../../assets/comment.svg'
import {FC} from "react";

interface PhoneLandingProps {
    color?: string
}
export const PhoneLanding: FC<PhoneLandingProps> = ({ color }) => {
    return (
        <div>
            <div className={style.container} style={{color: color}}>
                <div className={style.deviceFrame}>
                    <div className={style.statusBar}>
                        <div className={style.clock}>
                            YOTA
                        </div>
                        <div className={style.information}>
                            <img src={network} alt="network"/>
                            <img src={wifi} alt="wifi"/>
                            <img src={battery} alt="battery"/>
                        </div>
                    </div>
                    <div className={style.deviceContent}>
                        <span style={{fontSize: '33px'}}>Воскбота</span>
                        <span style={{fontSize: '57px'}}>4:44</span>
                    </div>
                    <img src={vahui} alt="vahui"
                         style={{width: '362px', height: '320px', borderRadius: '115px', margin: '8px 24px 0'}}/>
                    <div className={style.row}>
                        <div className={style.rowContent}>
                            <img src={bank} alt="bank" style={{width: '20px'}}/>
                            <span style={{marginTop: '15px', fontStyle: 'italic', fontSize: '14px'}}>Bank</span>
                            <span
                                style={{marginTop: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                        </div>
                        <div className={style.rowContent}>
                            <img src={comment} alt="bank" style={{width: '20px'}}/>
                            <span style={{marginTop: '15px', fontStyle: 'italic', fontSize: '14px'}}>Massage</span>
                            <span
                                style={{marginTop: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                        </div>
                        <div className={style.rowContent}>
                            <img src={ipnone} alt="bank" style={{width: '20px'}}/>
                            <span style={{marginTop: '15px', fontStyle: 'italic', fontSize: '14px'}}>Phone call</span>
                            <span
                                style={{marginTop: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}