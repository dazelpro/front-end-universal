import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-app-maintenance',
  templateUrl: './app-maintenance.component.html',
  styleUrls: ['./app-maintenance.component.css']
})
export class AppMaintenanceComponent implements OnInit {

  constructor(
      private meta: Meta,
        private title: Title
  ) { 
    this.meta.addTags([
      {name: 'title',                 content: 'Maintenance Page'},
      {name: 'description',           content: 'Website ini masih dalam proses perbaikan'},
      {name: 'revisit-after',         content: '1 days'},
      {name: 'author',                content: 'Zeldianto Eka Putra'},
      {name: 'robots',                content: 'noindex, nofollow'},
      {property: 'og:type',           content: 'article'},
      {property: 'og:locale',         content: 'id_ID'},
      {property: 'og:title',          content: 'Maintenance Page'},
      {property: 'og:description',    content: 'Website ini masih dalam proses perbaikan'},
      {property: 'og:url',            content: 'www.dazelpro.my.id'},
      {property: 'og:site_name',      content: 'dazelpro'},
      {property: 'twitter:description',content: 'Website ini masih dalam proses perbaikan'},
      {property: 'twitter:title',      content: 'Maintenance Page'},
      {property: 'twitter:site',      content: 'www.dazelpro.my.id'}
  ]);
  this.title.setTitle('DAZELPRO.MY.ID');
  }

  ngOnInit() {
  }

}
