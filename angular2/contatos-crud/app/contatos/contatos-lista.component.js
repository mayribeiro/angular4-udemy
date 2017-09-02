"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const contatos_moc_1 = require("./contatos-moc");
// module.id usado somente quando for um templateUrl ou stylesUrl, para que ele consiga encontrar a referencia o template html
let ContatosListaComponent = class ContatosListaComponent {
    // module.id usado somente quando for um templateUrl ou stylesUrl, para que ele consiga encontrar a referencia o template html
    constructor() {
        this.contatos = contatos_moc_1.CONTATOS;
    }
};
ContatosListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contatos-lista',
        templateUrl: 'contatos-lista.component.html'
    })
], ContatosListaComponent);
exports.ContatosListaComponent = ContatosListaComponent;
//# sourceMappingURL=contatos-lista.component.js.map