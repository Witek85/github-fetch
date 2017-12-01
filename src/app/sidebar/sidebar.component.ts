import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // @Input() childIssues: string;
  // @Input() childIssuesOpen: string;
  // @Input() childIssuesClosed: string;
	@Output() chosen = new EventEmitter<string>();
  chosenSidebar = 'all';
  gitService: GithubService;

  constructor(gitService: GithubService) {
    this.gitService = gitService;
  }

  // issuesAll = 2;
  // issuesOpen = 22;
  // issuesClosed = this.getissuesClosed();

  getissues(side) {
    return this.gitService.getIssues(side).length;
  }

  ngOnInit() {
  	this.chosen.emit('all');
  }

  sendChosen(status) {
    this.chosenSidebar = status;
  	this.chosen.emit(status)
  }

}
