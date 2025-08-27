import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsSummaryPageComponent } from './topics-summary-page.component';

describe('TopicsSummaryPageComponent', () => {
  let component: TopicsSummaryPageComponent;
  let fixture: ComponentFixture<TopicsSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicsSummaryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicsSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
