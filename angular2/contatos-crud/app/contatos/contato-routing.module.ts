import { ContatoDetailComponent } from './contato-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContatosListaComponent } from './contatos-lista.component';

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
export class ContatoRountingModule {

}