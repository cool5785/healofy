import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
  public babylist: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  /**
   * Get list data from Firebase
   * @param listPath name of the list
   * @returns {Observable<any>}
   */
  getData(listPath): Observable<any> {
    return this.db.list(listPath).valueChanges();
  }
}
