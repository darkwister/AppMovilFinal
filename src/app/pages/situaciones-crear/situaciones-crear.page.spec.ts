import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SituacionesCrearPage } from './situaciones-crear.page';

describe('SituacionesCrearPage', () => {
  let component: SituacionesCrearPage;
  let fixture: ComponentFixture<SituacionesCrearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacionesCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
