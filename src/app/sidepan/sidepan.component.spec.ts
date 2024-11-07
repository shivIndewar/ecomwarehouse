import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanComponent } from './sidepan.component';

describe('SidepanComponent', () => {
  let component: SidepanComponent;
  let fixture: ComponentFixture<SidepanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidepanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidepanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
