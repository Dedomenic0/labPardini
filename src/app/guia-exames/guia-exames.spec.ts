import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaExames } from './guia-exames';

describe('GuiaExames', () => {
  let component: GuiaExames;
  let fixture: ComponentFixture<GuiaExames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaExames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaExames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
