import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from "./auth.service";

import { LoginSuccessType } from "./dto/login-success.dto";
import { ValidateUserInput } from "./dto/validate-user.dto";

@Resolver('Auth')
export class AuthResolver {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Mutation(() => LoginSuccessType)
    async login(@Args('input') input: ValidateUserInput) : Promise<LoginSuccessType>{
        return this.authService.validateUser(input);
    }
}
