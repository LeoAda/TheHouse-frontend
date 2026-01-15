import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesItemEdit } from './item-edit';

describe('PagesItemEdit', () => {
  let component: PagesItemEdit;
  let fixture: ComponentFixture<PagesItemEdit>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesItemEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesItemEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
