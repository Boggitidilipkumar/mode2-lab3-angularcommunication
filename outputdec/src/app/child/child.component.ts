import { Component, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-child',
  template: `<button (click) = "display()">ClickME</button>`,
  styles: []
})
export class ChildComponent implements OnInit {
  @Output() eventEmitter= new EventEmitter();
  details={
    "name": "dilip", "place": "mpl"
  }

  constructor() { }

  ngOnInit() {
  }

  display(){
    this.eventEmitter.emit(this.details);
  }
}
