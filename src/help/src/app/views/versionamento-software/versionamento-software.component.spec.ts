import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionamentoSoftwareComponent } from './versionamento-software.component';

describe('VersionamentoSoftwareComponent', () => {
  let component: VersionamentoSoftwareComponent;
  let fixture: ComponentFixture<VersionamentoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionamentoSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionamentoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
