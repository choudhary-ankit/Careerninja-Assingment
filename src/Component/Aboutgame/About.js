import React, { Component } from 'react'
import Style from './About.module.css';
import Card from '@material-ui/core/Card';


export default class About extends Component {
    render() {
        return (
            <div className={Style.body}>
                <div className={Style.body_frame}>
                    <Card className={Style.card}>
                        <div>
                            <h2>About Game</h2>
                        </div>
                        <div className={Style.content}>
                            <article>
                                Tic-tac-toe is a simple, two-player game that, 
                                if played optimally by both players, will always 
                                result in a tie. The game is also called noughts 
                                and crosses or Xs and Os.
                            </article>
                            <article>
                                Tic-tac-toe is a game that is traditionally played 
                                by being drawn on paper, and it can be played on a 
                                computer or on a variety of media. Other games, 
                                such as Connect 4, are based on this classic.
                            </article>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
