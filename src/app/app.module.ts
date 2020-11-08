import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { TableLessonComponent } from './pages/table/table-lesson.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { ManageLessonsComponent } from './pages/manage-lessons/manage-lessons.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { CardActionsComponent } from './components/card-actions/card-actions.component';
import { ManagedTableComponent } from './components/managed-table/managed-table.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    CardComponent,
    TableLessonComponent,
    LessonComponent,
    ManageLessonsComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardActionsComponent,
    ManagedTableComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
