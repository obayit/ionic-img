import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImgurSearchPage } from './imgur-search.page';

describe('ImgurSearchPage', () => {
  let component: ImgurSearchPage;
  let fixture: ComponentFixture<ImgurSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgurSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImgurSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
