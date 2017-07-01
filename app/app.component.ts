import { Component, OnInit, Directive } from '@angular/core'; //Import Component and ngOnInit dependenicies
import { AppServices } from './app.services'; // Import AppService 


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [`
            .classTableHead {background-color:	#ffa69f;
                             border: 3px solid #ffb69f}
            .classTableBody {background-color:	#ffe69f;
                             border: 3px solid #ffd69f}
         `]// Two styles are defined, one for the table head and one for the table body
})


export class AppComponent implements OnInit { // Export a class AppComponent 
        cartoons = [{}]; //Declare an array of objects
        parentID:number;
        updateID(ID:number){//Update function
            this.parentID=ID;//Updates the variable parentID with the currently selected ID
            console.log(this.parentID)
        }
        getStyle(ID:number){
            if (ID%2==0) { return '#deff80'}
            else { return 'peach'};
        }
        constructor(private _appServives : AppServices){} //Declare a private variable of the type AppServices
        
        ngOnInit(){
            this.cartoons = this._appServives.getData() //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
        }
       

} 
