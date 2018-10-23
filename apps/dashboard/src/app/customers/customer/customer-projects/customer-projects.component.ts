import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectsService } from '@workshop/core-data';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-projects',
  templateUrl: './customer-projects.component.html',
  styleUrls: ['./customer-projects.component.scss']
})
export class CustomerProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  trackProject(index, project) {
    return project.id;
  }

  getProjects() {
    this.projects$ = this.route.parent.params.pipe(
      switchMap(({ id }) => this.projectsService.loadByCustomer(id))
    );
  }

}
