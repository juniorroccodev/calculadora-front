import { ResultadoService } from './../resultado.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Resultado} from './resultado';
@Component({
  selector: 'app-resultado-create',
  templateUrl: './resultado-create.component.html',
  styleUrls: ['./resultado-create.component.css']
})
export class ResultadoCreateComponent implements OnInit {
  
  
  
  resultadoForm: FormGroup = this.formBuilder.group({
      id:[null],
      numero1: [null],
      numero2: [null],
      resultado: [null]
});

  submittingForm: boolean = false;
  resultado: Resultado = new Resultado();

  constructor(private service: ResultadoService, private formBuilder:FormBuilder
    
    ) { }

  ngOnInit(): void {

  }
   calcular() {
    var n1 = parseInt(this.resultado_numero1?.value, 10);
    var n2 = parseInt(this.resultado_numero2?.value, 10);
    this.resultado_resultado?.setValue(n1 + n2); ;
  }
 
 createResultado(){
   this.calcular();
 this.service.create(this.resultadoForm.value).subscribe( ()=>{


 })
}
  
get resultado_numero1() { return this.resultadoForm.get("numero1")};
get resultado_numero2() { return this.resultadoForm.get("numero2")};
get resultado_resultado() { return this.resultadoForm.get("resultado")};
}
