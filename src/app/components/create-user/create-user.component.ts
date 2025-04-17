import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  username = '';
  password = '';

  constructor(
    private userService: UserService, 
    private router: Router
  ) { }

  createUser() {
    if (this.username && this.password) {
      this.userService.addUser({
        username: this.username,
        password: this.password
      }).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }
}