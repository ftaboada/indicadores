import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndicatorInterface } from 'src/app/models/indicators.model';
import { IndicatorsService } from '../../services/indicators/indicators.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public data: IndicatorInterface[];
  constructor(private router: Router, private indicators: IndicatorsService) {
    this.indicators.getIndicators().subscribe((data: IndicatorInterface[]) => {
      this.data = data;
    });
  }
  ngOnInit(): void {}
  goToDetails(indicator: string) {
    this.router.navigate(['details', indicator]);
  }
  goToPriceList(indicator: string) {
    this.router.navigate([indicator]);
  }
}
