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

    getById(id_task: string): Task | {} {
        const result = taskRepository.get();

        let task = {};
    
        const task = result.map((obj) => {
            if (obj.id === id_task) {
                return obj;
            }
        });

        return task;
    }

    add(data:Task): Task{
        return taskRepository.add(data);
    }

    update(data: Task, id_task: string) {
        
    }
}

export default TaskService;