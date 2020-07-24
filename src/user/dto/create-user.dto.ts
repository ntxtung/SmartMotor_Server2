import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
}