import { Task } from '../models/Task.js';

class TaskRepository {
    private tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    get(): Task[] {
        return this.tasks;
    }

    getById(id_task)


    add(data: Task): Task {
        this.tasks.push(data);
        return data;
    }
    
}

export default TaskRepository;