import {add_task} from "../sdk";
import {get_tasks} from "../sdk";
import {delete_task} from "../sdk";

//actions dispatch an object only on receiving data from built.io backend

export function addTaskAction(taskObject) {
  return function(dispatch){
    return add_task(taskObject)
    .then(function(res){
      dispatch({ 
        type: "addTask",
        taskItem: res.data
      })
    })
  }
}

export function getTasksAction() {
  return function(dispatch){
    return get_tasks()
    .then(function(res){
      var tasks = res.map(function(data){
        return data.data
      })
      dispatch({ 
        type : "getTasks",
        taskItems: tasks
      })
    })
  }
}

export function deleteTaskAction(task_uid) {
  return function(dispatch){
    return delete_task(task_uid)
    .then(function(res){
      dispatch({ 
        type   : "deleteTask",
        task_id: task_uid
      })
    })
  }
}
