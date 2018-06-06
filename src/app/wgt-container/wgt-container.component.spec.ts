import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgtContainerComponent } from './wgt-container.component';

describe('WgtContainerComponent', () => {
  let component: WgtContainerComponent;
  let fixture: ComponentFixture<WgtContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgtContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgtContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
