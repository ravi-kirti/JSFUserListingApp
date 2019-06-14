import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})

// inject the Http instance-service inside Authentication Service
export class AuthenticationService {
  private baseUrl = "http://localhost:8080/api/validate";

  constructor(private _http: HttpClient) {}

  validateByEmail(email, password): Observable<User> {
    // API call via json-server (db.json)
    // mock server API call
    //console.log("Inside Auth service" + email + "---" + password);
    return this._http.get<User>(`${this.baseUrl}/${email}/${password}`);
  }
}
