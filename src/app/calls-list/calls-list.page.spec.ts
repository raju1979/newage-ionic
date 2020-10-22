import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallsListPage } from './calls-list.page';

describe('CallsListPage', () => {
  let component: CallsListPage;
  let fixture: ComponentFixture<CallsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
