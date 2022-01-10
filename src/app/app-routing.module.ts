import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DocumentComponent } from './document/document.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo : 'documents',pathMatch:'full'},
  {path:'documents',component:DocumentComponent},
  {path:'documents/category/:categoryName',component:DocumentComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
