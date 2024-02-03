import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { ExampleInterface } from "../interfaces/example.interface";
 
@Entity()
export class Example {
  @PrimaryGeneratedColumn()
  id: number;

  constructor(body: Partial<ExampleInterface>) {
    if (!body) {
        return;
    }
  }
}
