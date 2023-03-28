import { Component, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
  @Input()
  inputValue!: string;

  @Input()
  inputType!: 'text' | 'number';

  @Output()
  inputValueChange = new EventEmitter<string>()

  ngOnChanges(): void {
    console.info('on changes', this.inputValue);
  }
}
