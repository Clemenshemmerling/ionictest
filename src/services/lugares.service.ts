import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {
  constructor(public afDB:AngularFireDatabase) {
  }

  place: any = [];

  public getLugares() {
    return this.afDB.list('/lugares/');
  }

  public getLugar(id) {
    return this.afDB.object('/lugares/' + id);
  }

  public createLugar(lugar) {
    return this.afDB.database.ref('/lugares/' + lugar.id).set(place);
  }

  public editLugar(lugar) {
    return this.afDB.database.ref('/lugares/' + lugar.id).set(place);
  }

  public delLugar(lugar) {
    return this.afDB.database.ref('/lugares/' + lugar.id).remove(place);
  }
}
