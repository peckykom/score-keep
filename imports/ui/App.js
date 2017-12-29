import React from "react";
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

// My content
export default App = ({title, players})=> {
    return <div>
        <TitleBar title={title}/>

        <div className="wrapper">
            <PlayerList players={players}/>
            <AddPlayer/>
        </div>
    </div>
};


// Andrew content
//export default class App extends React.Component {
//    render() {
//        return <div>
//            <TitleBar title={this.props.title}/>
//            <PlayerList players={this.props.players}/>
//            <AddPlayer/>
//        </div>
//    }
//};

//App.propTypes = {
//  title: React.PropTypes.string.isRequired,
//  players: React.PropTypes.array.isRequired
//};



