import { NextFunction, Router } from 'express';
import TaskController from './src/controllers/TaskController';

const taskController = new TaskController();

const router = Router();

// Criando funcao de autenticacao(middleware):
const authMiddleware = (Req: Request, Res: Response, next: NextFunction) => { // next: Function é usado para chamar a proxima funcao.
    if (Req.headers.authorization) { // Verifica se o header de autorizacao existe.
        next(); // Se o header de autorizacao existir, chama a proxima funcao.
    } else {
        Res.json({error: 'Unauthorized access'}); // Se nao existir, retorna um erro de acesso nao autorizado.
        Res.status(401); // Define o status HTTP como 401 (Unauthorized).
    }

router.get('/task', authMiddleware, taskController.get); // Rota para obter tarefas, usando o middleware de autenticacao.

router.get('/task/:id_task', (req, res) => {
    const taskId = req.params.id_task;
    res.send(`Details for task with ID: ${taskId}`);
});

router.post('/task', taskController.add);

router.put('/task/:id_task', taskController.update);

router.delete('/task/:id_task', taskController.delete);

export default router;