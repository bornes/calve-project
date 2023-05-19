import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input()
  checkboxMessage!: string;

  @Input()
  checkboxId!: string;

  @Input()
  checkboxValue!: boolean;

  @Output()
  checkboxValueChange = new EventEmitter<boolean>();

  onChange(changedValue: boolean){
    this.checkboxValueChange.emit(changedValue);
  }
}
