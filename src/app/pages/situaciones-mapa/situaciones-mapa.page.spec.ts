import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SituacionesMapaPage } from './situaciones-mapa.page';

describe('SituacionesMapaPage', () => {
  let component: SituacionesMapaPage;
  let fixture: ComponentFixture<SituacionesMapaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacionesMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
