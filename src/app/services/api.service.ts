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

  post<T>(url: string, body: any, options:Options):Observable<T>{
    return this.htttpClient.post<T>(url, body, options) as Observable<T>;
  }

  put<T>(url: string, body: any, options:Options):Observable<T>{
    return this.htttpClient.put<T>(url, body, options) as Observable<T>;
  }

  delete<T>(url: string, options:Options):Observable<T>{
    return this.htttpClient.delete<T>(url, options) as Observable<T>;
  }
}
