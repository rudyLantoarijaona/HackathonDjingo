import { Component, OnInit } from '@angular/core';
import { Message, ORIGINE } from "../../classe/message"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public bubbles: Message[];

  constructor() {
    this.bubbles = [new Message("Bonjour, humain",ORIGINE.bot), new Message("Bonjour bot",ORIGINE.client), new Message("Comment puis-je vous aider ?",ORIGINE.bot),new Message("Trouve nous un jeu",ORIGINE.client),new Message("Combien êtes vous ?",ORIGINE.bot)];
   }

  ngOnInit() {
    
  }

}
