import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApodPage } from './apod.page';

describe('ApodPage', () => {
  let component: ApodPage;
  let fixture: ComponentFixture<ApodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
