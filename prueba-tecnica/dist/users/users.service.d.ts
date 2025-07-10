import { User } from './user.entity';
import { CreateUserDto } from '../auth/dto/create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof User);
    findByEmail(email: string): Promise<User | null>;
    create(dto: CreateUserDto): Promise<User>;
}
