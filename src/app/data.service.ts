import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './user/profile';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private http: HttpClient,
  ) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('/api/profiles');
  }

  getProfilebyId(id: string): Observable<Profile> {
    return this.http.get<
    Profile>(`/api/profiles/${id}`);
  }

  deleteProfile(id: number): Observable<any> {
    return this.http.delete(`/api/profiles/${id}`);
  }

  createProfile(id: any, username: string,
                firstName: string, lastName: string,
                email: string): Observable<Profile> {
    return this.http.post<Profile>(
      `/api/profiles`,
      {id, username, firstName, lastName, email},
      httpOptions,
    );
  }

  editProfile(id: any, username: string,
              firstName: string, lastName: string,
              email: string): Observable<Profile> {
    return this.http.post<Profile>(
      `/api/profiles/${id}`,
      {id, username, firstName, lastName, email},
      httpOptions,
    );
  }
}
