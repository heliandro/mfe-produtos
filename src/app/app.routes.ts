import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: async () => await import('./produtos/produtos.module').then(m => m.ProdutosModule) }
];
