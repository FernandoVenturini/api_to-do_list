import { Task } from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";
// OS SERVIÇOS CONTÊM A LÓGICA DE NEGÓCIO E INTERAGEM COM OS REPOSITÓRIOS.

const taskRepository = new TaskRepository();

class TaskService {

    constructor() {

    }

    get(status:string) {
        const result = taskRepository.get();
        result.map((obj) => {

        });
    }

    getById(id_task: string): Task | {}{ // assuming id_task is a string
        const result = taskRepository.get();

        let task = {};
        // Find the task with the given id_task and assign it to the task variable
        result.map((obj) => {
            if (obj.id === id_task) { // check if the task id matches the given id_task
                task = obj; // assign the found task to task variable
            }
        });
        return task; // return the found task
    }

    getIndexById(id_task: string): number { // assuming id_task is a string
        const result = taskRepository.get(); // get all tasks from the repository

        let position: number = 99999; // initialize position variable

        // Find the index of the task with the given id_task
        result.map((obj, index) => { // iterate over each task
            if (obj.id === id_task) { // check if the task id matches the given id_task
                position = index; // assign the current index to position
            }
        });

        return position; // return the found index or null if not found
    }

    add(data:Task): Task{
        return taskRepository.add(data);
    }

    update(data: Task, id_task: string) { // assuming id_task is a string

        const position = this.getIndexById(id_task); // get the index of the task with the given id_task 
        
        if(position !== 99999) { // if the task is not found
            return taskRepository.update(data, position); // update the task with the given id
        } else {
            return {}; // return an error if the task is not found
        }
    }
}

export default TaskService;