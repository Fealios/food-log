import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }    from '@angular/forms';
import { FoodListComponent} from './food-list.component';
import { AddFood } from './add-food.component';
import { CalPipe } from './cal.pipe';

@NgModule({
  imports: [ BrowserModule,
              FormsModule,],
  declarations: [ AppComponent,
                  FoodListComponent,
                  AddFood,
                  CalPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}
