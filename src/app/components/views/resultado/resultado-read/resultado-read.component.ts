import { Observable, Subscriber } from 'rxjs';
import { ResultadoService } from './../resultado.service';
import { Resultado } from './../resultado.model';
import { Component, OnInit } from '@angular/core';
import { onErrorResumeNext } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-read',
  templateUrl: './resultado-read.component.html',
  styleUrls: ['./resultado-read.component.css']
})
export class ResultadoReadComponent implements OnInit {

  resultados: Resultado[] = [
    { id: '1', numero1: 22, numero2: 22, resultado: 44}
  ];

  displayedColumns: string[] = ['id', 'numero1', 'numero2', 'resultado', 'acoes'];

  constructor(private resultadoService: ResultadoService, private router: Router) {
   }

  ngOnInit(): void {

  }

  obterTodosResultados(){
    this.resultadoService.obterTodos()
    .then(resultados => console.log(resultados))
    .catch(error => console.error(error));
    
  }

  adicionarCategoria() {
    //this.router.navigate({'resultados/create"})
  }
  
}
