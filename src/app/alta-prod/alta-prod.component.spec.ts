import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProdComponent } from './alta-prod.component';

describe('AltaProdComponent', () => {
  let component: AltaProdComponent;
  let fixture: ComponentFixture<AltaProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
