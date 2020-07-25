import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class DeviceType {
  @Field(() => ID)
  readonly _id: string;
  @Field()
  readonly clientId: string;
  @Field()
  readonly deviceNumber: string;
  @Field()
  readonly plateNumber: string;
}