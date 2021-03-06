import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
//ng-bootstrap components
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { NgbdDatepickerPopup } from './datepicker-popup';

import { AppComponent ,OnDateChangesComponent} from './app.component';
import { TimeEntryFormComponent,OnChangesComponent } from './ui/components/time-entry-form/time-entry-form.component';
import { UserTimeSheetComponent } from './ui/components/user-time-sheet/user-time-sheet.component';
import {CollapseDirective} from './ui/directives/collapse.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryFormComponent,
    OnChangesComponent,
    OnDateChangesComponent,
    UserTimeSheetComponent,
    CollapseDirective
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
