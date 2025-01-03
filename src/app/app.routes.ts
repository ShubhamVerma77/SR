import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        'path': 'home',
        // component: HomeComponent,
        loadComponent: () => import('./home/home.component').then(c=>c.HomeComponent),
        title: 'Home',
     
    },
    {
        path: 'contact',
      loadComponent: () => import('./contact/contact.component').then(c=>c.ContactComponent),
      title: 'Contact',
    },
    {
        path: 'about',
     loadComponent: () => import('./about/about.component').then(c=>c.AboutComponent),
     title: 'About',
    },
    {
        path:'login',
      loadComponent: () => import('./login/login.component').then(c=>c.LoginComponent),
      title: 'Login',
    },
    {
          path: 'product',
          loadComponent: () => import('./products/products.component').then(c=>c.ProductsComponent),
          title: 'Product',
    },
    {
        path:"",
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
       path:'user',
       component:UsersComponent
    },
    {
        path:'**',
        component: ErrorComponent
    }
];
