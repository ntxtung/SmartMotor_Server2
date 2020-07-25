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
  readonly gpsFixMode: string;
  @Field()
  readonly fixQuality: string;
  @Field()
  readonly satelitesTracked: string;
  @Field()
  readonly gpsSatesTotal: string;
  @Field()
  readonly isFixed: string;
  @Field()
  readonly createdDate: Date;
}