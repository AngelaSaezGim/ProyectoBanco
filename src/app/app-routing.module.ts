import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Decirle que hay dos modulos distintos - ruta pages y ruta sin logear.

const routes: Routes = [
  {
  path: "auth", 
  loadChildren: () => import('./auth/auth.module').then((m)=> m.AuthModule),
  },
  {
    path: "pages", 
    loadChildren: () => import('./pages/pages.module').then((m)=> m.PagesModule),
  },
  {
    path: "", 
    redirectTo: "/auth/login",
    pathMatch: "full",
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
