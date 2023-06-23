import TaskListItem from './TaskListItem'

export function TaskList({ tasks }) {
  if (!tasks.length) {
    return <p>No tasks</p>
  }

  return (
    <ul>
      {tasks.map((task) => <TaskListItem key={task.id} task={task} />)}
    </ul>
  )
}

export default TaskList