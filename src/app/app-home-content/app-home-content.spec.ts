import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomeContent } from './app-home-content';

describe('AppHomeContent', () => {
  let component: AppHomeContent;
  let fixture: ComponentFixture<AppHomeContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppHomeContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHomeContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
