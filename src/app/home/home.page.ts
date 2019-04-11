import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  valor1 = 0;
  valor2 = 0;
  resultado = 0;
  operacao = '';
  constructor(public navCtrl: NavController) { }
  onChangeValue(oper) {
    this.operacao = oper;
    if (this.operacao === 'menos'){
      this.resultado = this.valor1 - this.valor2;
      //alert(this.resultado);
    }
    if (this.operacao === 'soma') {
      this.resultado = Number(this.valor1) + Number(this.valor2);
      //alert(this.resultado);
    }

    if (this.operacao === 'divisao') {
      this.resultado = this.valor1 / this.valor2;
      //alert(this.resultado);
    }

    if (this.operacao === 'vezes') {
      this.resultado = this.valor1 * this.valor2;
      //alert(this.resultado);
    }

  }

  /*onChangeValue(valor) {
    if (valor1 == '') {
      this.valor1 = valor;
    } else {
      this.valor2 = valor;
    }

    if (valor2 != '') {
      this.Result();
    }
  }

  Result() {

  }*/
  
}
