import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'home', canActivate:[AuthGuard],component: HomeComponent },
  { path: 'movies', component: MoviesComponent, canActivate:[AuthGuard] },
  { path: 'tv', component: TvComponent, canActivate:[AuthGuard] },
  { path: 'people', component: PeopleComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterationComponent, canActivate:[AuthGuard] },
  { path: '**', component: NotFoundComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
