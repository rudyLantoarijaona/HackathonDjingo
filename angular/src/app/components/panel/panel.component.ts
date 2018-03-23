import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public page: string = "menu";
  public menuOutVal: boolean;
  @Input()
  get menuOut(){
    return this.menuOutVal;
  }

  @Output() menuOutChange = new EventEmitter();

  set menuOut(val) {
    this.menuOutVal = val;
    this.page = "menu";
    this.menuOutChange.emit(this.menuOutVal);
  }

  constructor() { }

  ngOnInit() {
  }

}
