import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVersionamentoComponent } from './controle-versionamento.component';

describe('ControleVersionamentoComponent', () => {
  let component: ControleVersionamentoComponent;
  let fixture: ComponentFixture<ControleVersionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleVersionamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleVersionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
