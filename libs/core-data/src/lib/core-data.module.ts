import { AuthGuardService } from './auth/auth-guard.service';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { TokenInterceptor } from './auth/token.interceptor';
import { NotificationsService } from './notifications/notifications.service';
import { ProjectsService } from './projects/projects.service';
import { ErrorInterceptor } from './error/error.interceptor';
import { CustomersService } from './customers/customers.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  providers: [
    AuthService,
    AuthGuardService,
    NotificationsService,
    CustomersService,
    ProjectsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  imports: [CommonModule, HttpClientModule],
})
export class CoreDataModule {}
