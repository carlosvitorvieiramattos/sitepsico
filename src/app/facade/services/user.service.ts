import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  // Placeholder: replace with HttpClient calls in the real app
  async fetchUser(): Promise<IUser> {
    return Promise.resolve({ id: '1', name: 'Usuário Exemplo', email: 'exemplo@site.com' });
  }

  toModel(data: IUser): User {
    return new User(data.id, data.name, data.email);
  }
}
