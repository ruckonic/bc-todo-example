export function TaskListItem({ task, onCompleted}) {
    return (
        <li className="task-list-item">
          <span className="task-list-item__text">{task.title}</span>
          <input type="checkbox" checked={task.completed}  onChange={() => onCompleted(task)}/>
        </li>
    )
}

export default TaskListItem