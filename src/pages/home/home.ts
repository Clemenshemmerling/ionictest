import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Lugares: any = [
    {
      nombre: 'Nombre 1',
      direccion: 'Direccion 1',
      categoria: 'Categoria 1'
    },
    {
      nombre: 'Nombre 2',
      direccion: 'Direccion 2',
      categoria: 'Categoria 2'
    },
    {
      nombre: 'Nombre 3',
      direccion: 'Direccion 3',
      categoria: 'Categoria 3'
    },
    {
      nombre: 'Nombre 4',
      direccion: 'Direccion 4',
      categoria: 'Categoria 4'
    },
  ];
  constructor(public navCtrl: NavController) {

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

}
