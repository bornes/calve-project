import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from "../../components/input/input.component";

@Component({
    selector: 'app-create-to-do',
    templateUrl: './create-to-do.component.html',
    styleUrls: ['./create-to-do.component.scss'],
    standalone: true,
    imports: [CommonModule, CardComponent, InputComponent]
})
export class CreateToDoComponent {
  title = "To Do List";

  inputValue = "teste";

  onClick() {
    console.log("Input value: ", this.inputValue);
  }
}
