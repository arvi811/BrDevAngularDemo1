import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableComponentComponent } from './reusable-component.component';

describe('ReusableComponentComponent', () => {
  let component: ReusableComponentComponent;
  let fixture: ComponentFixture<ReusableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
