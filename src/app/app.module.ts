import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { GithubService } from './github.service';
import { AboutComponent } from './about/about.component';

const routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  // { path: 'all', component: ListComponent },
  // { path: 'open', component: ListComponent },
  // { path: 'closed', component: ListComponent },
  { path: 'about', component: AboutComponent },
  { path: ':status', component: ListComponent },
  { path: '**', redirectTo: '/all' }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListComponent,
    ItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
