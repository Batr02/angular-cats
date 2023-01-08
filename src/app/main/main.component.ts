import { Component, OnInit } from '@angular/core';
import {CatApiService} from "../cats-api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public catImage!: string;
  public error!: string;
  public loading = false;

  constructor(private catApi: CatApiService) { }

  ngOnInit(): void {
    this.getRandomCat();
  }

  getRandomCat() {
    this.loading = true;
    this.catApi.getRandomCat().subscribe(response => {
      this.catImage = response[0].url;
      this.loading = false;
    }, error => {
      this.error = error.message
    });
  }

}
