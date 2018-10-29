import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User = { id: '', username: '', password: '' };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(username: string, password: string): void {
    // All with the auth service
    // Authenticate with the input of username and password
    this.authService.LoginUser(username, password).subscribe(
      // If it works
      data => {
        // Access token and refresh token needs to be put in localstorage
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh-token', data.refresh_token);
        // Navigate to a private route
        this.router.navigate(['/articles']);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
