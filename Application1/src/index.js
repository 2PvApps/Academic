'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('./utilities/objCharacter');

function App(){
    //array represents the data, of the character, being passed in
    //preferable JSON Object or SQL DataBase
    // let obj = [1000,100,2];
    // let char1 = new _.Character({'name':'Jason','health':obj[0],'damage':obj[1],'speed':(obj[2]/2)});
    // let char2 = new _.Character({'name':'Sergio','health':obj[0],'damage':obj[1],'speed':obj[2]});
    // _.duel(char1, char2);



    return(<div><ListGroup></ListGroup></div>);
}

// class MainApp extends React.Component {render() {return (<div><h1>Hello****World</h1></div>);}}
ReactDOM.render(<App />, document.getElementById('content'));