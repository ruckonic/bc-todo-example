export function TaskListItem({ task}) {
    return (
        <li className="task-list-item">
          <span className="task-list-item__text">{task.title}</span>
          <input type="checkbox" checked={task.isCompleted}  onChange={() => {}}/>
        </li>
    )
}

export default TaskListItem