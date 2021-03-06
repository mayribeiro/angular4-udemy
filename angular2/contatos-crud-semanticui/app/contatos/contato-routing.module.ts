import { ContatoDetailComponent } from './contato-detail.component';
import { ContatosListaComponent } from './contatos-lista.component';
import * as path from 'path';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const contatoRoutes: Routes = [
    {
        path: 'contato',
        component: ContatosListaComponent
    },
    {
        path: 'contato/save',
        component: ContatoDetailComponent
    },
    {
        path: 'contato/save/:id',
        component: ContatoDetailComponent
    }

]


@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContatoRoutingModule {

}