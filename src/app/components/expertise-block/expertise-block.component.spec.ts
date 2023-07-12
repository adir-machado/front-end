import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseBlockComponent } from './expertise-block.component';

describe('ExpertiseBlockComponent', () => {
  let component: ExpertiseBlockComponent;
  let fixture: ComponentFixture<ExpertiseBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertiseBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertiseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
