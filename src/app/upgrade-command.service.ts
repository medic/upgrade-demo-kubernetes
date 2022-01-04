import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUpgradeMessage } from './upgrade-message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpgradeCommandService {
  private upgradeURL = 'http://localhost:5008/upgrade';
  constructor(private http: HttpClient) { 
  }

  constructUpgradeArray = (imageTag: string) : Array<IUpgradeMessage> => {
    const upgradeJSON = {containerName: 'upgrade-demo', imageTag: imageTag};
    const upgradeMessage: IUpgradeMessage = upgradeJSON;
    let upgradeArr: Array<IUpgradeMessage> = [];
    upgradeArr.push(upgradeMessage);
    return upgradeArr;
  }

  upgradeImages(imageTag: string): Observable<string> {
    const upgradeArray = this.constructUpgradeArray(imageTag);
    return this.http.post<string>(this.upgradeURL, upgradeArray);
  }

}
