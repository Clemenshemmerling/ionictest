import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Lugares: any = [];
  constructor(public navCtrl: NavController, public lugaresService: LugaresService) {
    this.lugaresService.getLugares().valueChanges()
    .subscribe((lugaresFb)=>{
      this.Lugares = lugaresFb;
    })
  }

  navLugar(name) {
    this.navCtrl.push(LugarPage, {nombre: name});
  }

  vistaDetalle() {
    this.navCtrl.push(LugarPage, {lugar: {} });
  }

  irDetalle(lugar) {
    this.navCtrl.push(LugarPage, {lugar: lugar});
  }

  borrarlugar(lugar) {
    return this.lugaresService.delLugar(lugar);
  }

}
