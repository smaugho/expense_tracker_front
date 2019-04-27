import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./core/authentication/login/login.component";
import { RegisterComponent } from './register/register.component';
import { ExpenseslistComponent } from './expenseslist/expenseslist.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, ExpenseslistComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
