import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  currentProject: Project;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if(value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };
}
