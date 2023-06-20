import { useState } from "react"

interface Task {
    id: number
    title: string
    description: string,
    completed: boolean
}
export default function TaskCard() {

    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            title: "Ordenar pieza",
            description: "No seas sucio ya es hora",
            completed: false
        }
    ])
    return (
        <ul>
            {tasks.map(task => (
                <li className="card">
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>

                </li>
            ))}

        </ul>
    )
}