import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')   // endpoint -> /auth/signup
    signup(@Body() dto: AuthDto) {
        console.log({
            dto,
        });
        
        return this.authService.signup();
    }
    @Post('signin')   // endpoint -> /auth/signin
    signin(){
        return this.authService.signin();
    }
}