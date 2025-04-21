import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiaVistaPage } from './noticia-vista.page';

describe('NoticiaVistaPage', () => {
  let component: NoticiaVistaPage;
  let fixture: ComponentFixture<NoticiaVistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaVistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
