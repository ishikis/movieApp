import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private ms: MovieService,
    private root: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    
    const id = +this.root.snapshot.paramMap.get('id');
    this.ms.getMovie(id).subscribe(x => this.movie = x);
  }

}
