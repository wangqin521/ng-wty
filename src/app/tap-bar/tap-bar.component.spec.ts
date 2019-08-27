import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapBarComponent } from './tap-bar.component';

describe('TapBarComponent', () => {
  let component: TapBarComponent;
  let fixture: ComponentFixture<TapBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
