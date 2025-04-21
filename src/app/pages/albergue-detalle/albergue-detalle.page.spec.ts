import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbergueDetallePage } from './albergue-detalle.page';

describe('AlbergueDetallePage', () => {
  let component: AlbergueDetallePage;
  let fixture: ComponentFixture<AlbergueDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbergueDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
