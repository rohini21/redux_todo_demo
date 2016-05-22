import React from 'react';
import { connect } from 'react-redux';
import TaskItem from "./task_item";
import {getTasksAction} from '../actions/action';

class TaskList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
	  	list: [] 
	  }
	}

	componentDidMount(){
		var self = this;
		this.setState({
	  	list: self.props.tasks 
		})
		this.props.dispatch(getTasksAction())
	}

	componentWillReceiveProps(nextProps){
		var self = this;
		if(this.props.tasks.length !== nextProps.tasks.length){
			this.setState({
		  	list: nextProps.tasks 
			})
		}
	}

	render() {
		var list = this.state.list || [];
		return (
			<div className="task-list full-width">
				<ul>
					{
						list.map(function(item,ind){
							return <TaskItem item={item} key={ind} />
						})
					}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(TaskList);
