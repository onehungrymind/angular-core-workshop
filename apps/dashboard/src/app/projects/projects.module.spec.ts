import { ProjectsModule } from './projects.module';

describe('ProjectsModule', () => {
  let projectsModule: ProjectsModule;

  beforeEach(() => {
    projectsModule = new ProjectsModule();
  });

  it('should create an instance', () => {
    expect(projectsModule).toBeTruthy();
  });
});
