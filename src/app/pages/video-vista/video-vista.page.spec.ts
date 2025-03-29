import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoVistaPage } from './video-vista.page';

describe('VideoVistaPage', () => {
  let component: VideoVistaPage;
  let fixture: ComponentFixture<VideoVistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoVistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
