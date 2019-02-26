import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceMainLocator } from './service-locator-main';
import { SharedModule } from './shared/shared.module';
import { routes as dashboardviewChildRoutes } from './dash-board-view/dash-board-view.module';import { DashBoardViewModule } from './dash-board-view/dash-board-view.module';
import { DashBoardViewComponent } from './dash-board-view/dash-board-view.component';




const routes: Routes = [
{path: '', redirectTo: 'dash-board-view', pathMatch: 'full'},	{path: 'dash-board-view', component:DashBoardViewComponent ,children: dashboardviewChildRoutes 	}]


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
    DashBoardViewModule   ],
  providers: [ServiceMainLocator, ],
  bootstrap: [AppComponent],
})
export class AppModule { }

