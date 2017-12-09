import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// router
// const appRoutes: Routes = [
//   {path: '', redirectTo: '/search', pathMatch: 'full'},
//   {path: 'login', component: LoginComponent },
//   {path: 'dashboard', component: DashboardComponent, canActivate: [OnlyLoggedInGuard]},
//   {path: 'search', component: SearchComponent, canActivate: [OnlyLoggedInGuard]}
// ];

export class AppComponent {

  issues = [];
  chosen = '';
  gitService: GithubService;

  constructor(gitService: GithubService) {
    this.gitService = gitService;
  }

  ngOnInit() {}

  getIssues() {
    var chosen = this.gitService.getChosen();
    this.issues = this.gitService.getIssues(chosen);
    return this.issues;
  }

    getIssuesNumber(side) {
    return this.gitService.getIssues(side).length;
  }

  onSidebarClick(status) {
    this.gitService.onSidebarClick(status);
  }
}