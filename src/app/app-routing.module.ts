import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandViewComponent } from './views/land-view/land-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { ContactComponent } from './views/contact/contact.component';
import { AreasActivityComponent } from './views/areas-activity/areas-activity.component';
import { TeamViewComponent } from './views/team-view/team-view.component';
const routes: Routes = [
  { path:'', component: LandViewComponent},
  { path:'sobre', component: AboutViewComponent },
  { path:'contato', component: ContactComponent },
  { path: 'areas', component: AreasActivityComponent },
  { path: 'equipe', component: TeamViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
