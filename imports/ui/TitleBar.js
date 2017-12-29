import React from "react";

export default TitleBar = ({title})=> {
    return <div className="title-bar">
        <div className="wrapper">
            <h1>{title}</h1>
        </div>
    </div>
};

//TitleBar.propTyoes = {
//    title: React.PropTypes.string.isRequired
//};

//TitleBar.defaultProps = {
//   title: "Default title"
//};

//export default class TitleBar extends React.Component {
//    render() {
//       return (
//           <div>
//           <h1>My todo priority list:</h1>
//           </div>
//       );
//    }
//}