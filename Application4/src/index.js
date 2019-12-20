var React = require('react');
var ReactDOM = require('react-dom');

class Card extends React.Component {
	render() {
		return (
			<div className="github-profile" style={{ margin:'1rem' }}>
				<img src="https://placehold.it/75" />
				<div className="info" style={{display:'inline-block', marginLeft: 10}}>
					<div className="name" style={{fontSize:'125%'}}>Name here...</div>
					<div className="company">Company here...</div>
				</div>
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="header">{this.title}</div>
				<Card />
			</div>);
	}
}

ReactDOM.render(
	<App title="The GitHub Cards App" />
	, mountNode
);
