import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuOutVal: boolean = false;
  
  @Output() menuOutChange = new EventEmitter();

  @Input()
  get menuOut() {
    return this.menuOutVal;
  }
  
  set menuOut(val) {
    console.log("3");
    this.menuOutVal = val;
    this.menuOutChange.emit(this.menuOutVal);
    console.log("4");
  }

  constructor() { }

  ngOnInit() {
  }

  public switchPanel(){
    console.log("1");

    this.menuOut = !this.menuOut;
    console.log("2");
  }

}
