import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShipListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipListComponent implements OnInit {
  constructor(private shipListService: ShipListGQL) {}

  shipList$ = this.shipListService
    .fetch({ limit: 30 })
    .pipe(map((res) => res.data.ships));

  ngOnInit(): void {}
}
