import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertirexcelComponent } from './convertirexcel.component';

describe('ConvertirexcelComponent', () => {
  let component: ConvertirexcelComponent;
  let fixture: ComponentFixture<ConvertirexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertirexcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertirexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
