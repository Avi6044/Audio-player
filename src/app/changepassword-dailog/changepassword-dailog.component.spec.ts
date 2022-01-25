import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordDailogComponent } from './changepassword-dailog.component';

describe('ChangepasswordDailogComponent', () => {
  let component: ChangepasswordDailogComponent;
  let fixture: ComponentFixture<ChangepasswordDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
