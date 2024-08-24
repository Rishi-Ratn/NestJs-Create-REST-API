import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')   // endpoint -> /auth/signup
    signup(){
        return this.authService.signup();
    }
    @Post('signin')   // endpoint -> /auth/signin
    signin(){
        return this.authService.signin();
    }
}