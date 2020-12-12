import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuFormComponent } from './buku-form.component';

describe('BukuFormComponent', () => {
  let component: BukuFormComponent;
  let fixture: ComponentFixture<BukuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
