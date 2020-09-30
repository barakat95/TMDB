import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { TopRatedTvComponent } from './top-rated-tv/top-rated-tv.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PopularTvComponent } from './popular-tv/popular-tv.component';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaDetailsComponent } from './media-details/media-details.component';
// import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    TopRatedMoviesComponent,
    TopRatedTvComponent,
    PopularMoviesComponent,
    PopularTvComponent,
    NowPlayingMoviesComponent,
    MediaDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
