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
    }

    async ngOnInit() {
        await this.rest.getArticleDashboard().subscribe((data) => {
            this.isLoading = false;
            this.data = data['item'];
            data['success']
                ? (this.dataArticle = data['data'])
                : this.data.error(data['message']
            );
            this.addMetaSEO();
        })
    }

    addMetaSEO() {
        this.meta.addTags([
            // Tag Meta Default
            {name: 'title',                     content: 'DAZELPRO : Website Tutorial Pemrograman Web'},
            {name: 'description',               content: 'Website ini menyediakan tutorial seputar Dunia IT terutama pada Bahasa Pemrograman Berbasis Web. Tutorial dikemas serapi mungkin agar mudah dipahami.'},
            {name: 'keywords',                  content: 'dazelpro, dazelpro my id, tutorial web pemula'},
            {name: 'revisit-after',             content: '1 days'},
            {name: 'author',                    content: 'Zeldianto Eka Putra'},
            {name: 'robots',                    content: 'index, follow'},
            // Tag Meta OG
            {property: 'og:type',               content: 'website'},
            {property: 'og:locale',             content: 'id_ID'},
            {property: 'og:locale:alternate',   content: 'ms_MY'},
            {property: 'og:title',              content: 'DAZELPRO : Website Tutorial Pemrograman Web'},
            {property: 'og:description',        content: 'Website ini menyediakan tutorial seputar Dunia IT terutama pada Bahasa Pemrograman Berbasis Web. Tutorial dikemas serapi mungkin agar mudah dipahami.'},
            {property: 'og:image',              content: this.linkFrontend+`assets/images/logo-nav.png`},
            {property: 'og:url',                content: this.linkFrontend},
            {property: 'og:site_name',          content: 'dazelpro'},
            // Tag Meta Twitter
            {property: 'twitter:card',          content: 'summary_large_image'},
            {property: 'twitter:image',         content: this.linkFrontend+`assets/images/logo-nav.png`},
            {property: 'twitter:description',   content: 'Website ini menyediakan tutorial seputar Dunia IT terutama pada Bahasa Pemrograman Berbasis Web. Tutorial dikemas serapi mungkin agar mudah dipahami.'},
            {property: 'twitter:title',         content: 'DAZELPRO : Website Tutorial Pemrograman Web'},
            {property: 'twitter:site',          content: this.linkFrontend},
        ]);
        this.title.setTitle('DAZELPRO : Website Tutorial Pemrograman Web');
    }

}
