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

  resolvedTrackList: number[] = [];
 
  addTrack() {
    /* The push method inserts the inputed value in the trackList's array and the String trim method removes whitespaces 
    from the beginning and end of the string and returns a new string, without modifying the original string */
    this.trackList.push(this.inputValue.trim());

    // Clears the input after the click on the Add button
    this.inputValue = '';
  }

  /* To remove a track from the array, we need to use the splice method which changes the contents of an array by removing 
  or replacing existing elements and/or adding new elements in place. The first parameter is the index at which to start 
  changing the array and the second parameter is the number of elements to be removed, starting from the start parameter */
  removeTrack(index: number) {
    this.trackList.splice(index, 1);
  }

  editTrack(index: number, inputEvent: any) {
    this.trackList[index] = inputEvent.target.textContent;

    console.log(inputEvent);
  }

  resolveTrack(index: number) {
    this.resolvedTrackList.push(index);

    // let spanValue = document.getElementById('span-value');
    // spanValue?.contentEditable = false;

    // this.trackList[index] = document.getElementById('span-value')?.style.textDecoration = "line-through";
    // contenteditable = "false;"

    // spanValue?.style.textDecoration = "line-through";
    // spanValue?.contentEditable = false;

    // console.log('Span value:', spanValue);
    console.log('Track resolved');
    console.log(index);
  }
}
