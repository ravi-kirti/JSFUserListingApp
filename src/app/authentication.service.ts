import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})

// inject the Http instance-service inside Authentication Service
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080/api/validate';

  constructor(private http: HttpClient) {}

  validateByEmail(email, password): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${email}/${password}`);
  }
}
