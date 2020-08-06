import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListComponent implements OnInit {
  constructor(private pastLaunchesService: PastLaunchesListGQL) {}

  // Do not fetch too much
  pastLaunches$ = this.pastLaunchesService
    .fetch({ limit: 30 })
    // Here we extract query data
    // we can also get info like errors or loading state from res
    .pipe(
      map(
        res => res.data.launchesPast
      )
    )

  ngOnInit(): void {}
}
