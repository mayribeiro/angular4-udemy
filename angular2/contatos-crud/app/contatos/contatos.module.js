"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const forms_1 = require("@angular/forms");
const contato_service_1 = require("./contato.service");
const contato_detail_component_1 = require("./contato-detail.component");
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const contatos_lista_component_1 = require("./contatos-lista.component");
const contato_routing_module_1 = require("./contato-routing.module");
/**
 * exports usado para modulos externos terem acesso ao component
 * imports usado para importas os modulos
 */
let ContatosModule = class ContatosModule {
};
ContatosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            contato_routing_module_1.ContatoRountingModule,
            forms_1.FormsModule
        ],
        declarations: [
            contatos_lista_component_1.ContatosListaComponent,
            contato_detail_component_1.ContatoDetailComponent
        ],
        exports: [
            contatos_lista_component_1.ContatosListaComponent
        ],
        providers: [
            contato_service_1.ContatoService
        ]
    })
], ContatosModule);
exports.ContatosModule = ContatosModule;
//# sourceMappingURL=contatos.module.js.map