import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient, private alertifyservice:AlertifyService, private router: Router) { }
  path = "https://localhost:44359/api/";

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.path + "cities")
  }
  getCityById(cityId): Observable<City> {
    return this.http.get<City>(this.path + "cities/detail/?id=" + cityId);
  }
  getPhotosByCity(cityId): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.path + "cities/photos/?cityId=" + cityId);
  }
  add(city) {
    return this.http.post(this.path + "cities/add", city).subscribe(data=>{
      this.alertifyservice.success("City successfully added");
      this.router.navigateByUrl('/cityDetail/'+data["id"])
    });
  }
}
