import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled',
    })
  ],
  })
  export class AppModule { }