import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListsComponent } from './post-lists.component';

describe('PostListsComponent', () => {
  let component: PostListsComponent;
  let fixture: ComponentFixture<PostListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostListsComponent]
    });
    fixture = TestBed.createComponent(PostListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
