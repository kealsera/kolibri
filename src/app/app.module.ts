import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { KoliBriModule } from "@public-ui/angular-v15";
import { defineCustomElements } from "@public-ui/components/dist/loader";
import { register } from "@public-ui/core";
import { BMF } from "@public-ui/themes";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KoliBriModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor() {
    register(BMF, defineCustomElements).catch(console.warn);
  }
}
