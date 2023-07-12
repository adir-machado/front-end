import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { LandViewComponent } from './views/land-view/land-view.component';
import { ExpertiseBlockComponent } from './components/expertise-block/expertise-block.component';
import { TeamComponentComponent } from './components/team-component/team-component.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LandViewComponent,
    ExpertiseBlockComponent,
    TeamComponentComponent,
    AboutViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
