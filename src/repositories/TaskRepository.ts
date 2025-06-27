import { Task } from '../models/Task.js';

class TaskRepository {
    private tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    get(): Task[] {
        return this.tasks;
    }

    add(data: Task): Task {
        this.tasks.push(data);
        return data;
    }

    update(data: Task, position: number) { // position is the index of the task to update
        this.tasks[position] = data; // update the task at the specified index
        return data; // return the updated task
    }

    delete(position: number) {
        this.tasks.splice(position, 1); // remove the task at the specified index
        return position; // return the index of the deleted task
    }
    
}

export default TaskRepository;