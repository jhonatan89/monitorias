import { NgModule } from '@angular/core';
import { ModalModule, TypeaheadModule, TabsModule, PaginationModule, BsDatepickerModule  } from 'ngx-bootstrap';

const ngxModules = [
  ModalModule.forRoot(),
  TypeaheadModule.forRoot(),
  TabsModule.forRoot(),
  PaginationModule .forRoot(),
  BsDatepickerModule.forRoot()
]

@NgModule({
  imports: [
    ngxModules
  ],
  declarations: [],
  exports:[ModalModule, TypeaheadModule, TabsModule, PaginationModule, BsDatepickerModule]
})
export class NgxBootstrapModule { }
