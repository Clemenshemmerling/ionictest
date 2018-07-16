import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {
  constructor(public afDB:AngularFireDatabase) {
  }

  Place: any = [];

  public getLugares() {
    return this.afDB.list('/lugares/');
  }

  public getLugar(id) {
    return this.afDB.object('/lugares/' + id);
  }

  public createLugar(lugar) {
    return this.afDB.database.ref('/lugares/' + lugar.id).set(this.Place);
  }

  public editLugar(lugar) {
    return this.afDB.database.ref('/lugares/' + lugar.id).set(this.Place);
  }

  public delLugar(lugar) {
    return this.afDB.database.ref('/lugares/' + lugar.id).remove(this.Place);
  }
}
