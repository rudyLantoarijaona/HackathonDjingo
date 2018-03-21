import { Component, OnInit, Input } from '@angular/core';
import {Message, ORIGINE} from "../../classe/message"

@Component({
  selector: 'app-phylactere',
  templateUrl: './phylactere.component.html',
  styleUrls: ['./phylactere.component.css']
})

export class PhylactereComponent implements OnInit {

  @Input("text") text: string;
  @Input("origin") origin: string;
  
  constructor() { }

  ngOnInit() {
  }
}
