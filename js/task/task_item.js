import React from 'react';
import { connect } from 'react-redux';
import { deleteTaskAction } from '../actions/action';

class TaskItem extends React.Component {
	constructor(props){
    super(props);
    this.state = {
    	loading: false
    }
  }
  componentWillReceiveProps(nextProps){
  	if(this.props.tasks.length !== nextProps.tasks.length){
  		this.setState({
	    	loading: false
	    })
  	}
  }
  deleteTask(){
  	this.setState({
    	loading: true
    })
		this.props.dispatch(deleteTaskAction(this.props.item.uid))
  }

	render() {
		var btnContent = this.state.loading ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : <span>X</span>;
		return (
			<li className="task-item-wrap">
				<div className="item">
					<div className="task">{this.props.item.task}</div>
					<span className="delete pull-right" onClick={this.deleteTask.bind(this)}>{btnContent}</span>
				</div>
			</li>
		);
	}
}

function mapStateToProps(state) {
	return state;
}
export default connect(mapStateToProps)(TaskItem);