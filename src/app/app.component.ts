import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserFolderComponent } from "./components/user-folder/user-folder.component";
import { DUMMY_USERS } from './data/dummy_users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserFolderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easyTask-angular-app';
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onselectUser(id: string) {
    this.selectedUserId = id;
  }
}
