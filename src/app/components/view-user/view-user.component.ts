import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-view-user',
  imports: [CommonModule, RouterModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  
  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.getUsers().subscribe((data) => {
        this.users = data;
      });
    });
  }

  editUser(id: string) {
    this.router.navigate(['/edit', id]);
  }

}
