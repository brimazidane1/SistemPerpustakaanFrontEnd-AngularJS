import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeminjamanFormComponent } from './peminjaman-form.component';

describe('PeminjamanFormComponent', () => {
  let component: PeminjamanFormComponent;
  let fixture: ComponentFixture<PeminjamanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeminjamanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeminjamanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
