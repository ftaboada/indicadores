import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IndicatorInterface } from 'src/app/models/indicators.model';

@Injectable({
  providedIn: 'root',
})
export class IndicatorsService {
  constructor(private http: HttpClient) {}
  getIndicators(): Observable<IndicatorInterface[]> {
    const url = environment.baseUrl;
    const result = this.http.get(url).pipe(
      map((data) => {
        const keys = Object.keys(data);
        const filteredData = keys
          .filter((key) => typeof data[key] === 'object')
          .map((key) => data[key]);
        return filteredData;
      })
    );

    return result as Observable<IndicatorInterface[]>;
  }
  getDetails(indicator: string, dateRange?: string) {
    const url = `${environment.baseUrl}/${indicator}${
      dateRange ? '/' + dateRange : ''
    }`;
    const result = this.http.get(url).pipe(
      map((data) => {
        const typeValue = data['unidad_medida'].toLowerCase();
        const isPercentage = typeValue === 'porcentaje';
        const newSerie = data['serie'].map((el) => {
          const { fecha, valor } = el;
          const newValue = valor
            .toString()
            .split('.')
            .map((value, idx) =>
              idx === 0
                ? value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                : value
            )
            .join(',');
          const newDate = fecha.slice(0, 10);
          return {
            valor: isPercentage ? `${newValue}%` : `$${newValue}`,
            fecha: newDate,
            numberVal: valor,
          };
        });
        const newData = { ...data, serie: newSerie };
        return newData;
      })
    );
    return result;
  }
}
