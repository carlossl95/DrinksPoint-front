import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteGerenciarComponent } from './cliente-gerenciar.component';

describe('ClienteGerenciarComponent', () => {
  let component: ClienteGerenciarComponent;
  let fixture: ComponentFixture<ClienteGerenciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteGerenciarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteGerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
