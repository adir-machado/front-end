import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponentModalComponent } from './team-component-modal.component';

describe('TeamComponentModalComponent', () => {
  let component: TeamComponentModalComponent;
  let fixture: ComponentFixture<TeamComponentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamComponentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamComponentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
