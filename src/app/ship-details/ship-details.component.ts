import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShipDetailsGQL } from '../services/spacexGraphql.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipDetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private shipDetailsService: ShipDetailsGQL
  ) {}

  shipDetails$ = this.route.paramMap.pipe(
    map((params) => params.get('id') as string),
    switchMap((id) => this.shipDetailsService.fetch({ id })),
    map((res) => res.data.ship)
  );

  ngOnInit(): void {}
}

// import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// @Component({
//   selector: 'app-ship-details',
//   templateUrl: './ship-details.component.html',
//   styleUrls: ['./ship-details.component.sass'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class ShipDetailsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }