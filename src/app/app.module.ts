import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { I18nService } from './shared/services/i18n-service';
import { GridModule } from 'ui-out-lib/src/grid';
import { ListModule } from 'ui-out-lib/src/list';
import { FormModule } from 'ui-out-lib/src/form';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MyLibModule } from '../../node_modules/outsourc-ui-front/projects/my-lib/src/public-api';
// import { MyLibModule } from '@rwdev/outsourcing-ui-front/projects/my-lib/src/public-api';
// import {} from '@rwdev/outsourcing-ui-front/projects/my-lib/src/public-api
// import { GridModule } from 'ui-front/lib/grid';
//import { UiComponentsModule } from '../../node_modules/outsourcing-ui-front/projects/ui-components/src/public-api';
// import { DatatableModule } from '../../node_modules/outsourcing-ui-front/projects/ui-components/src/lib/datatable/datatable.module'
registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GridModule,
    ListModule,
    NgSelectModule,
    NgbModule,
    // FormModule,
    MatMenuModule,
    MatGridListModule, MatSelectModule, MatIconModule,
    // GridModule,

    //MyLibModule,
    // DatatableModule,
    // UiComponentsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [I18nService, {
    provide: LOCALE_ID,
    useValue: environment.defaultLanguage
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
