import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarConPage } from './recuperar-con.page';

describe('RecuperarConPage', () => {
  let component: RecuperarConPage;
  let fixture: ComponentFixture<RecuperarConPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
