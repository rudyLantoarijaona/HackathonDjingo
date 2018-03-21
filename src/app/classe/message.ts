export enum ORIGINE{
    bot, client
  }

export class Message {

    public constructor(text?: string, source?: ORIGINE){
        this.text = text;
        this.source = source;
    }

    public text: string;
    public source: ORIGINE;
}
