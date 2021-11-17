import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Compiler, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { SortOrderEnum } from 'ui-out-lib';
import { FiltrosPaginator } from './paginator.model';
import { I18nService } from './shared/services/i18n-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outsourcing-manager';
  dataSource: any;
  public data: any;
  totalElements = 0;
  numberElements = 0;
  // displayedColumns: any;
  sortBy = 'cota';
  sortDirection: SortOrderEnum = 1;
  page = 0;
  defaultPage = environment.defaultPage;
  loading!: boolean;
  label = 'cota';
  cols = 3;
  displayedColumns = [
    // {
    //   field: (r: any) => `${r.cota ? r.cota : ''} - ${r.seqsituacao ? r.seqsituacao : ''}`,
    //   header: 'label.cotaSeq', class: '--width-sm --cell-text-start'
    // },
    {
      field: 'id',
      header: 'label.tipo', class: '--width-sm --cell-text-start --text-cell-bold'
    },
    {
      field: 'code',
      header: 'code', class: '--width-sm --cell-text-start --text-cell-bold'
    },
    {
      field: 'description',
      header: 'descricao', class: '--width-sm --cell-text-start --text-cell-bold'
    },
    {
      // field: (r) => getPercentualLance(r, this.decimalPipe),
      // header: 'label.percentualSymbol', class: '--width-sm --cell-text-end --text-cell-bold --pr-md'
    }
  ];
  constructor(
    private _router: Router,


    private _compiler: Compiler,
    private translateService: TranslateService,
    private cdRef: ChangeDetectorRef,
    private i18nService: I18nService,
    private http: HttpClient

  ) {
    this._compiler.clearCache();
  }
  ngOnInit() {

    // this._trackingRouterEvents();
    this.translateService.setDefaultLang(environment.defaultLanguage);
    this.loadDataTable();
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
  loadDataTable() {
    this.loading = true;
    const filtrosQuery: FiltrosPaginator = {
      sortBy: this.sortBy,
      sortDirection: this.sortDirection,
      offset: this.page,
      limit: this.defaultPage,
    };
    const filtrosBody: any = {
      id: 1,
      code: 'ESTE',
      name: 'GRUPO'
    };
    const arr2: Product[] = [{ code: "lol", id: "0", name: "PINTO" }]
    const arr: Array<{ id: number, text: string }> = [{ id: 1, text: "texto" }, { id: 2, text: "texto" }];
    const t = {
      content:
        [
          {
            // "id": "b",
            tipoLance: "d"
          }
        ]

    }
    const lol = this.http.get('https://mocki.io/v1/8e5e5041-7df7-4c68-9fc8-f3797755d73f').subscribe((p: PIROCONA) => {
      this.dataSource = p.data;
      // this.dataSource = data.content;
      this.totalElements = p.data?.length || 0;  //data.totalElements;
      //  this.dataSource = t;//JSON.stringify(arr);
      // this.totalElements = data.totalElements;
      debugger;
      this.loading = false;

      //     // this.cdRef.detectChanges();
      //   });
      this.cdRef.detectChanges();

    });
    // const lp = <Product[]>t.content;


  }
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  // description?: string;
  // price?: number;
  // quantity?: number;
  // inventoryStatus?: string;
  // category?: string;
  // image?: string;
  // rating?: number;
}
export interface PIROCONA {
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  id: string;
  code: string;

  description: string;

}
