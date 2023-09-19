import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { LandViewComponent } from './views/land-view/land-view.component';
import { ExpertiseBlockComponent } from './components/expertise-block/expertise-block.component';
import { TeamComponentComponent } from './components/team-component/team-component.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { NgOptimizedImage } from '@angular/common';
import { ArticlesComponentComponent } from './components/articles-component/articles-component.component';
import { ContactComponent } from './views/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ExpertiseComponentComponent } from './components/expertise-component/expertise-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { AreasActivityComponent } from './views/areas-activity/areas-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LandViewComponent,
    ExpertiseBlockComponent,
    TeamComponentComponent,
    AboutViewComponent,
    ArticlesComponentComponent,
    ContactComponent,
    ExpertiseComponentComponent,
    FooterComponent,
    AreasActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
