import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { DropdownComponent } from "../../components/dropdown/dropdown.component";
import { CheckboxComponent } from "../../components/checkbox/checkbox.component";

type Track = {
  trackId: string,
  trackName: string,
  isResolved: boolean,
  isListened: boolean
}

@Component({
    selector: 'app-create-to-do',
    templateUrl: './create-to-do.component.html',
    styleUrls: ['./create-to-do.component.scss'],
    standalone: true,
    imports: [CommonModule, CardComponent, InputComponent, ButtonComponent, DropdownComponent, CheckboxComponent]
})
export class CreateToDoComponent {

  title = "Track List";

  resolvedListTitle = 'Resolved List';

  // trackList = ['Track 1', 'Track 2', 'Track 3', 'Track 4'];

  trackList: Track[] = 
  [
    {trackId: 'track0', trackName: 'Track 1', isResolved: true, isListened: true}, 
    {trackId: 'track1', trackName: 'Track 2', isResolved: false, isListened: false}, 
    {trackId: 'track2', trackName: 'Track 3', isResolved: false, isListened: false}, 
    {trackId: 'track3', trackName: 'Track 4', isResolved: false, isListened: false}
  ]

  inputValue = "";

  checkboxMessage = "Track already listened?"

  checkboxId = "checkbox";

  // resolvedTrackList: number[] = [];
 
  addTrack() {
    /* The push method inserts the inputed value in the trackList's array and the String trim method removes whitespaces 
    from the beginning and end of the string and returns a new string, without modifying the original string */
    // this.trackList.push(this.inputValue.trim());
    this.trackList.push({trackId: Math.random().toString(), trackName: this.inputValue.trim(), isResolved: false, isListened: false});

    // Clears the input after the click on the Add button
    this.inputValue = '';
  }

  removeTrack(trackId: string) {
    this.trackList = this.trackList.filter(track => trackId !== track.trackId);

  }

  // editTrack(trackId: string, inputEvent: any) {
  //   this.trackList = this.trackList.map(track => track.trackId === trackId ? {...track, trackName: inputEvent.target.textContent} : track);

  //   console.log(inputEvent);
  // }

  editTrack2(track: Track, inputEvent: any) {

    track.trackName = inputEvent.target.textContent;

    console.log(inputEvent);
  }

  resolveTrack(trackId: string) {
    // this.trackList = this.trackList.map(track => {
    // if(track.trackId === trackId) {
    //   track.isResolved = true;
    // }
    //   return track;
    // });

    // A simpler approach with the map() method that creates a new array populated with the results of calling a provided function for every array element
    this.trackList = this.trackList.map(track => (track.trackId === trackId ? {...track, isResolved: true} : track));

    // console.log('Span value:', spanValue);
    console.log('Track resolved');
  }

  resolveOrUnresolveTrack(trackId: string, isResolved: boolean) {
    this.trackList = this.trackList.map(track => (track.trackId === trackId ? {...track, isResolved} : track));
  }

  trackListened(trackId: string) {
    // this.trackList[index] = {...this.trackList[index], isListened};

    /**
     *
     * [{trackId: 1}, {trackId: 2}, {trackId: 3, isListened: true}, {trackId: 4}]
     *
     * trackId --> 3
     *
     * [{trackId: 1}, {trackId: 2}, {trackId: 3, isListened: false}, {trackId: 4}]
     *  
     */
    const mapCallback = (track: Track): Track => {

      if(track.trackId === trackId){

        return { ...track, isListened: !track.isListened }

      }

      return track
    }

    this.trackList = this.trackList.map(mapCallback);

    // this.trackList = this.trackList.map(track => (track.trackId === trackId ? {...track, isListened: !track.isListened} : track));
  }

  resolvedTracks() {
    // The filter() method creates a new array filled with elements that pass a test provided by a function
    return this.trackList.filter(track => track.isResolved);
  }
  
  unresolveTrack(trackId: string) {
    // this.trackList[index] = {...this.trackList[index], isResolved: false, isListened: false};

    this.trackList = this.trackList.map(track => (track.trackId === trackId ? {...track, isResolved: false} : track));
  }
}
