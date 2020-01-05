import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { AppDetailBlogComponent } from './app-detail-blog/app-detail-blog.component';
import { AppMaintenanceComponent } from './app-maintenance/app-maintenance.component';

const appRoutes: Routes = [
    {
        path: '',
        component:  AppDashboardComponent },
    {   
        path: 'article/:slug',
        component:  AppDetailBlogComponent
    },
    {   
        path: 'maintenance',
        component:  AppMaintenanceComponent
    },
    { 
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
