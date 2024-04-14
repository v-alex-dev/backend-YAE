import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Step {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  step: string;
  @Field()
  @Column()
  recipe_id: number;
}
