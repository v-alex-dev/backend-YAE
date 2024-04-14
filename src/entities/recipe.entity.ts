import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient_recipe } from './ingredient_recipe.entity'; // Import the missing 'Ingredient_recipe' class
import { Step } from './step.entity'; // Import the missing 'Step' class

@ObjectType()
@Entity()
export class Recipe {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  title: string;
  @Field()
  @Column()
  step_id: Step[]; // Use
  @Field()
  @Column()
  ingredients: Ingredient_recipe[];
}
