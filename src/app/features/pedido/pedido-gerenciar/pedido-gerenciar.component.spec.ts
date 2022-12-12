import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoGerenciarComponent } from './pedido-gerenciar.component';

describe('PedidoGerenciarComponent', () => {
  let component: PedidoGerenciarComponent;
  let fixture: ComponentFixture<PedidoGerenciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoGerenciarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoGerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
