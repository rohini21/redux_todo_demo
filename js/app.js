import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.history.replace("/tasks");
	}
	componentWillReceiveProps(nextProps){
	
	}
	render() {
		return (
			<div className="container dashboard">
				<h1 className="center full-width">Welcome to TODO</h1>
				{this.props.children}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state;
}
export default connect(mapStateToProps)(App);
