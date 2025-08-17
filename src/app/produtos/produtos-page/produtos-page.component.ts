import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
  dimensoes?: {
    altura: number;
    largura: number;
    profundidade: number;
  };
  peso?: number;
  disponivel?: boolean;
}

@Component({
  selector: 'app-produtos-page',
  imports: [RouterModule],
  templateUrl: './produtos-page.component.html',
  styleUrl: './produtos-page.component.scss'
})
export class ProdutosPageComponent {

  title: string = 'MFE-Produtos';

  listaProdutos: Produto[] = [
      { 
        id: 1, 
        nome: 'Produto 1', 
        preco: 100, 
        descricao: 'Descrição detalhada do produto 1',
        dimensoes: { altura: 10, largura: 20, profundidade: 5 },
        peso: 2.5,
        disponivel: true
      },
      { 
        id: 2, 
        nome: 'Produto 2', 
        preco: 200,
        descricao: 'Descrição detalhada do produto 2',
        dimensoes: { altura: 15, largura: 25, profundidade: 8 },
        peso: 3.2,
        disponivel: true
      },
      { 
        id: 3, 
        nome: 'Produto 3', 
        preco: 300,
        descricao: 'Descrição detalhada do produto 3',
        dimensoes: { altura: 12, largura: 22, profundidade: 6 },
        peso: 1.8,
        disponivel: false
      }
    ];

    constructor(private router: Router) {}

    voltarPagina(): void {
      this.router.navigate(['..']);
    }
}
