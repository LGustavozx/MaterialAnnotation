import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './Material/Material.module';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarMsnComponent } from './snackbar/snackbar-msn/snackbar-msn.component';
import { DialogModalComponent } from './dialog/dialog-modal/dialog-modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatatableComponent } from './datatable/datatable.component';


@NgModule({
  declarations: [	
    AppComponent,
      ButtonsIconsComponent,
      FormFieldInputComponent,
      ProgressSpinnerComponent,
      TabsComponent,
      DatePickerComponent,
      SnackbarComponent,
      SnackbarMsnComponent,
      DialogModalComponent,
      DialogComponent,
      DatatableComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
