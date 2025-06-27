import { Router } from 'express';
import TaskController from './src/controllers/TaskController';

const taskController = new TaskController();

const router = Router();

router.get('/task',taskController.get);

router.get('/task/:id_task', (req, res) => {
    const taskId = req.params.id_task;
    res.send(`Details for task with ID: ${taskId}`);
});

router.post('/task', taskController.add);

router.put('/task/:id_task', taskController.update);

router.delete('/task/:id_task', (req, res) => {
    const taskId = req.params.id_task;
    // Here you would typically delete the task from a database
    res.send(`Task with ID: ${taskId} deleted`);
})

export default router;