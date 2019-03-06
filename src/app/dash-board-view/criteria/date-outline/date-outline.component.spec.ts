import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOutlineComponent } from './date-outline.component';

describe('DateOutlineComponent', () => {
  let component: DateOutlineComponent;
  let fixture: ComponentFixture<DateOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
