import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImgurFlexPage } from './imgur-flex.page';

describe('ImgurFlexPage', () => {
  let component: ImgurFlexPage;
  let fixture: ComponentFixture<ImgurFlexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgurFlexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImgurFlexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
