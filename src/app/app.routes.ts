import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: ViewUserComponent },
    { path: 'create', component: CreateUserComponent },
    { path: 'edit/:id', component: EditUserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  
export class AppRoutingModule {}
