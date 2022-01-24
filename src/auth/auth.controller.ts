import { Body, Controller, Get, Logger, Param, Post, UseGuards, Headers } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthLoginDto } from './auth-login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { User } from '../model/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto);
  }

  @Post('/register')
  public async post(@Body() dto: User): Promise<User> {
    return this.authService.register(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test(@Headers('Authorization') auth: string) {
    Logger.log(auth);
    //const json = await this.jwtUtil.decode(auth);
    //Logger.log(json);
    //let decoded = jwt_decode(headers.authorization);
    //Logger.log(decoded);
    //   return res.status(401).json({
    //     ok: false,
    //     message: 'Invalid Token',
    //     errors: err
    // });
    return 'Success!';
  }
}
