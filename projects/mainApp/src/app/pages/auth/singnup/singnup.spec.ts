import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singnup } from './singnup';

describe('Singnup', () => {
  let component: Singnup;
  let fixture: ComponentFixture<Singnup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singnup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singnup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
