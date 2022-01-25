import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HoomeComponent } from './hoome/hoome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FullComponent } from './Layout/full/full.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { HeaderNavigationComponent } from './Shared/header-navigation/header-navigation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { ChangepasswordDailogComponent } from './changepassword-dailog/changepassword-dailog.component';
import {MatTableModule} from '@angular/material/table';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { FooterComponent } from './Shared/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PlayerComponent } from './components/player/player.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HoomeComponent,
    FullComponent,
    BlankComponent,
    HeaderNavigationComponent,
    ChangepasswordDailogComponent,
    FooterComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    NgxAudioPlayerModule,
    FontAwesomeModule,
    InternationalPhoneNumberModule,
    MatToolbarModule,
    MatSliderModule,
    MatProgressBarModule
    
    
  ],
  entryComponents: [ChangepasswordDailogComponent],
  // declarations: [DialogOverviewExample, DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
