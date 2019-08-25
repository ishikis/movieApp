import { Component } from "@angular/core";
import { Movies } from '../movie.datasource';

@Component({
    //. # gibi css seçiciler ile kullanılabilir div etiketi ile ekele bilir
    //örn .movies  <div class="movies"></div> gibi
    selector: "movies", //<movies></movies>

    templateUrl: "movies.component.html",
    // template: `
    //     <h2> 
    //         {{"Title : " + getTitle()}}
    //     </h2>
    //     <div>{{ movie.id }}</div>
    //     <div>{{ movie.name }}</div>
    //     `,

    //css Tanımlamaları alt ve ust componentlere etki etmez
    styles: ['h2 { color :blue;}']

})

export class MoviesComponent {

    title = "Movie List";
    movies = Movies;



}