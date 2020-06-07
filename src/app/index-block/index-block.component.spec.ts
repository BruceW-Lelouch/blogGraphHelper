import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBlockComponent } from './index-block.component';

describe('IndexBlockComponent', () => {
  let component: IndexBlockComponent;
  let fixture: ComponentFixture<IndexBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
