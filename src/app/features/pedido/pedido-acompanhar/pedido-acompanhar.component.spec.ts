import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoAcompanharComponent } from './pedido-acompanhar.component';

describe('PedidoAcompanharComponent', () => {
  let component: PedidoAcompanharComponent;
  let fixture: ComponentFixture<PedidoAcompanharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoAcompanharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoAcompanharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
