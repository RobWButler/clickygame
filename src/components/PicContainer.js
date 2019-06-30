import React, { Component } from "react";
import imglist from "./imglist.json";
import HUD from "./HUD";

class PicContainer extends Component {
    state={
        imgs: imglist,
        score: 0,       
        highScore: 0,
        lastClicked: ''
 
    };

    shuffle = array => {
        array.sort(() => Math.random() - 0.5);
      }

    Shuffle = () =>{
        this.shuffle(this.state.imgs)
    };

    Clicked = (event) => {
        document.getElementById("button").play()
        if (event.target.alt === this.state.lastClicked) {
            if (this.state.score > this.state.highScore){
                this.setState({
                    highScore: this.state.score
                })
            }
            alert("You Lose!");
            this.setState({
                score: 0,
                lastClicked: ''
            })
            this.Shuffle();
        } else {
            this.setState({
                score: this.state.score + 1,
                lastClicked: event.target.alt
            })
            this.Shuffle()
        }
    };

    render(){
        return(
            <div>
                <div className="HUD">
                    <audio id="button" src="./audio/button.wav"/>
                    <HUD
                        score={this.state.score}
                        high={this.state.highScore}
                        src={this.state.path}
                        lastClicked={this.state.lastClicked}
                    />
                </div>
                <div className="picContainer">            
                    {this.state.imgs.map(pic =>
                        <img 
                            className="col-md-4 pic"
                            key={pic.color}
                            alt={pic.color}
                            title={pic.color}
                            src={pic.path}
                            onClick={this.Clicked}
                        />
                    )}
                </div>
            </div>
        )
    };
};

export default PicContainer;