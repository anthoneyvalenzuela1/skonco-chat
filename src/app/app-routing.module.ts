import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildView1Component } from './child-view1/child-view1.component';
import { ChildView2Component } from './child-view2/child-view2.component';
import { ChildView3Component } from './child-view3/child-view3.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: '', redirectTo: 'view1', pathMatch: 'full' },
  { path: 'view1', component: View1Component, data: { text: 'View 1' } },
  { path: 'view2', component: View2Component, data: { text: 'View 2' } },
  { path: 'view3', component: View3Component, data: { text: 'View 3' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } },
  { path: 'child-view1', component: ChildView1Component, data: { text: 'Child View 1' } },
  { path: 'child-view2', component: ChildView2Component, data: { text: 'Child View 2' } },
  { path: 'child-view3', component: ChildView3Component, data: { text: 'Child View 3' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
