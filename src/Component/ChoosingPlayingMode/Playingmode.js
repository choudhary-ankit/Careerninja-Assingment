import React, { Component } from 'react'
import Style from './Playingmode.module.css';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';

export default class Playingmode extends Component {
    render() {
        return (
            <div className={Style.body}>
                <div className={Style.body_frame}>
                    <Card className={Style.card}>
                        <div className={Style.xo_arrng}>
                            <h3 className={Style.x_arrng}>X</h3>
                            <h3 className={Style.o_arrng}>O</h3>
                        </div>
                        <div>
                            <p>Choose your playing mode</p>
                        </div>
                        <div className={Style.btn_arrng}>
                            <Link to="/playerdetailsai" style={{textDecoration:"none", color:"white"}}>
                                <button className={Style.btn}>With AI</button>
                            </Link>
                            <Link to="/playerdetails" style={{textDecoration:"none", color:"white"}}>
                                <button className={Style.btn}>With friend</button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
