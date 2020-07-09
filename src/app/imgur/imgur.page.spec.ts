import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImgurPage } from './imgur.page';

describe('ImgurPage', () => {
  let component: ImgurPage;
  let fixture: ComponentFixture<ImgurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImgurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
