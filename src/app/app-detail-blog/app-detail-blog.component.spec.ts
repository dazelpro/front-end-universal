import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailBlogComponent } from './app-detail-blog.component';

describe('AppDetailBlogComponent', () => {
  let component: AppDetailBlogComponent;
  let fixture: ComponentFixture<AppDetailBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
