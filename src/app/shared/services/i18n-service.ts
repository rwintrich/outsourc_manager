import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class I18nService {
    currentLang = '';

    constructor(private translateService: TranslateService) {
        translateService.setDefaultLang(environment.defaultLanguage);
        this.currentLang = this.translateService.currentLang;
    }

    init() {
        const defaultLanguage = environment.defaultLanguage;
        const supportedLanguages = environment.supportedLanguages;
        this.language = defaultLanguage;

        this.translateService.onLangChange
            .subscribe((event: LangChangeEvent) => { localStorage.setItem(defaultLanguage, event.lang); });
    }

    set language(language: string) {
        this.translateService.use(language);
    }

    getLanguage() {
        return this.translateService.currentLang;
    }

    translate(value: string): Observable<any> {
        return this.translateService.get(value);
    }
}
