import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ferre',
    loadChildren: () => import('./ferre/ferre.module').then( m => m.FerrePageModule)
  },
  {
    path: 'martillos',
    loadChildren: () => import('./martillos/martillos.module').then( m => m.MartillosPageModule)
  },
  {
    path: 'taladros',
    loadChildren: () => import('./taladros/taladros.module').then( m => m.TaladrosPageModule)
  },
  {
    path: 'destornilladores',
    loadChildren: () => import('./destornilladores/destornilladores.module').then( m => m.DestornilladoresPageModule)
  },
  {
    path: 'alicates',
    loadChildren: () => import('./alicates/alicates.module').then( m => m.AlicatesPageModule)
  },
  {
    path: 'metros',
    loadChildren: () => import('./metros/metros.module').then( m => m.MetrosPageModule)
  },
  {
    path: 'factura/:nombre',
    loadChildren: () => import('./factura/factura.module').then( m => m.FacturaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'pruebas',
    loadChildren: () => import('./pruebas/pruebas.module').then( m => m.PruebasPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
