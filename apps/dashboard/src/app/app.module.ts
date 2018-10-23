import { HttpClientModule } from '@angular/common/http';
import { UiLoginModule } from '@workshop/ui-login';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@workshop/material';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    UiLoginModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
