import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactContent } from './contact-content';

describe('ContactContent', () => {
  let component: ContactContent;
  let fixture: ComponentFixture<ContactContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
