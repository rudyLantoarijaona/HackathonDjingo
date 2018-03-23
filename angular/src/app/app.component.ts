import { Component } from '@angular/core';
import { Message } from '@app/models';
import { JeuService } from './services/jeu.service';
import { ORIGINE } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[JeuService]
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Bienvenue sur Djingo !', 'assets/images/Logo_Djingo.png', new Date(),ORIGINE.bot)
    ];
  }
}
