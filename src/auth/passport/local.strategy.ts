import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { PassportLocalModel } from 'mongoose';
import { User } from '../../users/interfaces/user.interface';
import { USER_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService,
              @Inject(USER_MODEL_PROVIDER) private readonly userModel: PassportLocalModel<User>) {
    super({
      usernameField: 'name',
      passwordField: 'password',
    }, userModel.authenticate());
  }
}
