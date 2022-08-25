import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesBuilderComponent } from './ques-builder.component';

describe('QuesBuilderComponent', () => {
  let component: QuesBuilderComponent;
  let fixture: ComponentFixture<QuesBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuesBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
