import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioUserPage } from './inicio-user.page';

describe('InicioUserPage', () => {
  let component: InicioUserPage;
  let fixture: ComponentFixture<InicioUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
