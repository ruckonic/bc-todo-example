import TaskListItem from './TaskListItem'

export function TaskList({ tasks, onTaskCompleted }) {
  if (!tasks.length) {
    return <p>No tasks</p>
  }

  return (
    <ul>
      {tasks.map((task) => <TaskListItem key={task.id} task={task} onCompleted={onTaskCompleted} />)}
    </ul>
  )
}

export default TaskList