import { Injectable } from '@nestjs/common';

// É responsavel pela business logic
@Injectable()
export class AuthService {
  
    signin() {
    return {
      message: 'I have signin',
    };
  }

  signup() {
    return {
      message: 'I have signup',
    };
  }
}
