import { Component } from '@angular/core';
import { GitHubService } from '../services/github.service';

@Component({
  moduleId:module.id,
  selector: 'GitHub',
  templateUrl: 'github.component.html',
  providers :[GitHubService]
})
export class GitHubComponent {
  user :any;
  constructor(private gitHubService : GitHubService){
      console.log("GitHubComponent initialized..")
      this.gitHubService.getUser().subscribe(user => 
      {
        this.user = user;
        console.log(this.user.avatar_url);
      });
  }
  
}