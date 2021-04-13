import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeling-lucky',
  templateUrl: './feeling-lucky.component.html',
  styleUrls: ['./feeling-lucky.component.scss'],
})
export class FeelingLuckyComponent implements OnInit {
  random;
  error;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = `https://api.adviceslip.com/advice`;
    this.http.get(url).subscribe(
      (results) => {
        this.random = results;
        console.log(this.random);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
