import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { Model, PassportLocalModel } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../users/interfaces/user.interface';
// import { UserSchema } from '../../users/users.schema';
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
