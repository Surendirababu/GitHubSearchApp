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
  repos :any;
  username : string;
  defualtUserName ="Surendirababu";
  constructor(private gitHubService : GitHubService){
  
  this.gitHubService.getUser(this.defualtUserName).subscribe(user => 
      {
        this.user = user;
      });

       this.gitHubService.getRepos(this.defualtUserName).subscribe(repos => 
      {
        this.repos = repos;
      });
     
  }

  search()
  {
    console.log("Success"+this.username);

      this.gitHubService.getUser(this.username).subscribe(user => 
      {
        this.user = user;
      });

       this.gitHubService.getRepos(this.username).subscribe(repos => 
      {
        this.repos = repos;
      });
  }
  


}