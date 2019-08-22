import { Component } from "@angular/core";

@Component({
    //. # gibi css seçiciler ile kullanılabilir div etiketi ile ekele bilir
    //örn .movies  <div class="movies"></div> gibi
    selector: "movies", //<movies></movies>

    templateUrl: "movies.component.html"
    //template: "<h2>MovieS</h2>"   

})

export class MoviesComponent {

}