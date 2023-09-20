import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasActivityComponent } from './areas-activity.component';

describe('AreasActivityComponent', () => {
  let component: AreasActivityComponent;
  let fixture: ComponentFixture<AreasActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
