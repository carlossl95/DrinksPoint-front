import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCriarComponent } from './pedido-criar.component';

describe('PedidoCriarComponent', () => {
  let component: PedidoCriarComponent;
  let fixture: ComponentFixture<PedidoCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoCriarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
