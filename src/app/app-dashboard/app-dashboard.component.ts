import { Component, OnInit } from '@angular/core';
import { AppRestApiService } from '../app-rest-api.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-app-dashboard',
    templateUrl: './app-dashboard.component.html',
    styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {

    data: any={};
    dataArticle: [];
    dataMeta: [];
    linkImage ="";
    linkFrontend ="";
    isLoading = true;

    constructor(
        private rest: AppRestApiService,
        private meta: Meta,
        private title: Title
    ) { 
        this.linkFrontend = rest.link_url_frontend();
        this.linkImage = 'https://firebasestorage.googleapis.com/v0/b/zel-blog.appspot.com/o';
        this.takeMetaSEO();
    }

    async ngOnInit() {
        await this.rest.getArticleDashboard().subscribe((data) => {
            this.isLoading = false;
            this.data = data['item'];
            data['success']
                ? (this.dataArticle = data['data'])
                : this.data.error(data['message']
            );
        })
    }

    async takeMetaSEO() {
        await this.rest.getTagMeta().subscribe((data) => {
            this.isLoading = false;
            this.data = data['item'];
            data['success']
                ? (this.dataMeta = data['data'][0])
                : this.data.error(data['message']
            );
            this.addMetaSEO()
        })
    }

    addMetaSEO() {
        this.meta.addTags([
            // Tag Meta Default
            {name: 'title',                     content: this.dataMeta['site_title']},
            {name: 'description',               content: this.dataMeta['site_description']},
            {name: 'keywords',                  content: this.dataMeta['site_keyword']},
            {name: 'revisit-after',             content: '1 days'},
            {name: 'author',                    content: this.dataMeta['site_author']},
            {name: 'robots',                    content: 'index, follow'},
            // Tag Meta OG
            {property: 'og:type',               content: 'website'},
            {property: 'og:locale',             content: 'id_ID'},
            {property: 'og:locale:alternate',   content: 'ms_MY'},
            {property: 'og:title',              content: this.dataMeta['site_title']},
            {property: 'og:description',        content: this.dataMeta['site_description']},
            {property: 'og:image',              content: this.linkFrontend+`assets/images/logo.png`},
            {property: 'og:url',                content: this.linkFrontend},
            {property: 'og:site_name',          content: 'DAZELPRO'},
            // Tag Meta Twitter
            {property: 'twitter:card',          content: 'summary_large_image'},
            {property: 'twitter:image',         content: this.linkFrontend+`assets/images/logo.png`},
            {property: 'twitter:description',   content: this.dataMeta['site_description']},
            {property: 'twitter:title',         content: this.dataMeta['site_title']},
            {property: 'twitter:site',          content: this.linkFrontend},
        ]);
        this.title.setTitle(this.dataMeta['site_title']);
    }

}
