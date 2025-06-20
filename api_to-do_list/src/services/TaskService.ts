import { Task } from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";
// OS SERVIÇOS CONTÊM A LÓGICA DE NEGÓCIO E INTERAGEM COM OS REPOSITÓRIOS.

const taskRepository = new TaskRepository();

class TaskService {

    constructor() {

    }

    get(status: string) {
        const result = taskRepository.get();
        const tasks: Task[] = [];

        result.map((obj) => {
            if (obj.status === status) {
                tasks.push(obj);
            }
        });
        return tasks;
    }

    add(data:Task): Task{
        return taskRepository.add(data);
    }
}

export default TaskService;