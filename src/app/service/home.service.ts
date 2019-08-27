import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  data;
  constructor(
    private http: HttpClient
  ) { }
  getBillTypes(id) {
    return this.http.get('ws/homeAction20170807!getHome.sy',
    {params: new HttpParams().set('wtyCommunityId', id)});
  }

}
