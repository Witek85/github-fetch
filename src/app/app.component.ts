import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

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
}