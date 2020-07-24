import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  readonly _id: string;
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
}