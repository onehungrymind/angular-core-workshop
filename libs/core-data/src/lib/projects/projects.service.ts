import { Project } from '@workshop/core-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'REMOTE Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false,
    },
    {
      id: '2',
      title: 'REMOTE Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false,
    },
    {
      id: '3',
      title: 'REMOTE Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true,
    }
  ];

  constructor() { }

  all(): Project[] {
    return this.projects;
  }
}
