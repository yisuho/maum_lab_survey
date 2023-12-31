import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionInput {
  @Field(() => Int, { nullable: false, description: 'Choice ID' })
  id: number;

  @Field(() => Int, { nullable: true, description: 'Choice No.' })
  questionNumber: number;

  @Field(() => String, { nullable: true, description: 'Choice Content' })
  content: string;
}
