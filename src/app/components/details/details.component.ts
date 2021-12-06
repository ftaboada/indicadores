import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { IndicatorsService } from 'src/app/services/indicators/indicators.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @ViewChild('chart') chartRef: ElementRef;
  constructor(
    private indicator: IndicatorsService,
    private route: ActivatedRoute
  ) {}
  serie: any[];
  name: string;
  details: { data: string; name: string }[];
  value: string;

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      const ind = data['indicator'];
      const result = this.indicator.getDetails(ind).subscribe((data) => {
        this.serie = data['serie'];
        this.details = [
          { data: data['nombre'], name: 'Nombre:' },
          { data: data['serie'][0]?.fecha, name: 'Fecha:' },
          { data: data['unidad_medida'], name: 'Unidad de medida:' },
        ];
        this.value = data['serie'][0]?.valor;
      });
    });
  }
}
