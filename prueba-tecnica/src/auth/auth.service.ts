import { Injectable } from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;

    const plainUser = user.toJSON?.() ?? user; 
    if (plainUser.password === pass) {
      const { password, ...result } = plainUser;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(dto: CreateUserDto) {
    return this.usersService.create(dto);
  }
}
