import { Component, OnInit, Directive, Input } from '@angular/core'; //Import Component and ngOnInit dependenicies
import { AppServices } from './app.services'; // Import AppService 


@Component({
  selector: 'show-details',
  templateUrl: 'app/details.component.html',
  styles: [`
            .classTableHead {background-color:	#ffa69f;
                             border: 3px solid #ffb69f}
            .classTableBody {background-color:	#ffe69f;
                             border: 3px solid #ffd69f}
         `]// Two styles are defined, one for the table head and one for the table body
})


export class DetailsComponent implements OnInit { // Export a class AppComponent 
        cartoons = [{}]; //Declare an array of objects
        @Input() childID:number;//Input parameter recived from the parent component
        constructor(private _appServives : AppServices){} //Declare a private variable of the type AppServices
        
        ngOnInit(){
            this.cartoons = this._appServives.getData() //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
        }


} 
