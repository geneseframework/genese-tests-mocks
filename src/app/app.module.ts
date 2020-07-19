import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { GnExternalService } from './example/gn-external.service';
import { GnMyService } from './example/gn-my.service';
import { ExternalService, MyService } from './example-merged/example.genese.tests';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExternalService, MyService, GnExternalService, GnMyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
