import { Router } from '@angular/router';

import { ResultadoService } from './../resultado.service';
import { Resultado } from './../resultado.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resultado-read',
  templateUrl: './resultado-read.component.html',
  styleUrls: ['./resultado-read.component.css']
})
export class ResultadoReadComponent implements OnInit {

  resultados: Resultado[] = [
  ];

  displayedColumns: string[] = ['id', 'numero1', 'numero2', 'resultado', 'acoes'];

  constructor(private service: ResultadoService, private router: Router) {}

  ngOnInit(): void {
    this.findAll(); // => Toda vez que a pagina for carregada, chama esse método findAll
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.resultados = resposta;
    })
  }

  adicionarNovoResultado() {
    this.router.navigate(["resultados/create"])
  }
}
