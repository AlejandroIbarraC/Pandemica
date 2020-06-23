import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { KeysPipe } from './services/keys.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MapComponent } from './components/map/map.component';
import { MapShapeService } from './services/map/map-shape.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PatientsChartComponent } from './components/charts/patients-chart/patients-chart.component';
import { GenderChartComponent } from './components/charts/gender-chart/gender-chart.component';
import { AgeChartComponent } from './components/charts/age-chart/age-chart.component';
import { AccumulatedChartComponent } from './components/charts/accumulated-chart/accumulated-chart.component';
import { RegionChartComponent } from './components/charts/region-chart/region-chart.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { UserAccessComponent } from './components/user-access/user-access.component';
import { HealthCenterComponent } from './components/health-center/health-center.component';
import { RegionsComponent } from './components/admin/tables/regions/regions.component';
import { PathologiesComponent } from './components/admin/tables/pathologies/pathologies.component';
import { PatientStatusComponent } from './components/admin/tables/patient-status/patient-status.component';
import { HealthCentersTableComponent } from './components/admin/tables/health-centers-table/health-centers-table.component';
import { SanitaryMeasuresComponent } from './components/admin/tables/sanitary-measures/sanitary-measures.component';
import { CountryMeasuresComponent } from './components/admin/tables/country-measures/country-measures.component';
import { MedicationComponent } from './components/admin/tables/medication/medication.component';
import { UsersComponent } from './components/admin/tables/users/users.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule } from '@angular/forms';
import { CountryMeasuresPopupComponent } from './components/admin/tables/country-measures/country-measures-popup/country-measures-popup.component';
import { HealthCentersTablePopupComponent } from './components/admin/tables/health-centers-table/health-centers-table-popup/health-centers-table-popup.component';
import { MedicationPopupComponent } from './components/admin/tables/medication/medication-popup/medication-popup.component';
import { PathologiesPopupComponent } from './components/admin/tables/pathologies/pathologies-popup/pathologies-popup.component';
import { PatientStatusPopupComponent } from './components/admin/tables/patient-status/patient-status-popup/patient-status-popup.component';
import { RegionsPopupComponent } from './components/admin/tables/regions/regions-popup/regions-popup.component';
import { SanitaryMeasuresPopupComponent } from './components/admin/tables/sanitary-measures/sanitary-measures-popup/sanitary-measures-popup.component';
import { UsersPopupComponent } from './components/admin/tables/users/users-popup/users-popup.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';

import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ContactsComponent } from './components/health-center/contacts/contacts.component';
import { ContactsPopupComponent } from './components/health-center/contacts/contacts-popup/contacts-popup.component';
import { HealthCenterPopupComponent } from './components/health-center/health-center-popup/health-center-popup.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MapComponent,
    PatientsChartComponent,
    GenderChartComponent,
    AgeChartComponent,
    AccumulatedChartComponent,
    RegionChartComponent,
    FooterComponent,
    ErrorComponent,
    AdminComponent,
    AboutComponent,
    UserAccessComponent,
    HealthCenterComponent,
    RegionsComponent,
    PathologiesComponent,
    PatientStatusComponent,
    HealthCentersTableComponent,
    SanitaryMeasuresComponent,
    CountryMeasuresComponent,
    MedicationComponent,
    UsersComponent,
    KeysPipe,
    CountryMeasuresPopupComponent,
    HealthCentersTablePopupComponent,
    MedicationPopupComponent,
    PathologiesPopupComponent,
    PatientStatusPopupComponent,
    RegionsPopupComponent,
    SanitaryMeasuresPopupComponent,
    UsersPopupComponent,
    ContactsComponent,
    ContactsPopupComponent,
    HealthCenterPopupComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyCeUVOj8cB5nwhVWa2jxvrc7EgDsGMzGm0',
      authDomain: 'pandemica-259ec.firebaseapp.com',
      databaseURL: 'https://pandemica-259ec.firebaseio.com',
      projectId: 'pandemica-259ec',
      storageBucket: 'pandemica-259ec.appspot.com',
      messagingSenderId: '321004965436',
      appId: '1:321004965436:web:65ed422c723b1096eefd39',
      measurementId: 'G-3RGXR1MLNC'
    }),
    BrowserAnimationsModule,
    MatPasswordStrengthModule,
    NgxChartsModule,
    FormsModule,
    NgxDropzoneModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [
    MapShapeService,
    AuthService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
