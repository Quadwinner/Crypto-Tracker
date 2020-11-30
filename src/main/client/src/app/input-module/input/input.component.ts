import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label = "";
  @Input() type = "";
  @Input() value = "";

  @Output() typed = new EventEmitter<String>();

  constructor() { }

  onChange(event) {
    event.preventDefault();
    this.typed.emit(event.target.value);
  }

  ngOnInit(): void {
  }
}