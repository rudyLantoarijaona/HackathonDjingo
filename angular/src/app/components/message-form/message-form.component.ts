import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/models';
import { DialogflowService } from '@app/services';
import { ORIGINE } from '../../models';

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

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.message.source = ORIGINE.human;
    if(this.message.content && this.message.content != "" && this.message.content.length > 0 && this.message.content.replace( " ", "").length > 0)
      this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp, ORIGINE.bot)
      );
    });
    this.message = new Message('', 'assets/images/user.png');
  }

}
