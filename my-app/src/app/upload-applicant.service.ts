import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UploadApplicantService {

  constructor(
    private userService: UserService,
    private http: HttpClient) { }

  addApplicant(data) {
    return this.http.post(`${environment.apiUrl}/api/add-applicants`, data,  { headers: this.userService.getAuthorizationHeader() });
  }
}
