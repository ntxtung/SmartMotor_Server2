import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ValidateUserInput {
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
}