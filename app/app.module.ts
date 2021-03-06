import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }    from '@angular/forms';
import { FoodListComponent} from './food-list.component';
import { AddFood } from './add-food.component';
import { CalPipe } from './cal.pipe';
import { EditFoodComponent } from './edit-food.component'

@NgModule({
  imports: [ BrowserModule,
              FormsModule,],
  declarations: [ AppComponent,
                  FoodListComponent,
                  AddFood,
                  CalPipe,
                  EditFoodComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}
