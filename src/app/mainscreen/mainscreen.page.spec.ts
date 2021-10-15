import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainscreenPage } from './mainscreen.page';

describe('MainscreenPage', () => {
  let component: MainscreenPage;
  let fixture: ComponentFixture<MainscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainscreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
