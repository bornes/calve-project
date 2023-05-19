import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { DropdownComponent } from "../../components/dropdown/dropdown.component";
import { CheckboxComponent } from "../../components/checkbox/checkbox.component";

@Component({
    selector: 'app-create-to-do',
    templateUrl: './create-to-do.component.html',
    styleUrls: ['./create-to-do.component.scss'],
    standalone: true,
    imports: [CommonModule, CardComponent, InputComponent, ButtonComponent, DropdownComponent, CheckboxComponent]
})
export class CreateToDoComponent {

  title = "Track List";

  // trackList = ['Track 1', 'Track 2', 'Track 3', 'Track 4'];

  trackList = 
  [
    {trackName: 'Track 1', isResolved: false, isListened: true}, 
    {trackName: 'Track 2', isResolved: false, isListened: false}, 
    {trackName: 'Track 3', isResolved: false, isListened: false}, 
    {trackName: 'Track 4', isResolved: false, isListened: false}
  ]

  inputValue = "";

  checkboxMessage = "Track already listened?"

  checkboxId = "checkbox";

  // resolvedTrackList: number[] = [];
 
  addTrack() {
    /* The push method inserts the inputed value in the trackList's array and the String trim method removes whitespaces 
    from the beginning and end of the string and returns a new string, without modifying the original string */
    // this.trackList.push(this.inputValue.trim());
    this.trackList.push({trackName: this.inputValue.trim(), isResolved: false, isListened: false});

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
    // this.trackList[index] = inputEvent.target.textContent;
    this.trackList[index] = {...this.trackList[index], trackName: inputEvent.target.textContent}

    console.log(inputEvent);
  }

  resolveTrack(index: number) {
    this.trackList[index] = {...this.trackList[index], isResolved: true, isListened: true};

    // console.log('Span value:', spanValue);
    console.log('Track resolved');
    console.log(index);
  }

  trackListened(index: number, isListened: boolean) {
    this.trackList[index] = {...this.trackList[index], isListened};
  }
}
