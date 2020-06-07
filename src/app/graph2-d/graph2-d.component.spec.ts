import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph2DComponent } from './graph2-d.component';

describe('Graph2DComponent', () => {
  let component: Graph2DComponent;
  let fixture: ComponentFixture<Graph2DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph2DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph2DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
