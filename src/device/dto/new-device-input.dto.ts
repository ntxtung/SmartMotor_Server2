import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NewDeviceInput {
  @Field()
  readonly clientId: string;
  @Field()
  readonly deviceNumber: string;
  @Field()
  readonly plateNumber: string;
}