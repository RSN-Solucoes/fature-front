import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AsideComponent } from './shared/components/aside/aside.component';
import { RequestMessageModule } from './shared/components/request-message/request-message.module';
import { RequestLoadingModule } from './shared/components/request-loading/request-loading.module';

// Full Calendar
import { FullCalendarModule } from '@fullcalendar/angular';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, AsideComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ModulesModule,
    RequestMessageModule,
    RequestLoadingModule,
    FullCalendarModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
