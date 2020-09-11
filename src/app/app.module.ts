// External Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Internal Dependencies
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import {
       FlexLayoutModule
      } from '@angular/flex-layout';


import { SliderModule } from 'angular-image-slider';
import { FormsModule } from '@angular/forms';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
// import {A11yModule} from '@angular/cdk/a11y';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { AuthModule } from './authentication/auth.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './service/notification.service';
import { SidenavService } from './service/sidenav.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
  ],
  entryComponents: [
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AuthModule,
    MaterialModule,
    HttpClientModule,
 

  ],
  exports: [
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    SliderModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
   
  ],

  providers: [
    NotificationService,
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
