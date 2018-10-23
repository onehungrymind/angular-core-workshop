import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '@workshop/material';

import { LoginComponent } from './login/login.component';

export const uiLoginRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, RouterModule],
  declarations: [LoginComponent],
  entryComponents: [LoginComponent],
  exports: [LoginComponent]
})
export class UiLoginModule {}
