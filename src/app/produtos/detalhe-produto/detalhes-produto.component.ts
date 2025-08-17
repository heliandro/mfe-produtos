import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  dimensoes?: {
    altura: number;
    largura: number;
    profundidade: number;
  };
  peso?: number;
}

@Component({
  selector: 'app-detalhes-produto',
  imports: [RouterModule],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.scss'
})
export class DetalhesProdutoComponent {

    title: string = 'Detalhes do Produto';
    produto: Produto | undefined;

      // Lista de produtos com informações extras
    private listaProdutos: Produto[] = [
      { 
        id: 1, 
        nome: 'Produto 1', 
        preco: 100, 
        descricao: 'Descrição detalhada do produto 1',
        dimensoes: { altura: 10, largura: 20, profundidade: 5 },
        peso: 2.5
      },
      { 
        id: 2, 
        nome: 'Produto 2', 
        preco: 200, 
        descricao: 'Descrição detalhada do produto 2',
        dimensoes: { altura: 15, largura: 25, profundidade: 8 },
        peso: 3.2
      },
      { 
        id: 3, 
        nome: 'Produto 3', 
        preco: 300, 
        descricao: 'Descrição detalhada do produto 3',
        dimensoes: { altura: 12, largura: 22, profundidade: 6 },
        peso: 1.8
      }
    ];

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
      // Obtém o ID da rota e busca o produto correspondente
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        this.produto = this.listaProdutos.find(p => p.id === id);
        this.title = `Detalhes do Produto: ${this.produto?.nome}`;
      });
    }

    voltarPagina(): void {
      this.router.navigate(['../../produtos'], { relativeTo: this.route });
    }
}
