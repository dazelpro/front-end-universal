import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Kintil';
    constructor(
        public router: Router,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        ) {
        this.matIconRegistry.addSvgIcon(
            "telegram",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/icon/telegram.svg")
        );
        this.matIconRegistry.addSvgIcon(
            "wa",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/icon/whatsapp.svg")
        );
        this.matIconRegistry.addSvgIcon(
            "twitter",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/icon/twitter.svg")
        );
        this.matIconRegistry.addSvgIcon(
            "in",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/icon/linkedin.svg")
        );
    }
}
