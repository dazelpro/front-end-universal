import { Component, OnInit } from '@angular/core';
import { AppRestApiService } from '../app-rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-app-detail-blog',
  templateUrl: './app-detail-blog.component.html',
  styleUrls: ['./app-detail-blog.component.css']
})
export class AppDetailBlogComponent implements OnInit {

    datas = ``;
    id: string;
    data: any={};
    dataArticle: any=[];
    dataTopArticle: any=[];
    linkImage: string;
    isLoading = true;
    linkFrontend = 'https://dazelpro.my.id/';
    linkFirebase = 'https://firebasestorage.googleapis.com/v0/b/zel-blog.appspot.com/o/';

    sName: string;
    sEmail: string;
    constructor(
        private rest: AppRestApiService,
        private activatedRoute: ActivatedRoute,
        private _snackBar: MatSnackBar,
        private meta: Meta,
        private title: Title
    ) { 
        this.id = activatedRoute.snapshot.url[1]["path"];
    }

    async ngOnInit() {
        await this.rest.getArticleDetail(this.id).subscribe((data) => {
            this.isLoading = false;
            this.data = data['item'];
            if(data['success']){
                this.dataArticle = data['data'][0][0];
                this.dataTopArticle = data['data'][2];
            } else {
                this.data.error(data['message'])
            }
            this.linkImage = this.linkFirebase+this.dataArticle['article_images'];
            this.datas = this.dataArticle['article_content'];
            this.addMetaSEO();
        })
    }

    addMetaSEO() {
        this.meta.addTags([
            {name: 'title',                 content: this.dataArticle['article_title']},
            {name: 'description',           content: this.dataArticle['article_description']},
            {name: 'keywords',              content: this.dataArticle['article_keyword']},
            {name: 'revisit-after',         content: '1 days'},
            {name: 'author',                content: this.dataArticle['user_name']},
            {name: 'robots',                content: 'index, follow'},
            {property: 'og:type',           content: 'article'},
            {property: 'og:locale',         content: 'id_ID'},
            {property: 'og:title',          content: this.dataArticle['article_title']},
            {property: 'og:description',    content: this.dataArticle['article_description']},
            {property: 'og:image',          content: this.linkImage+`?alt=media`},
            {property: 'og:url',            content: this.linkFrontend+`article/`+this.dataArticle['article_slug']},
            {property: 'og:site_name',      content: 'dazelpro'},
            {property: 'twitter:card',      content: 'summary_large_image'},
            {property: 'twitter:image',     content: this.linkImage+`?alt=media`},
            {property: 'twitter:description',content: this.dataArticle['article_description']},
            {property: 'twitter:title',      content: this.dataArticle['article_title']},
            {property: 'twitter:site',      content: 'www.dazelpro.my.id'},
        ]);
        this.title.setTitle( this.dataArticle['article_title'] );
    }

    subscribe(sName) {
        sName !== undefined
            ?(sName = `Sorry `+sName+`, service is not yet available`)
            : sName = `Sorry, service is not yet available`
        this._snackBar.open(sName, `OK`, {
            duration: 8000,
        });
    }

}
