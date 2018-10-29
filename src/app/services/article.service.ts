import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/Article';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleService {
  private article: Article;
  private url = 'http://localhost/jsonapi';
  private endpointSort = '?sort=nid';
  private endpointImage = '?include=field_image';
  private object: Object;

  constructor(private _httpClient: HttpClient) {}

  getArticles(): Observable<any> {
    return this._httpClient.get(
      `${this.url}/node/article${this.endpointImage}`
    );
    //  .pipe(map(response => console.log(response)));
  }

  getArticle(id): Observable<any> {
    return this._httpClient.get(
      `${this.url}/node/article/${id}/${this.endpointImage}`
    );
  }

  createArticle(title, text): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': 'POST'
      })
    };
    this.object = {
      data: {
        type: 'node--article',
        attributes: {
          title: title,
          body: {
            value: text,
            format: 'plain_text'
          }
        }
      }
    };
    return this._httpClient.post<Article[]>(
      `${this.url}/node/article`,
      this.object,
      httpOptions
    );
  }

  deleteArticle(id): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    return this._httpClient.delete<Article[]>(
      `${this.url}/node/article/${id}`,
      httpOptions
    );
  }

  editArticle(id, title, text): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': 'POST'
      })
    };
    this.object = {
      data: {
        type: 'node--article',
        attributes: {
          title: title,
          body: {
            value: text,
            format: 'plain_text'
          }
        }
      }
    };
    return this._httpClient.patch<Article>(
      `${this.url}/node/article/${id}`,
      this.object,
      httpOptions
    );
  }
}
