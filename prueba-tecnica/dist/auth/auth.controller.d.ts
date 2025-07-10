import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        access_token: string;
    }>;
    register(dto: CreateUserDto): Promise<import("../users/user.entity").User>;
}
