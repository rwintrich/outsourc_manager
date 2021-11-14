
import { CommonModule } from '@angular/common';
import { SessionInfoService } from './session-info.service';

import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { LoginService } from './login.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SessionInfoService, LoginService

    // {
    //   provide: APP_INITIALIZER,
    //    useFactory: InitFramework,
    //   multi: true,
    //   deps: [ LoginService]
    // }

  ]
})
export class CoreModule { }
