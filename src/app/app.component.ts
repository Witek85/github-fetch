import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  chosen:string;
  issues = [];
  gitService: GithubService;

  getIssues(chosen) {

    this.issues = this.gitService.getIssues(this.chosen);
    return this.issues;
    // if (chosen === 'all') {
    //   return this.issues.slice();
    // }

    // return this.issues.filter((issue) => {
    //   return issue.status === chosen;
    // });

}

getIssuesOpen() {
  this.issues = this.gitService.getIssuesOpen();
  return this.issues;
    // return this.issues.filter((issue) => {
    //   return issue.status === 'open';
    // });
}

getIssuesClosed() {
  this.issues = this.gitService.getIssuesClosed();
  return this.issues;
    // return this.issues.filter((issue) => {
    //   return issue.status === 'closed';
    // });
}

constructor(gitService: GithubService) {
  this.gitService = gitService;
}

ngOnInit() {
}

receiveChosen($event) {
  this.chosen = $event;
}

ismodifiedIssueMain(event) {

  const pos = this.issues.findIndex((iss) => {
    return iss.name === event.name;
  });

  this.issues[pos].status = event.status; 

}



}
