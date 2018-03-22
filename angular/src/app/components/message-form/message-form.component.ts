import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/models';
import { DialogflowService } from '../../services';
import  { JeuService } from '../../services/jeu.service';

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

  constructor(private dialogFlowService: DialogflowService, private jeuService:JeuService) { 
    this.jeuService.getJeu().subscribe(jeu =>{
      
    });
  }



  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);
 
   this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      console.log(res.result.parameters);
        this.jeuService.getJeu().subscribe(jeu => {
           
        });

      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
      );
      console.log(res.result.parameters);


       if (res.result.fulfillment.speech == "Voici les jeux que je vous propose :") 
       {
          this.jeuService.GetJeuParam(res.result.parameters.ageJoueurs.amount,res.result.parameters.nbrJoueurs,res.result.parameters.duree).subscribe(jeuParam => {
              console.log(jeuParam.length);             
                  var count = Object.keys(jeuParam).length;
                
                for (var i = 0; i < count; i++) 
                {
                   this.messages.push(
                  new Message(jeuParam[i].nom, 'assets/images/bot.png', res.timestamp)
                  );  
                }                            
        }      
      }
      });
    this.message = new Message('', 'assets/images/user.png');
  }

}
