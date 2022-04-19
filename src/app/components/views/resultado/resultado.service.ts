import { environment } from './../../../../environments/environment.prod';



import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from './resultado.model';
import { API_PATH } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  
  constructor(private httpClient: HttpClient) { }
  
 obterTodos(){
    return this.httpClient.get<Resultado[]>(`${API_PATH}resultados`).toPromise();
    
  }
    
}
