import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { DropdownComponent } from "../../components/dropdown/dropdown.component";

@Component({
    selector: 'app-create-to-do',
    templateUrl: './create-to-do.component.html',
    styleUrls: ['./create-to-do.component.scss'],
    standalone: true,
    imports: [CommonModule, CardComponent, InputComponent, ButtonComponent, DropdownComponent]
})
export class CreateToDoComponent {

  title = "Track List";

  trackList = ['Track 1', 'Track 2', 'Track 3', 'Track 4'];

  inputValue = "";

  addTrack() {
    this.trackList.push(this.inputValue.trim());
    this.inputValue = '';
  }
}
