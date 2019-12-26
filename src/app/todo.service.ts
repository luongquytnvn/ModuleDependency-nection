import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITodo} from './todo';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly API_URL = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getTodos(count = 10): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.API_URL).pipe(
      map(response => response.filter((todo, i) => i < count))
    );
  }
}
