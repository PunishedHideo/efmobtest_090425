import { ObjectId } from 'mongodb';
import { Entity, Column } from 'typeorm';

export interface ApplicationInterface {
  // interface for new application
  topic: string;
  text: string;
}

export interface GetData {
  // interface for getAll
  time?: number;
  timeFrom?: string;
  timeTo?: string;
  insertedId?: string;
}

@Entity()
export class Application {
  @Column()
  topic: string;

  @Column()
  text: string;

  @Column()
  status: string;

  @Column()
  time: number;

  constructor(
    topic: string,
    text: string,
    status: string = 'new',
    time = Date.now()
  ) {
    this.topic = topic;
    this.text = text;
    this.status = status;
    this.time = time;
  }
}
