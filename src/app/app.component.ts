import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements  OnInit{
  title = 'projetSpringBootEnvironnementFront';
  current = '0';
  num: number;

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/adder/current', {responseType: 'text'}).subscribe(data => {
      this.current = data;
      console.log(this.current);
    });
  }

  constructor(private httpClient: HttpClient) {
  }

  random(): void{
      console.log('click');
      this.httpClient.get('http://localhost:8080/adder/random', {responseType: 'text'}).subscribe(data => {
      this.current = data;
    });
  }
  addition(): void {
    console.log(this.num);
    this.httpClient.post('http://localhost:8080/adder/accumulate', this.num).subscribe(
      () => { this.ngOnInit();
      }
      );


  }

  changeCurrent(): void {
    this.httpClient.post('http://localhost:8080/adder/changeBase', this.current).subscribe(() => {
      this.ngOnInit();
    });
  }
}
