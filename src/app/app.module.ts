import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { ExternalService } from './example/external.service';
import { MyService } from './example/my.service';
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
  providers: [ExternalService, MyService, ExternalService, MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
