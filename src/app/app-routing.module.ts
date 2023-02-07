import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { HomeComponent } from './Components/home/home.component';
import { CertificationsComponent } from './Components/certifications/certifications.component';
import { HobbiesComponent } from './Components/hobbies/hobbies.component';
import { FriendsListComponent } from './Components/friends-list/friends-list.component';
import { VisionComponent } from './Components/vision/vision.component';
import { EducationComponent } from './Components/education/education.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
Error;
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'friends', component: FriendsListComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
