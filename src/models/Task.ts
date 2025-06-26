export interface Task {
    id: string;
    descricao: string;
    data: string; // ISO date string
    status: 'in_progress' | 'Em andamento' | 'completed';
    prioridade?: 'Baixa' | 'Média' | 'Alta'; // Optional field for task priority
}

const tarefa: Task = {
    id: '1',
    descricao: 'Estudar Node.js',
    data: '2023-10-01T10:00:00Z',
    status: 'Pendente',
    prioridade: 'Alta'
}