import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeArticleComponent } from './me-article.component';

describe('MeArticleComponent', () => {
  let component: MeArticleComponent;
  let fixture: ComponentFixture<MeArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
