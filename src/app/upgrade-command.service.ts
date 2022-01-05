import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUpgradeMessage } from './upgrade-message';
import { HttpClient } from '@angular/common/http';
import completeListOfVersions from './upgrades/upgrade-specification.json';
@Injectable({
  providedIn: 'root'
})
export class UpgradeCommandService {
  private upgradeURL = 'http://localhost:5008/upgrade';
  private readinessCheckURL = 'http://localhost:5008/server-status';
  constructor(private http: HttpClient) { 
  }

  typedKeys<T>(o: T): (keyof T)[] {
    return Object.keys(o) as (keyof T)[];
  }

  constructUpgradeArray = (versionTag: string) : Array<IUpgradeMessage> => {
    let upgradeJSON: IUpgradeMessage[] = [];
    this.typedKeys(completeListOfVersions).forEach(k => {
      if(k == versionTag) {
        upgradeJSON = completeListOfVersions[k];
      }
    });
    return upgradeJSON;
  }

  upgradeImages(versionTag: string): Observable<string> {
    const upgradeArray = this.constructUpgradeArray(versionTag);
    return this.http.post<string>(this.upgradeURL, upgradeArray);
  }

  checkReadiness(): Observable<{ready: boolean, message: string}> {
    return this.http.get<{ready: boolean, message: string}>(this.readinessCheckURL);
  }

}
