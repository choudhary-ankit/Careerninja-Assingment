import React, { Component } from 'react'
import Style from './Howplay.module.css';
import Card from '@material-ui/core/Card';


export default class Howplay extends Component {
    render() {
        return (
            <div className={Style.body}>
                <div className={Style.body_frame}>
                    <Card className={Style.card}>
                        <div>
                            <h2>RULES FOR TIC-TAC-TOE</h2>
                        </div>
                        <div className={Style.content}>
                            <ul>
                                <li style={{marginTop:"0px"}}> The game is played on a grid that's 3 squares by 3 squares.</li>
                                <li style={{marginTop:"10px"}}>  You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares</li>
                                <li style={{marginTop:"10px"}}>  The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</li>
                                <li style={{marginTop:"10px"}}>  When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}