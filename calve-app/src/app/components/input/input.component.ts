import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  inputValue!: string;

  @Input()
  inputType!: 'text' | 'number' | 'radio';

  @Input()
  inputName!: string;

  @Input()
  inputId!: string;

  @Input()
  inputLabel!: string;

  @Input()
  labelFor!: string;

  @Input()
  inputRadioValue!: string;

  @Output()
  inputValueChange = new EventEmitter<string>()

  onChange(changedValue: string){
    this.inputValueChange.emit(this.inputType === 'radio' ? this.inputRadioValue : changedValue);
  }
}
