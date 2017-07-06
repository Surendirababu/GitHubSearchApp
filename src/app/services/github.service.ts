import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService
{
    private client_id = 'd363059b711767020701'
    private client_secret = '864656317c0904b583f99e530ba74a2123460676'
    
    constructor(private _http : Http)
    {
        console.log("GitHubService initialized...")
    }

    getUser(username : string)
    {
       return this._http.get("https://api.github.com/users/"+username+"?client_id="+this.client_id+"&client_secret="+this.client_secret)
        .map(res => res.json());    
    }

    getRepos(username : string)
    {
       return this._http.get("https://api.github.com/users/"+username+"/repos?client_id="+this.client_id+"&client_secret="+this.client_secret)
        .map(res => res.json());    
    }
}
