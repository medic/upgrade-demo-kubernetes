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

  upgradeResult: string = '';

  constructor(private upgradeCommandService: UpgradeCommandService) {
    for (const availableVersion in completeListOfVersions) {
      if(availableVersion != this.currentVersion) {
        this.availableVersions.push(availableVersion);
      }
    }
  }

  ngOnInit(): void {
  }

  upgradeVersion(versionTag: string): void {
    this.upgradeCommandService.upgradeImages(versionTag).subscribe(result => {
      this.upgradeResult = result; console.log(result);
    });
  }

}
