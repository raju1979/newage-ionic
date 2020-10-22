import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScheduledListPage } from './scheduled-list.page';

describe('ScheduledListPage', () => {
  let component: ScheduledListPage;
  let fixture: ComponentFixture<ScheduledListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduledListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
