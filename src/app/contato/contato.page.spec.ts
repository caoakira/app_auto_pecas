import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { contatoPage } from './contato.page';

describe('contatoPage', () => {
  let component: contatoPage;
  let fixture: ComponentFixture<contatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [contatoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(contatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
