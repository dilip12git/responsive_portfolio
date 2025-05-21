import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectViewersComponent } from './components/project-viewers/project-viewers.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'project/:projectName', component: ProjectViewersComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled',
    })
  ],
  })
  export class AppModule { }