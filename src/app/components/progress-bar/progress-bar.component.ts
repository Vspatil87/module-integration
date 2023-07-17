import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  url1: string = 'https://1.api.fy23ey01.careers.ifelsecloud.com/';
  url2: string = 'https://2.api.fy23ey01.careers.ifelsecloud.com/';
  progresscount: number = 0;
  loading: boolean = true;
  constructor(private http: HttpClient) {
    let a = setInterval(() => {
      if (this.progresscount >= 95) {
        this.progresscount = 99.6;
        clearInterval(a);
        return;
      }
      if (this.loading) {
        this.progresscount++;
      } else {
        this.progresscount += 5;
      }
    }, 100);
    this.loading = true;
    this.getData().subscribe(res => {
      this.loading = false;
    });
  }

  getData(): Observable<any> {
    return this.http.get(this.url2);
  }
}
