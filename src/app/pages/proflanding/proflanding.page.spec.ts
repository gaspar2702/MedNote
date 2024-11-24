import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProflandingPage } from './proflanding.page';

describe('ProflandingPage', () => {
  let component: ProflandingPage;
  let fixture: ComponentFixture<ProflandingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProflandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
