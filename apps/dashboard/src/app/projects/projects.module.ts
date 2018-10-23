import { MaterialModule } from '@workshop/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
