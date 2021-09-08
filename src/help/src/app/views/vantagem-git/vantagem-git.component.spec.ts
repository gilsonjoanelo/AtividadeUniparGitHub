import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagemGitComponent } from './vantagem-git.component';

describe('VantagemGitComponent', () => {
  let component: VantagemGitComponent;
  let fixture: ComponentFixture<VantagemGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VantagemGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagemGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
