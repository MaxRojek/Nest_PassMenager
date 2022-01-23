import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthLoginDto } from './auth-login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { User } from '../model/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  async login(@Body() authLoginDto: AuthLoginDto) {
    Logger.log(authLoginDto)
    return this.authService.login(authLoginDto);
  }

  @Post('/register')
  public async post(@Body() dto: User): Promise<User> {
    return this.authService.register(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return 'Success!';
  }
}