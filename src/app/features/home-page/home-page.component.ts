import { Component } from '@angular/core';
import { UserEntity } from '../../core/interfaces/user.interface';
import { UsersService } from '../../core/services/users.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserRoleEnum } from '../../core/enums/user-role.enum';
import { HeaderComponent } from "../../core/components/header/header.component";
import { LoaderComponent } from "../../shared/components/loader/loader.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LoaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  userData$: Observable<UserEntity>;

  constructor(private usersService: UsersService) {
    this.userData$ = this.usersService.getUserData$()
  }

  getUserRoleName(role: UserRoleEnum){
    switch(role) {
      case UserRoleEnum.USER: {
        return 'User'
      }
      case UserRoleEnum.ADMIN: {
        return 'Admin'
      }
      default: {
        return ''
      }
    }
  }
}
