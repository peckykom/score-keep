import React from "react";
import ReactDOM from "react-dom";
import {Players} from './../api/players';

// My content
const handleSubmit = (e)=> {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if (playerName) {
        e.target.playerName.value = "";
        Players.insert({
            name: playerName,
            score: 0
        });
    }
};

export default AddPlayer = ()=> {
    return <div className="item">
        <form className="form" onSubmit={handleSubmit}>
            <input className="form__input" autoComplete="off" type="text" name="playerName" placeholder="New todo item"/>
            <button className="button">Add Item</button>
        </form>
    </div>
};

// Andrew content
//export default class AddPlayer extends React.Component {
//    handleSubmit(e) {
//        let playerName = e.target.playerName.value;
//        e.preventDefault();
//
//        if (playerName) {
//            e.target.playerName.value = "";
//            Players.insert({
//                name: playerName,
//                score: this.props.score
//            });
//        }
//    };
//
//    render() {
//        return (
//            <div>
//                <form onSubmit={this.handleSubmit.bind(this)}>
//                    <input type="text" name="playerName" placeholder="New todo item"/>
//                    <button>Add Item</button>
//                </form>
//            </div>
//        );
//    }
//};
