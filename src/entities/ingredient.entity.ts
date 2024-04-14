import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Ingredient {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  name: string;
}
