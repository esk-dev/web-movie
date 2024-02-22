import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT, IEnvironment } from 'config';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiRequestOptions, getApiRequestOptions } from '../util/api.util';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject(ENVIRONMENT) private readonly env: IEnvironment
  ) {}

  delete<T = void>(
    url: string,
    options?: Partial<ApiRequestOptions>
  ): Observable<T> {
    return this.httpClient
      .delete<T>(this.makeUrl(url), getApiRequestOptions(options))
      .pipe(catchError((error) => throwError(() => error)));
  }

  get<T = void>(
    url: string,
    options?: Partial<ApiRequestOptions>
  ): Observable<T> {
    return this.httpClient
      .get<T>(this.makeUrl(url), getApiRequestOptions(options))
      .pipe(catchError((error) => throwError(() => error)));
  }

  makeUrl(url: string): string {
    return url.indexOf('http') === 0 ? url : `${this.env.API_URL}${url}`;
  }

  patch<T = void>(
    url: string,
    body: null | unknown,
    options?: Partial<ApiRequestOptions>
  ): Observable<T> {
    return this.httpClient
      .patch<T>(this.makeUrl(url), body, getApiRequestOptions(options))
      .pipe(catchError((error) => throwError(() => error)));
  }

  post<T = void>(
    url: string,
    body?: null | unknown,
    options?: Partial<ApiRequestOptions>
  ): Observable<T> {
    return this.httpClient
      .post<T>(this.makeUrl(url), body ?? null, getApiRequestOptions(options))
      .pipe(catchError((error) => throwError(() => error)));
  }

  put<T = void>(
    url: string,
    body: null | unknown,
    options?: Partial<ApiRequestOptions>
  ): Observable<T> {
    return this.httpClient
      .put<T>(this.makeUrl(url), body, getApiRequestOptions(options))
      .pipe(catchError((error) => throwError(() => error)));
  }
}
