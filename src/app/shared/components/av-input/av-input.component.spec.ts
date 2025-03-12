import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvInputComponent } from './av-input.component';

describe('AvInputComponent', () => {
  let component: AvInputComponent;
  let fixture: ComponentFixture<AvInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
