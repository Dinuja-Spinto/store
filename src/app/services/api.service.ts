import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private htttpClient: HttpClient
  ) { }

  get<T>(url: string, options:Options):Observable<T>{
    return this.htttpClient.get<T>(url, options) as Observable<T>;
  }
}
