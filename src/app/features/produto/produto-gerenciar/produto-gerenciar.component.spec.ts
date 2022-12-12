import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoGerenciarComponent } from './produto-gerenciar.component';

describe('ProdutoGerenciarComponent', () => {
  let component: ProdutoGerenciarComponent;
  let fixture: ComponentFixture<ProdutoGerenciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoGerenciarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoGerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
