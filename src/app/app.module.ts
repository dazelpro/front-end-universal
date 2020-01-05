import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { AppDetailBlogComponent } from './app-detail-blog/app-detail-blog.component';
import { AppMaintenanceComponent } from './app-maintenance/app-maintenance.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent,
    AppDetailBlogComponent,
    AppMaintenanceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'front-end-universal' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
