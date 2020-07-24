import { Injectable } from '@nestjs/common';
import { ValidateUserInput } from './dto/validate-user.dto'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(userInput: ValidateUserInput): Promise<any> {
        const user = await this.userService.findOneByUsername(userInput.username);
        if (user && user.password === userInput.password) {
            return user
        }
        return null;
    }

    async login(user: any) {
        const payload = { _id: user._id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
