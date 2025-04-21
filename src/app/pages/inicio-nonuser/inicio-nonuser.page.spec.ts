import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioNonuserPage } from './inicio-nonuser.page';

describe('InicioNonuserPage', () => {
  let component: InicioNonuserPage;
  let fixture: ComponentFixture<InicioNonuserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioNonuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
