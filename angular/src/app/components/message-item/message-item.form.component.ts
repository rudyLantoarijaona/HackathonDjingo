import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/models';
import  { JeuService } from '@app/services/jeu.service';
 
@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
 
  @Input('message')
  private message : Message;
 
  @Input('messages')
  private messages : Message[];
 
  constructor(private jeuService:JeuService) { 

  this.jeuService.getJeu().subscribe(jeu =>{
      console.log(jeu);
    });

  }

  ngOnInit() {
  }
 
  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);
 
    this.message = new Message('', 'assets/images/user.png');
  }
 
}