import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCadastrarComponent } from './produto-cadastrar.component';

describe('ProdutoCadastrarComponent', () => {
  let component: ProdutoCadastrarComponent;
  let fixture: ComponentFixture<ProdutoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
