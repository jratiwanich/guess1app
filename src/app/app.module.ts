import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
//ng-bootstrap components
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { NgbdDatepickerPopup } from './datepicker-popup';

import { AppComponent } from './app.component';
import { TimeEntryFormComponent,OnChangesComponent } from './ui/components/time-entry-form/time-entry-form.component';
import { UserTimeSheetComponent } from './ui/components/user-time-sheet/user-time-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryFormComponent,
    OnChangesComponent,
    UserTimeSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
