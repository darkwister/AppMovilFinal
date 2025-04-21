import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedidasPreventivasPage } from './medidas-preventivas.page';

describe('MedidasPreventivasPage', () => {
  let component: MedidasPreventivasPage;
  let fixture: ComponentFixture<MedidasPreventivasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasPreventivasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
