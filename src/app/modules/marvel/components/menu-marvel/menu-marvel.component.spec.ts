import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMarvelComponent } from './menu-marvel.component';

describe('MenuMarvelComponent', () => {
  let component: MenuMarvelComponent;
  let fixture: ComponentFixture<MenuMarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMarvelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
