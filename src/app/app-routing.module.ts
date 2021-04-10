import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => 
      m.CustomersModule) 
  },

  { path: 'orders', 
    loadChildren: () => import('./orders/orders.module').then(m => 
      m.OrdersModule) 
  },
  
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => 
      m.HomeModule) 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
