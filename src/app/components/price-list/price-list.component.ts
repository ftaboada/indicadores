import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicatorsService } from 'src/app/services/indicators/indicators.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnInit {
  constructor(
    private indicator: IndicatorsService,
    private route: ActivatedRoute
  ) {}
  serie: any[];
  name: string;
  unidad: string;
  code: string;
  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      const ind = data['indicator'];
      const result = this.indicator.getDetails(ind).subscribe((data) => {
        this.serie = data['serie'];
        this.name = data['nombre'];
        this.unidad = data['unidad_medida'];
        const last = data['serie'].length - 1;
        this.code = ind.replace('_', ' ');
      });
    });
  }
}
