export enum ORIGINE{
  bot,
  human
}
export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  source: ORIGINE;

  constructor(content: string, avatar: string, timestamp?: Date, origine?: ORIGINE){
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.source = origine;
  }
}
