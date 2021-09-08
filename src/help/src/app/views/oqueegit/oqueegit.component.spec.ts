import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OqueegitComponent } from './oqueegit.component';

describe('OqueegitComponent', () => {
  let component: OqueegitComponent;
  let fixture: ComponentFixture<OqueegitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OqueegitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OqueegitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
