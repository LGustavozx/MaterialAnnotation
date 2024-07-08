import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, take, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent implements OnInit {
  loadingPercent = 95;
  loadingPercentDelayed = 0;
  queryValue = 0;
  queryMode: ProgressBarMode = 'query';

  bufferBufferValue = 0;

  constructor() {}

  ngOnInit() {
    this.loadingProgress(500, 100).subscribe((i) => (this.loadingPercent = i));

    concat(
      interval(2000).pipe(
        take(1),
        tap(() => (this.queryMode = 'determinate')),
      ),
      this.loadingProgress(500, 100)
    ).subscribe((i) => (this.queryValue = i));

    this.loadingProgress(350, 100).subscribe((i) => (this.bufferBufferValue = i));
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed).pipe(
      map((i) => i * 5),
      takeWhile((i) => i <= takeUntil)
    );
  }
}
