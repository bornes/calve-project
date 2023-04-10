import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { DropdownComponent, Option } from "../../components/dropdown/dropdown.component";

@Component({
    selector: 'app-create-to-do',
    templateUrl: './create-to-do.component.html',
    styleUrls: ['./create-to-do.component.scss'],
    standalone: true,
    imports: [CommonModule, CardComponent, InputComponent, ButtonComponent, DropdownComponent]
})
export class CreateToDoComponent {

  title = "To Do List";

  inputValue = "default value";

  inputName = "";

  inputLabel = "";

  inputRadioValue = "true";

  labelFor = "";

  labelIncrement = "+";

  labelDecrement = "-";

  count = 0;

  cars: Option[] = 
  [
    {value: 'volvo', label: 'Volvo' }, 
    {value: 'renault', label: 'Renault'}, 
    {value: 'ford', label: 'Ford'}
  ];

  currentCar = 'renault';

  onClick() {
    console.log("Input value: ", this.inputValue);
  }

  increment() {
    this.count = this.count + 1;
    // this.count += 1;
    }

  decrement() {
    this.count = this.count -1;
    // this.count -= 1;
  }
}
