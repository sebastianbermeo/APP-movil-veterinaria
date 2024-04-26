import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./paginas/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./paginas/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./paginas/paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
