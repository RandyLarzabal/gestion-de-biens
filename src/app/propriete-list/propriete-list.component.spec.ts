import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprieteListComponent } from './propriete-list.component';

describe('ProprieteListComponent', () => {
  let component: ProprieteListComponent;
  let fixture: ComponentFixture<ProprieteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprieteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprieteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
