import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Style from './Homepage.module.css'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export default class Homepage extends Component {
    render() {
        return (
            <div className={Style.body}>
                <div className={Style.body_frame}>
                    <div className={Style.logo_frame}>
                        <div>
                            <img src="./logo192.png" className={Style.app_logo} alt="logo" />
                            <Typography variant="h5">Every Thing is connected</Typography>
                        </div>
                        <div>
                            <Typography variant="h4">Tic-Tac-Toe</Typography>
                        </div>
                    </div>
                    <div className={Style.card_div}>
                        <Link to="/playingmode" style={{textDecoration:"none", color:"white"}}>
                            <Card className={Style.card}>
                                <Button color="inherit"  style={{color:"#005a9e"}} size="large">Start Game</Button>
                            </Card>
                        </Link>
                    </div>
                </div>
                <div className={Style.table}>
                    <div>
                        <h4 style={{color:"#ffad06"}}>fun fact about Game</h4>
                    </div>
                    <Card className={Style.card_arrng}>
                        <div >
                            <p> > Tic Tac Toe Game was started in 1300BC</p>
                            <p> > Tic Tac Toe first time played at Egypt</p>
                            <p> > An Early variation of this game was played in the Roman Empire</p>
                        </div>
                        <div >
                            <p> > 255168  games of Tic Tac Toe are possible</p>
                            <p> > In England the Name of Tic Tac Toe is "Noughts and Cross</p>
                            <p> > Tic Tac were first introduced by Ferrero in 1968</p>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
