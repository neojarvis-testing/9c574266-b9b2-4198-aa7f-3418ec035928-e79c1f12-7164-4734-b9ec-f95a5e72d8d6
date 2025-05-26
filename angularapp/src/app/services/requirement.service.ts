import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from '../models/requirement.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  public apiUrl = 'http://<url>:8080';

  constructor(private http: HttpClient) { }

  private getAuthHeaders():HttpHeaders{
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer $ {token}`
    });
  }

  //get all requirements
  getAllRequirements(): Observable<Requirement[]>{
    return this.http.get<Requirement[]>(`${this.apiUrl}/api/requirement`,{
      headers: this.getAuthHeaders()
    });
  }

//get requirement by id
  getRequirementById(requirementId:number): Observable<Requirement>{
    return this.http.get<Requirement>(`${this.apiUrl}/api/requirement/${requirementId}`,{
      headers: this.getAuthHeaders()
    });
  }

  //add new requirement 
  addRequirement(requirement:Requirement): Observable<Requirement>{
    return this.http.post<Requirement>(`${this.apiUrl}/api/requirement`,requirement,{
      headers: this.getAuthHeaders()
    });
  }

  //update an existing requirement
  updateRequirement(requirementId:number,requirement:Requirement): Observable<Requirement>{
    return this.http.put<Requirement>(`${this.apiUrl}/api/requirement/${requirementId}`,requirement,{
      headers: this.getAuthHeaders()
    });
  }

  //get requirement by trainer id
  getRequirementByTrainerId(trainerId:number): Observable<Requirement[]>{
    return this.http.get<Requirement[]>(`${this.apiUrl}/api/requirement/${trainerId}`,{
      headers: this.getAuthHeaders()
    });
  }

  
//Delete a requirement
deleteRequirement(requirementId:number): Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/api/requirement/${requirementId}`,{
    headers: this.getAuthHeaders()
  });
}
}
