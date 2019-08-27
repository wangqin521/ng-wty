import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyArticleComponent } from './classify-article.component';

describe('ClassifyArticleComponent', () => {
  let component: ClassifyArticleComponent;
  let fixture: ComponentFixture<ClassifyArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifyArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifyArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
