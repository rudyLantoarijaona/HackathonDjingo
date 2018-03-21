import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhylactereComponent } from './phylactere.component';

describe('PhylactereComponent', () => {
  let component: PhylactereComponent;
  let fixture: ComponentFixture<PhylactereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhylactereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhylactereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
