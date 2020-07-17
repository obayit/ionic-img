import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CssTutorialPage } from './css-tutorial.page';

describe('CssTutorialPage', () => {
  let component: CssTutorialPage;
  let fixture: ComponentFixture<CssTutorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssTutorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CssTutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
