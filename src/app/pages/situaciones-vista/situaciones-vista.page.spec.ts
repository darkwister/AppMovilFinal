import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SituacionesVistaPage } from './situaciones-vista.page';

describe('SituacionesVistaPage', () => {
  let component: SituacionesVistaPage;
  let fixture: ComponentFixture<SituacionesVistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacionesVistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
