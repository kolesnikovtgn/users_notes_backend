import * as jwt from 'jsonwebtoken';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { PassportLocalModel } from 'mongoose';
import { User } from '../users/interfaces/user.interface';
import { debug } from 'console';
import { RegistrationStatus } from './interfaces/registrationStatus.interface';
import { USER_MODEL_PROVIDER } from '../constants';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,
              @Inject(USER_MODEL_PROVIDER) private readonly userModel: PassportLocalModel<User>) { }

  async register(user: CreateUserDto) {
    let status: RegistrationStatus = { success: true, message: 'user register' };
    await this.userModel.register(new this.userModel(
      {
        username: user.name,
        // birthday: user.birthday,
        // email: user.email,
        // phone: user.phone,
        // notes: user.notes,
      }), user.password,
      (err) => {
      if (err) {
        debug(err);
        status = { success: false, message: err };
      }
    });
    return status;
  }

  createToken(user) {
    const expiresIn = 3600;

    const accessToken = jwt.sign({ id: user.id,
      name: user.username }, 'ILovePokemon', { expiresIn });
    return {
      expiresIn,
      accessToken,
    };
  }

  // async validateUser(payload: JwtPayload): Promise<any> {
  //   return await this.usersService.findById(payload.id);
  // }
  // async validateUser(payload: JwtPayload): Promise<any> {
  //   return await this.usersService.findByName(payload.name);
  // }
  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findByToken(payload.token);
  }
}
