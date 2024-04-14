import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Ingredient_recipe {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  recipe_id: number;
  @Field()
  @Column()
  ingredient_id: number;
  @Field()
  @Column()
  quantity: number;
  @Field()
  @Column()
  measurement: Measurement;
}

enum Measurement {
  'mililiter',
  'litre',
  'miligramme',
  'gramme',
}
