import { Injectable } from "@angular/core";
import { NewTaskData } from "./new-task/new-task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Aprender React',
          summary: 'Aprender React para poder hacer aplicaciones web',
          dueDate: '2024-12-31',
          completed: false,
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Escribir un blog post',
          summary: 'Escribir un artículo sobre las tendencias de tecnología en 2024',
          dueDate: '2024-09-15',
          completed: false,
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Leer un libro de Python',
          summary: 'Leer "Python Crash Course" para mejorar habilidades de programación',
          dueDate: '2024-10-05',
          completed: false,
        },
        {
          id: 't4',
          userId: 'u1',
          title: 'Practicar meditación',
          summary: 'Practicar meditación diaria durante 30 minutos cada mañana',
          dueDate: '2024-11-01',
          completed: true,
        },
        {
          id: 't5',
          userId: 'u2',
          title: 'Hacer ejercicio',
          summary: 'Ir al gimnasio al menos 4 veces por semana para mantener la salud',
          dueDate: '2024-09-30',
          completed: false,
        },
        {
          id: 't6',
          userId: 'u3',
          title: 'Planificar un viaje',
          summary: 'Organizar un viaje a Japón para la primavera de 2025',
          dueDate: '2024-12-01',
          completed: false,
        },
        {
          id: 't7',
          userId: 'u1',
          title: 'Terminar un proyecto de trabajo',
          summary: 'Completar el desarrollo del módulo de autenticación para la aplicación interna',
          dueDate: '2024-08-31',
          completed: true,
        },
        {
          id: 't8',
          userId: 'u2',
          title: 'Aprender SQL',
          summary: 'Tomar un curso en línea sobre SQL y practicar consultas avanzadas',
          dueDate: '2024-11-15',
          completed: false,
        },
        {
          id: 't9',
          userId: 'u3',
          title: 'Organizar un evento',
          summary: 'Planear y coordinar el evento anual de la empresa',
          dueDate: '2024-10-30',
          completed: false,
        },
        {
          id: 't10',
          userId: 'u1',
          title: 'Actualizar el portafolio',
          summary: 'Agregar los proyectos más recientes al portafolio en línea',
          dueDate: '2024-09-20',
          completed: false,
        }
      ];

      constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
          this.tasks = JSON.parse(tasks);
        }
      }

      getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
      }

      addTask(taskData: NewTaskData, userId: string) {
        this.tasks.push(
          {
            id: Math.random().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate,
            completed: false,
          }
        );
        this.saveTasks();
      }

      removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
      }

      private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
}