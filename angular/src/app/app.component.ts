import { Component } from '@angular/core';
import { Message } from './models';
import { ORIGINE } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];

  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Bienvenue sur Djingo', 'assets/images/bot.png', new Date(), ORIGINE.bot)
    ];
  }
}
