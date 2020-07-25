import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class DeviceTrackType {
  @Field(() => ID)
  readonly _id: string;
  @Field()
  readonly deviceNumber: string;
  @Field()
  readonly lat: string;
  @Field()
  readonly lon: string;
  @Field()
  readonly battery: string;
  @Field()
  readonly createdDate: Date;
}