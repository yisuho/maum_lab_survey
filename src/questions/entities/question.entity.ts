import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Survey } from 'src/surveys/entities/survey.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Question {
  @Field(() => Int, { description: 'Question ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Survey, {
    nullable: false,
    description: 'Parents Survey ',
  })
  @ManyToOne(() => Survey, (survey) => survey.question, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parents_survey' })
  parentsSurvey: Survey;

  @Field(() => Int, { nullable: false })
  @Column({ name: 'parents_survey_id' })
  parentsSurveyId: number;

  @Field(() => Int, { nullable: false })
  @Column({ name: 'question_number' })
  questionNumber: number;

  @Field(() => String, { nullable: false })
  @Column()
  content: string;
}
