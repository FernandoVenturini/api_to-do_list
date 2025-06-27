// OS CONTROLLERS CONTROLAM OS DADOS QUE ESTAO CHEGANDO.
import { Request, Response } from 'express';
import TaskService from '../services/TaskService';
import { Task } from '../models/Task';

const taskService = new TaskService();

class TaskController {

    constructor() {

    }

    get(Req: Request, Res: Response) {
        const { status } = Req.query;
        if (status && (status === "in_progress" || status === "Em andamento" || status === "completed")) {
            taskService.get(status);
        } else {
            Res.json({error: "Invalid parameters! Please provide a status."});
            Res.status(400);
        }
    }

    add(Req:Request, Res:Response) {
        const { id, descricao, data, status } = Req.body;

        if (id && descricao && data && status) {

            if (status === "Pendente" || status === "Em andamento" || status === "Concluida") {
                const result = taskService.add(Req.body);
                Res.json(result);
                Res.status(201);
            } else {
                Res.json({error: "Invalid status: must be 'Pendente', 'Em andamento', or 'Concluida'."});
                Res.status(400);
            }            
        } else {
            Res.json({error: "Invalid parameters!"});
            Res.status(401);
        }
    }

    update(Req: Request, Res: Response) {
        // This method would typically update a task based on the provided ID and data.
        const { id, descricao, data, status } = Req.body; // assuming body contains the task data
        const { id_task } = Req.params; // assuming the ID is passed as a URL parameter

        // Here you would typically call a service method to update the task
        if (id && descricao && data && status && id_task) { // check if all required fields are present

            // Validate the status
            if (status === "Pendente" || status === "Em andamento" || status === "Concluido") { // check if status is valid
                const result = taskService.update(Req.body, id_task); // update the task
                
                // Check if the task was found and updated
                if (Object.keys(result).length > 0) { // if the task was found and updated
                    Res.json(result); // return an empty object if the task is not found
                } else {
                    Res.json({error: "Task not found!"}); // if the task is not found
                    Res.status(404); // not found
                }

            } else {
                Res.json({error: "Invalid status: must be 'Pendente', 'Em andamento', or 'Concluido'."}); // if status is invalid
                Res.status(401); // bad request
            }

        } else {
            Res.json({error: "Invalid parameters!"}); // if any required field is missing
            Res.status(401); // unauthorized
        }

    }
}

export default TaskController;