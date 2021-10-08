import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}