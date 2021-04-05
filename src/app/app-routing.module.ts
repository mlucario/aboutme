import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { IntroComponent } from './components/intro/intro.component';
import { PagenotfoundComponent } from './components/share/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'about',
    component: AboutMeComponent,
  },
  {
    path: 'not-found',
    component: PagenotfoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
