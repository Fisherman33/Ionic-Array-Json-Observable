import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataF = [];
  errorMessage: string;
  public objectData: any = Object.keys;
  constructor(public navCtrl: NavController, public dataService: DataServiceProvider,) {

  }
  ionViewDidLoad() {
    this.getTime()
  }
  getTime() {
    this.dataService.getDataT()
      .subscribe(
        dataF => this.dataF = dataF,
        error => this.errorMessage = <any>error);
    console.log(this.dataF)
  }
}
