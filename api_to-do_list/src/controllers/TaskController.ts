// OS CONTROLLERS CONTROLAM OS DADOS QUE ESTAO CHEGANDO.
import { Request, Response } from 'express';
import TaskService from '../services/TaskService';
import { Task } from '../models/Task';

const taskService = new TaskService();

class TaskController {

    constructor() {

    }

    get(Req:Request, Res:Response) {
        const status = Req.query.status;

        if (status && (status === 'Em andamento' || status === 'Concluida')) {
            const result = taskService.get(status);
            Res.json(result);
            Res.status(200);
        } else {
            Res.json({error: 'Invalie status parameter!'});
            Res.status(400);
        }
    }

    getById(Req: Request, Res: Response) {
        const {id_task} = Req.params;

        if (id_task) {
            const result = taskService.getById(id_task);
            if (result) {
                Res.json(result);
                Res.status(200);
            } else {
                Res.json({error: "Task not found!"});
                Res.status(404);
            }
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
}

export default TaskController;