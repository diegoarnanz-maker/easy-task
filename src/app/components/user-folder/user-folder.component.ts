import { Component, computed, EventEmitter, input, Input, Output} from '@angular/core';

import { User } from './user-folder.model';
import { CardComponent } from "../../shared/card/card.component";

// type User = {
//     id: string;
//     avatar: string;
//     name: string;
// }; type e interface es parecido, se suele usar mas interface


@Component({
  selector: 'app-user-folder',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user-folder.component.html',
  styleUrl: './user-folder.component.css'
})
export class UserFolderComponent {

    // @Input({required: true}) id!: string;
    // @Input({required: true}) avatar!: string;
    // @Input({required: true}) name!: string;

    // @Input({required: true}) user!: { 
    //                                   id: string; 
    //                                   avatar: string; 
    //                                   name: string; 
    //                                 };

    @Input({required: true}) user!: User;
    @Input({required: true}) selected!: boolean;
    @Output() select = new EventEmitter();

    // avatar = input.required<string>();
    // name = input.required<string>();

    get imagePath() {
        return `assets/users/${this.user.avatar}`;
    }

    // imagePath = computed(() =>{
    //     return `assets/users/${this.avatar()}`;
    // });

    onSelectUser() {
      this.select.emit(this.user.id);
    }
}
