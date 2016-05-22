import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers handle the effect an action has on the state of an application.
 
function tasks(state = [], action) {
  switch (action.type) {
  case 'addTask':
    return [action.taskItem].concat(state);
  case 'getTasks':
    return action.taskItems;
  case 'deleteTask':
    var updatedTaskList = state.filter(function(task){
      return task.uid !== action.task_id
    })
    return updatedTaskList;
  default:
    return state
  }
}

export default combineReducers({
  tasks
})