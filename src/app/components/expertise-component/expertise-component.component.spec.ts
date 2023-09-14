import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseComponentComponent } from './expertise-component.component';

describe('ExpertiseComponentComponent', () => {
  let component: ExpertiseComponentComponent;
  let fixture: ComponentFixture<ExpertiseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertiseComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertiseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
