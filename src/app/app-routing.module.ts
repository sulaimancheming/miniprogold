import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'scb',
    loadChildren: () => import('./scb/scb.module').then(m => m.ScbPageModule)
  },
  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
  // },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopPageModule)
  },
  {
    path: 'shop1',
    loadChildren: () => import('./shop1/shop1.module').then(m => m.Shop1PageModule)
  },
  {
    path: 'shop2',
    loadChildren: () => import('./shop2/shop2.module').then(m => m.Shop2PageModule)
  },
  {
    path: 'shop3',
    loadChildren: () => import('./shop3/shop3.module').then(m => m.Shop3PageModule)
  },
  {
    path: 'shop4',
    loadChildren: () => import('./shop4/shop4.module').then(m => m.Shop4PageModule)
  },
  {
    path: 'shop5',
    loadChildren: () => import('./shop5/shop5.module').then(m => m.Shop5PageModule)
  },
  {
    path: 'shop6',
    loadChildren: () => import('./shop6/shop6.module').then(m => m.Shop6PageModule)
  },
  {
    path: 'shop7',
    loadChildren: () => import('./shop7/shop7.module').then(m => m.Shop7PageModule)
  },
  {
    path: 'shop8',
    loadChildren: () => import('./shop8/shop8.module').then(m => m.Shop8PageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
