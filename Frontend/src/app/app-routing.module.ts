import { SignupComponent } from './auth/signup/signup.component';
import { BranchsComponent } from './branchs/branchs.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }, {
        path: 'login', component: LoginComponent
    }, {
        path: 'signup', component: SignupComponent
    }, {
        path: 'home', component: MainComponent, children: [
            {
                path: '', redirectTo: 'introduce', pathMatch: 'full'
            },
            {
                path: 'introduce', component: HomeComponent
            },
            {
                path: 'branchs', component: BranchsComponent
            },
            {
                path: 'products', component: ProductsComponent
            },
            {
                path: 'cart', component: CartComponent
            }

            // , {
            //     path: 'employees', component: EmployeesComponent
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
