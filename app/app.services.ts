import { Injectable } from '@angular/core'; //Import injectable from angular

@Injectable()//Use the decorator for the service
export class AppServices{ //Export a class AppServices
    getData(){ //Define a function getData which returns the array of objects
        return [
            {"id":1,"name":"Angelina Pickles", "DOB":"29-12-1993", "email": "angie@email.com"},
            {"id":2, "name":"Donald Duck", "DOB":"17-06-1934", "email": "donnie@email.com"},
            {"id":3, "name":"Lola Bunny", "DOB":"02-12-1938", "email": "lola@email.com"},
            {"id":4, "name":"Uncle Scrooge", "DOB":"28-11-1912", "email": "uncle@email.com"}
    ]
    }
}
