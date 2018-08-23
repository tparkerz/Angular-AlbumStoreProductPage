import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observalbe } from 'rxjs/Observable';

@Injectable()
export class ProductService {

    private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }

    getAlbum(id:number) {
        return this._http.get<Album>(this._albumUrl).map((response) =>
            response.json());
    }

}
