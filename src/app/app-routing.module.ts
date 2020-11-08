import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonComponent} from './pages/lesson/lesson.component';
import {ManageLessonsComponent} from './pages/manage-lessons/manage-lessons.component';
import {TableLessonComponent} from './pages/table/table-lesson.component';

const routes: Routes = [
  { path: 'lessons/manage', component: ManageLessonsComponent },
  { path: 'lessons/card/:lesson', component: LessonComponent },
  { path: 'lessons/table/:lesson', component: TableLessonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
