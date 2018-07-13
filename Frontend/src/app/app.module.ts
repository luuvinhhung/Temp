import { DepartmentsService } from './shared/services/departments.service';
import { MainComponent } from './main/main.component';
import { BranchsComponent } from './branchs/branchs.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navgation/header/header.component';
import { SidenavListComponent } from './navgation/sidenav-list/sidenav-list.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { SidebarModule } from 'ng-sidebar';
import { BranchDialogComponent } from './branch-dialog/branch-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ProductsComponent,
    CartComponent,
    BranchsComponent,
    HeaderComponent,
    MainComponent,
    BranchDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpModule,
    SidebarModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [DepartmentsService],
  bootstrap: [AppComponent],
  entryComponents: [BranchDialogComponent]
})
export class AppModule { }
