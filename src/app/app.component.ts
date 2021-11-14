import { Compiler, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { I18nService } from './shared/services/i18n-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outsourcing-manager';

  constructor(
    private _router: Router,


    private _compiler: Compiler,
    private translateService: TranslateService,

    private i18nService: I18nService,
  ) {
    this._compiler.clearCache();
  }
  ngOnInit() {
    // this._trackingRouterEvents();
    this.translateService.setDefaultLang(environment.defaultLanguage);
    // if (!environment.enabledSecurity) { this.loginService.getLoginCallback() }; //TODO: entender melhor se o getLoginCallback pode ser utilizado dentro do app.component 
    // // this.loginService.logout$
    //   .pipe(takeUntil(this.unsubscription))
    //   .subscribe((event: string) => {
    //     if (event === 'LOGOUT') {
    //       this._authService.logout();
    //       this._sessionInfo.onLogout();
    //       this._compiler.clearCache();
    //       if (this.smartpanelDataService.getCurrentAtendimentoValue()) {
    //         this.multiData.setHistoricoTrocaParticipante(null);
    //         this.smartpanelDataService.encerrarAtendimento();
    //         this.smartpanelService.close();
    //         this.i18nService.translate('titulo.consorcio')
    //           .subscribe(titulo => this.titleService.setTitle(titulo));
    //       }
    //     }
    //   });
  }
}

