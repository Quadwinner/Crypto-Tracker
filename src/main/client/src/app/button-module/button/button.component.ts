import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() content = '';
  @Input() type = "";

  @Output() clicked = new EventEmitter<boolean>();

  constructor() { }

  onClick(event) {
    event.preventDefault();
    this.clicked.emit(true);
  }

  ngOnInit(): void {
  }
  
  // submitDateRange() {

  // }

  // submitRegistration() {

  // }

  // submitLogin() {

  // }

  

  // deleteFromPortfolio() {

  // }
}
