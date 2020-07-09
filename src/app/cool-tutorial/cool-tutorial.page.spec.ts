import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoolTutorialPage } from './cool-tutorial.page';

describe('CoolTutorialPage', () => {
  let component: CoolTutorialPage;
  let fixture: ComponentFixture<CoolTutorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolTutorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoolTutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
