import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  public apiUrl = 'http://<url>:8080';

  constructor(private http: HttpClient) { }

  private getAuthHeaders():HttpHeaders{
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer $ {token}`
    });
  }


//Send Feedback
sendFeedback(feedback:Feedback): Observable<Feedback>{
  return this.http.post<Feedback>(`${this.apiUrl}/api/feedback`,feedback,{
    headers: this.getAuthHeaders()
  });
}

//Get Feedback by User Id
getAllFeedbackByUserId(userId:number): Observable<Feedback[]>{
  return this.http.get<Feedback[]>(`${this.apiUrl}/api/feedback/user/${userId}`,{
    headers: this.getAuthHeaders()
  });
}

//Delete Feedback
deleteFeedback(feedbackId:number): Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/api/feedback/${feedbackId}`,{
    headers: this.getAuthHeaders()
  });
}

//Get all Feedback
getFeedbacks(): Observable<Feedback[]>{
  return this.http.get<Feedback[]>(`${this.apiUrl}/api/feedback`,{
    headers: this.getAuthHeaders()
  });
}
}