import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ms: MovieService) { }
  movies: Movie[] = [];
  movieLength: number = 0;
  ngOnInit() {
    this.getMovies();
  }
  getMovies(): void {
    this.ms.getMovies().subscribe(x => {
      this.movies = x.slice(0, 5);
      this.movieLength = x.length
    });
  }

}
