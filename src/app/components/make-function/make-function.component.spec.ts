import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeFunctionComponent } from './make-function.component';

describe('MakeFunctionComponent', () => {
  let component: MakeFunctionComponent;
  let fixture: ComponentFixture<MakeFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
