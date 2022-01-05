import { Component, OnInit } from '@angular/core';
import { UpgradeCommandService } from '../upgrade-command.service';
import completeListOfVersions from './upgrade-specification.json';
import packageJSON from '../../../package.json';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {
  currentVersion: string = packageJSON.version;
  availableVersions: string[] = [];
  deploymentReadyForUpgrade: {ready: boolean, message: string} = {ready: false, message: 'Deployment not yet ready'};
  updateMessage: string = '';

  upgradeResult: string = '';

  constructor(private upgradeCommandService: UpgradeCommandService) {
    for (const availableVersion in completeListOfVersions) {
      if(availableVersion != this.currentVersion) {
        this.availableVersions.push(availableVersion);
      }
    }
  }

  async ngOnInit(): Promise<void> {
    await this.checkReadiness();
  }

  upgradeVersion(versionTag: string): void {
    if (!this.deploymentReadyForUpgrade.ready) {
      alert(`Upgrade cannot be run right now. Reason: ${this.deploymentReadyForUpgrade.message}`);
    } else {
      this.upgradeCommandService.upgradeImages(versionTag).subscribe(result => {
        this.upgradeResult = result;
        this.updateMessage = JSON.stringify(result);
        console.log(JSON.stringify(result));
      });
    }
  }

  async checkReadiness(): Promise<{ready: boolean, message: string}> {
    let readiness: {ready: boolean, message: string} = {ready: false, message: ''};

    readiness = await this.upgradeCommandService.checkReadiness().toPromise();
    console.log(JSON.stringify(readiness));
    this.deploymentReadyForUpgrade = readiness;
    return readiness;
  }

}
