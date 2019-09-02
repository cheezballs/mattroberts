import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { GuidesComponent } from './guides/guides.component';
import { ProjectsComponent } from './projects/projects.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { PhotosComponent } from './photos/photos/photos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'hire-me', component: HireMeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
