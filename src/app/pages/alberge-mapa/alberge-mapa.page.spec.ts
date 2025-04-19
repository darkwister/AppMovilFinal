import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbergeMapaPage } from './alberge-mapa.page';  
describe('MapaPage', () => {
  let component: AlbergeMapaPage;
  let fixture: ComponentFixture<AlbergeMapaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbergeMapaPage],  
    }).compileComponents();

    fixture = TestBed.createComponent(AlbergeMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


