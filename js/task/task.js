import React from 'react';
import { connect } from 'react-redux';
import TaskList from "./task_list";
import {addTaskAction} from '../actions/action';

class Task extends React.Component {
	constructor(props){
		super(props)
		
	}
	onKeyUp(e){
		var value = this.refs.input.value;
		if(e.keyCode == 13 && value.trim() !== ""){
			var taskItem = {
				task: value,
				complete: false
			}
			this.props.dispatch(addTaskAction(taskItem))
			this.refs.input.value = ""
		}
	}
	render() {
		return (
			<div className="task-list-wrapper full-width">
				<div className="input col-md-12 center full-width">
					<input  className="full-width" ref="input" placeholder="Add your task" onKeyUp={this.onKeyUp.bind(this)} onChange={this.onKeyUp.bind(this)}></input>
				</div>
				<TaskList />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state;
}
export default connect(mapStateToProps)(Task);