import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, NotificationsService } from '@workshop/core-data';

import { ROUTER_ANIMATION } from './router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ROUTER_ANIMATION]
})
export class AppComponent implements OnInit {
  title = 'Angular Core Workshop';
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;

  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/customers', icon: 'face', label: 'Customers' },
    { path: '/projects', icon: 'work', label: 'Projects' }
  ];

  constructor(
    private snackbar: MatSnackBar,
    private ns: NotificationsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  prepareRouterState(router: RouterOutlet) {
    return router.activatedRouteData['animation'] || 'initial';
  }

  isSidenaveOpen(component, authentication) {
    return component.opened && authentication;
  }
}
