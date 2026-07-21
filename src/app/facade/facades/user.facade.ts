import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  constructor(private userService: UserService) {}

  async getCurrentUser(): Promise<User> {
    const data = await this.userService.fetchUser();
    return this.userService.toModel(data);
  }
}
