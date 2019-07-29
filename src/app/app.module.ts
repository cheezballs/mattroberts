import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { GuidesComponent } from './guides/guides.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, PageNotFoundComponent, GuidesComponent, ProjectsComponent],
  imports: [BrowserModule, NgbModule, BrowserAnimationsModule, FontAwesomeModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
