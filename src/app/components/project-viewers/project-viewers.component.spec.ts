import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewersComponent } from './project-viewers.component';

describe('ProjectViewersComponent', () => {
  let component: ProjectViewersComponent;
  let fixture: ComponentFixture<ProjectViewersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectViewersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectViewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
