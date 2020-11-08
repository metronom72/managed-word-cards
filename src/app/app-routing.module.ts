import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonComponent} from './pages/lesson/lesson.component';
import {ManageLessonsComponent} from './pages/manage-lessons/manage-lessons.component';
import {TableComponent} from './components/table/table.component';

const routes: Routes = [
  { path: 'lessons/manage', component: ManageLessonsComponent },
  { path: 'lessons/:lesson', component: LessonComponent },
  { path: 'lessons/table/:lesson', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
