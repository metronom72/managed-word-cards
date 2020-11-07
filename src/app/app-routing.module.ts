import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonComponent} from './pages/lesson/lesson.component';
import {ManageLessonsComponent} from './pages/manage-lessons/manage-lessons.component';

const routes: Routes = [
  { path: 'lessons/manage', component: ManageLessonsComponent },
  { path: 'lessons/:lesson', component: LessonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
