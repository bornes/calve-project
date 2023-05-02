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

  // trackList = ['Track 1', 'Track 2', 'Track 3', 'Track 4'];

  trackList = 
  [
    {trackName: 'Track 1', isResolved: false}, 
    {trackName: 'Track 2', isResolved: false}, 
    {trackName: 'Track 3', isResolved: false}, 
    {trackName: 'Track 4', isResolved: false}
  ]

  inputValue = "";

  // resolvedTrackList: number[] = [];
 
  addTrack() {
    /* The push method inserts the inputed value in the trackList's array and the String trim method removes whitespaces 
    from the beginning and end of the string and returns a new string, without modifying the original string */
    // this.trackList.push(this.inputValue.trim());
    this.trackList.push({trackName: this.inputValue.trim(), isResolved: false});

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
    this.trackList[index] = {...this.trackList[index], isResolved: true};

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
