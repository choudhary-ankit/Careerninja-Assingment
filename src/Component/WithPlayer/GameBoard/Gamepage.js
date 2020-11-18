import React, { Component } from 'react'
import Style from './Gamepage.module.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default class Gamepage extends Component {
    constructor(props){
        super(props)
        this.state={
            first_move:'',
            second_move:'',
            selected:'',
            boxes:[[],[],[]],
            players:0,
            winner:'',
            draw:'',
            first_input:null,
            second_input:null,
            modalopen:false,
            count_one:0,
            count_two:0,
            display_timer:"show",
            display_game:"none",
        }
    }
    
    componentDidMount=()=>{
        let first_move = localStorage.getItem('first_move');
        let second_move = localStorage.getItem('second_move');
        let selected = localStorage.getItem('selected');
        
        setTimeout(() => {
            this.setState({
                first_move:first_move,
                second_move:second_move,
                selected:selected
    
            })
            if(this.state.selected==='x'){
                this.setState({first_input:'x', second_input:'o'})
            }
            else if(this.state.selected==='o'){
                this.setState({first_input:'o', second_input:'x'})
            }
            

        }, 5000);
    }
    
    fillXo=(row, col)=>{
        const newboxes=this.state.boxes.slice();
        if (newboxes[row][col]===undefined){
            newboxes[row][col]=this.state.players
            this.setState({
                players:1-this.state.players,
                boxes:newboxes
            })
            if(this.gameover()){
                if(this.state.players===0){
                    this.setState({
                        modalopen:true,
                        winner:this.state.first_move,
                        count_one:this.state.count_one+1
                    })

                }
                else{
                    this.setState({
                        modalopen:true,
                        winner:this.state.second_move,
                        count_two:this.state.count_two+1
                    })
                }
            }
            else if(this.matchdraw()){
                this.setState({
                    modalopen:true,
                    draw:"Match is Draw"

                })
            }
        }
        
    }
    fillbox=(row, col)=>{
        if(this.state.boxes[row][col]===0){
            return(
                <div className={this.state.first_input==='x'?Style.div_x:Style.div_o}>{this.state.first_input}</div>
                )
            }
        else if(this.state.boxes[row][col]===1){
            return(
                <div className={this.state.first_input==='x'?Style.div_o:Style.div_x}>{this.state.second_input}</div>
                )
            }
    }
    rowchecked=()=>{
        for(let i=0; i<3; i++){
            if(this.state.boxes[i][0]===this.state.boxes[i][1] && 
                this.state.boxes[i][1]===this.state.boxes[i][2] && 
                this.state.boxes[i][0]!==undefined){
                    return true;
                }
            }
            return false;
        }
    colchecked=()=>{
        for(let i=0; i<3; i++){
            if(this.state.boxes[0][i]===this.state.boxes[1][i] && 
                this.state.boxes[1][i]===this.state.boxes[2][i] && 
                this.state.boxes[0][i]!==undefined){
                return true;
            }
        }
        return false;
    }
    diagonalchecked=()=>{
        if(this.state.boxes[0][0]===this.state.boxes[1][1] && 
            this.state.boxes[1][1]===this.state.boxes[2][2] && 
            this.state.boxes[0][0]!==undefined)
            {
                return true;
            }
        if(this.state.boxes[0][2]===this.state.boxes[1][1] && 
            this.state.boxes[1][1]===this.state.boxes[2][0] && 
            this.state.boxes[0][2]!==undefined)
            {
                return true;
            }

        return false;
    }
    matchdraw=()=>{
        if(this.state.boxes[0][0]!==undefined &&
           this.state.boxes[0][1]!==undefined &&
           this.state.boxes[0][2]!==undefined && 
           this.state.boxes[1][0]!==undefined &&
           this.state.boxes[1][1]!==undefined &&
           this.state.boxes[1][2]!==undefined &&
           this.state.boxes[2][0]!==undefined &&
           this.state.boxes[2][1]!==undefined &&
           this.state.boxes[2][2]!==undefined 
        )
        {
            return true
        }
    }
    gameover=()=>{
        return this.rowchecked() ||this.colchecked() || this.diagonalchecked()
    }
    handleClose=()=>{
        this.setState({
            modalopen:false
        })
    }
    modalClose=()=>{
        this.setState({
            modalopen:false,
            boxes:[[],[],[]],
            draw:'',
        })
    }
    render() {
        console.log(this.state.selected)
        return (
            <div className={Style.body}>
                <div className={Style.body_frame}>
                    <Card className={Style.card}>
                        <div className={Style.card_body} style={{display:`${this.state.display_game}`}}>
                            <div>
                                <p>GameBoard</p>
                            </div>
                            <div className={Style.scorecard_arrng}>
                                <p>{this.state.first_move}</p>
                                <Button variant="contained" size="small" style={{height:"20px", backgroundColor:"white"}} >{`${this.state.count_one}-${this.state.count_two}`}</Button>
                                <p>{this.state.second_move}</p>
                            </div>
                            <div className={Style.gamediv}>
                                <div className={Style.divbox1}  onClick={()=>this.fillXo(0,0)}>{this.fillbox(0,0)}</div>
                                <div className={Style.divbox2}  onClick={()=>this.fillXo(0,1)}>{this.fillbox(0,1)}</div>
                                <div className={Style.divbox3}  onClick={()=>this.fillXo(0,2)}>{this.fillbox(0,2)}</div>
                                <div className={Style.divbox4}  onClick={()=>this.fillXo(1,0)}>{this.fillbox(1,0)}</div>
                                <div className={Style.divbox5}  onClick={()=>this.fillXo(1,1)}>{this.fillbox(1,1)}</div>
                                <div className={Style.divbox6}  onClick={()=>this.fillXo(1,2)}>{this.fillbox(1,2)}</div>
                                <div className={Style.divbox7}  onClick={()=>this.fillXo(2,0)}>{this.fillbox(2,0)}</div>
                                <div className={Style.divbox8}  onClick={()=>this.fillXo(2,1)}>{this.fillbox(2,1)}</div>
                                <div className={Style.divbox9}  onClick={()=>this.fillXo(2,2)}>{this.fillbox(2,2)}</div>
                            </div>
                            <div>
                                {   
                                    this.state.players===0?  
                                        <div className={this.state.first_input==='x'? Style.x_turn : Style.o_turn}>
                                            <p>{`Your Turn ${this.state.first_move}`}</p>  
                                        </div> 
                                    :
                                        <div className={this.state.first_input==='x'? Style.o_turn : Style.x_turn}>
                                            <p>{`Its Your Turn ${this.state.second_move}`}</p>
                                        </div>
            
                                }
                            </div> 
                            <div>
                                <Modal
                                    open={this.state.modalopen}>
                                    <div className={Style.modal_body}>
                                        {
                                            this.state.draw===''?
                                                <div className={Style.modal_arrng}>
                                                    <p>{`you won the Game ${this.state.winner}`}</p>
                                                    <button onClick={this.modalClose}>continue</button>
                                                </div>
                                            :
                                                <div className={Style.modal_arrng}>
                                                    <p>{this.state.draw}</p>
                                                    <button onClick={this.modalClose}>continue</button>
                                                </div>
                                        }
                                        
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div style={{display:`${this.state.display_timer}`}} className={Style.timmer_body}>
                            <CountdownCircleTimer
                                isPlaying
                                duration={5}
                                colors={[
                                ['#004777', 0.33],
                                ['#F7B801', 0.33],
                                ['#A30000', 0.33],
                                ]}
                                onComplete={() => {
                                    this.setState({
                                        display_timer:"none",
                                        display_game:"flex",
                                    })
                                }}
                            >
                               
                                {({ remainingTime }) =>
                                    <div className={Style.timmer_text}>
                                        <p>Your Game</p>
                                        <p>{remainingTime}</p>
                                        <p>Start in</p>
                                    </div>
                                
                                }
                            </CountdownCircleTimer>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
