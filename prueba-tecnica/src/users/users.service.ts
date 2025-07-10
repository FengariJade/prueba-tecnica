import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { CreateUserDto } from '../auth/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    
    return this.userModel.findOne({ where: { email } });
  }

  async create(dto: CreateUserDto): Promise<User> {
    return this.userModel.create({
        email: dto.email,
        password: dto.password,
    });
  }
  
  
}