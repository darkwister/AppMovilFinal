import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbergueVistaPage } from './albergue-vista.page';

describe('AlbergueVistaPage', () => {
  let component: AlbergueVistaPage;
  let fixture: ComponentFixture<AlbergueVistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbergueVistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
