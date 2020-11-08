import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { ManageComponent } from './pages/manage/manage.component';
import { ManageLessonsComponent } from './pages/manage-lessons/manage-lessons.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardActionsComponent } from './card-actions/card-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    CardComponent,
    TableComponent,
    LessonComponent,
    ManageComponent,
    ManageLessonsComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
