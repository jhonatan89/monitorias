
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgxBootstrapModule } from '../ngx-bootstrap.module';
import { SearchComboBoxModule, RolesTypeComboboxModule, AcademiaPaginationModule, UtilsModule } from 'ngx-academia-uniandes-library'
import { AngularMaterialModule } from '../angular-material.module';
import { I18NModule } from 'api-angular-academia-intl';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthAcademyModule } from 'auth-academia-uniandes';
import { NgxCrudMocksModule } from 'ngx-crud-mocks';
import { environment } from '../../environments/environment';


const sharedModules =
[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    AngularMaterialModule,
    I18NModule,
    HttpClientModule,
    SearchComboBoxModule,
    RolesTypeComboboxModule,
    AuthAcademyModule,
    AcademiaPaginationModule,
    UtilsModule
    
];

@NgModule({
    imports: [
        sharedModules,
        NgxCrudMocksModule.forRoot({
            apiMockaroo: environment.mockarooApi
        })
    ],
    declarations: [NavbarComponent],
    exports: [sharedModules, NgxCrudMocksModule, NavbarComponent],
    providers: []
})
export class SharedModule { }