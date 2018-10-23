import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationsService {

  constructor(private snackbar: MatSnackBar) {
  }

  emit(notification) {
    this.snackbar.open(notification, 'OK', { duration: 3000 });
  }
}
