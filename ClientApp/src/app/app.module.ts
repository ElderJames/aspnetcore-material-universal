import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app.routing';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

import { FireBaseComponentsModule } from './shared/firebase.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'aspnetcore-material-universal'
    }),
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AdminModule,
    AppRoutingModule,
    FireBaseComponentsModule,
    ReactiveFormsModule,
    environment['ngsw'] ? ServiceWorkerModule.register('./ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
