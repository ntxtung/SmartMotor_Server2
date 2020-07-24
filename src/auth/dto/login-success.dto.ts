import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginSuccessType {
  @Field()
  readonly token: string;
}