import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CreateComponent } from './shared/containers/create/create.component';
import { CreateData } from './shared/containers/create/create.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    CreateData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
