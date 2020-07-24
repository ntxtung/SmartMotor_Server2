import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service'

import { UserType } from "./dto/user.dto";
import { CreateUserInput } from './dto/create-user.dto'

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) { }

    @Query(() => [UserType])
    async users() : Promise<UserType[]>{
        return this.userService.findAll()
    }

    @Mutation(() => UserType)
    async createUser(@Args('input') input: CreateUserInput) : Promise<UserType>{
        return this.userService.create(input);
    }

    @Query(() => String)
    async hello() {
        return 'hello'
    }
}
