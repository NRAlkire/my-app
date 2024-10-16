import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StorytellerCampaignsComponent } from './storyteller-campaigns.component';

describe('StorytellerCampaignsComponent', () => {
  let component: StorytellerCampaignsComponent;
  let fixture: ComponentFixture<StorytellerCampaignsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StorytellerCampaignsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StorytellerCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
