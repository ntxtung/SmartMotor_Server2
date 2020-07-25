import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NewDeviceTrackInput {
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