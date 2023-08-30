import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  // it for redirect the page intto dashboard after open any other page by user request
  // clear agendy irikkunnu?????//
  {path:'',redirectTo:'dashboard',pathMatch:"full"},
  {path:'employee',component:EmployeeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'leads',component:LeadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
