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
  readonly createdDate: Date;
}