import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppRestApiService {
    dataLocalStorage:any={};
    constructor(
        private http: HttpClient) 
    { }

    link_url(){
        // return 'http://localhost:8080';
        return 'https://dazelpro-backend.herokuapp.com';
    }

    link_url_frontend(){
        // return 'http://localhost:4200/';
        return 'https://dazelpro.my.id/';
    }

    // API Public Tanpa Token
    getArticleDashboard(){
        return this.http.get(`${this.link_url()}/api-public-article/show-article-dashboard`);
    }

    getArticleDetail(data){
        return this.http.get(`${this.link_url()}/api-public-article/show-article-detail/`+data);
    }

}
