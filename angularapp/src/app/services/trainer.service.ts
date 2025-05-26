import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  public apiUrl = 'http://<url>:8080';

  constructor(private http: HttpClient) { }

  private getAuthHeaders():HttpHeaders{
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer $ {token}`
    });
  }


  
  //get all trainer
  getAllTrainer(): Observable<Trainer[]>{
    return this.http.get<Trainer[]>(`${this.apiUrl}/api/trainer`,{
      headers: this.getAuthHeaders()
    });
  }

//get trainer by id
  getTrainerById(trainerId:number): Observable<Trainer>{
    return this.http.get<Trainer>(`${this.apiUrl}/api/trainer/${trainerId}`,{
      headers: this.getAuthHeaders()
    });
  }

    //add new trainer 
    addTrainer(trainer:Trainer): Observable<Trainer>{
      return this.http.post<Trainer>(`${this.apiUrl}/api/trainer`,trainer,{
        headers: this.getAuthHeaders()
      });
    }
  
    //update an trainer
    updateTrainer(trainerId:number,trainer:Trainer): Observable<Trainer>{
      return this.http.put<Trainer>(`${this.apiUrl}/api/trainer/${trainerId}`,trainer,{
        headers: this.getAuthHeaders()
      });
    }

    //Delete a trainer
    deleteTrainer(trainerId:number): Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/api/trainer/${trainerId}`,{
        headers: this.getAuthHeaders()
     });
    }

}
