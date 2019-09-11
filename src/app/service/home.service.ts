import { Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  data: any;
  constructor(
    private http: HttpClient
  ) { }

  getHomeData(id: any) {
   return this.http
    .get('ws/homeAction20170807!getHome.sy', {params: new HttpParams().set('wtyCommunityId', id)});
  }
}
