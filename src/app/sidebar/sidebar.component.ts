import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  gitService: GithubService;

  constructor(gitService: GithubService) {
    this.gitService = gitService;
  }

  ngOnInit() {}

  getIssuesNumber(side) {
    return this.gitService.getIssues(side).length;
  }

  onSidebarClick(status) {
    this.gitService.onSidebarClick(status);
  }
}