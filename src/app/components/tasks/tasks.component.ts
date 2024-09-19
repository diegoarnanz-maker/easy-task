import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

 
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  
  // @Input() name?: string;
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  
  isAddingTask = false;

  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  
  onStartAddTask() {
    // console.log('Prueba add...');
    this.isAddingTask = true;
  }
  
  onCloseAddTask() {
    this.isAddingTask = false;
  }
  
}
