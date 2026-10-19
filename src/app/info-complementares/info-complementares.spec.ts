import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComplementares } from './info-complementares';

describe('InfoComplementares', () => {
  let component: InfoComplementares;
  let fixture: ComponentFixture<InfoComplementares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComplementares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoComplementares);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
