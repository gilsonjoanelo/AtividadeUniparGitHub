import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanciaVersionamentoComponent } from './importancia-versionamento.component';

describe('ImportanciaVersionamentoComponent', () => {
  let component: ImportanciaVersionamentoComponent;
  let fixture: ComponentFixture<ImportanciaVersionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportanciaVersionamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanciaVersionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
