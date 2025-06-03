import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewList } from './project-preview-list';

describe('ProjectPreviewList', () => {
  let component: ProjectPreviewList;
  let fixture: ComponentFixture<ProjectPreviewList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPreviewList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPreviewList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
