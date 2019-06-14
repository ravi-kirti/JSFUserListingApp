import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private baseUrl = "http://localhost:8080/api/users";

  constructor(private _http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    // hit the mock json-server and fetch values from there
    console.log("In method---");
    return this._http.get<User[]>(`${this.baseUrl}`);
  }

  // fetch the corresponding user by Id
  getUserById(userid): Observable<User> {
    return this._http.get<User>(`${this.baseUrl}/${userid}`);
  }

  adUser(newUser: User): Observable<User> {
    return this._http.post<User>(`${this.baseUrl}` + `/create`, newUser);
  }

  deleteUser(id): Observable<{}> {
    return this._http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  updateUser(user: User): Observable<User> {
    return this._http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }
}
