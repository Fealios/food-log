import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }    from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { newKeg } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import {PintPipe} from './pint.pipe';

@NgModule({
  imports: [ BrowserModule,
              FormsModule],
  declarations: [ AppComponent,
                  KegListComponent,
                  EditKegComponent,
                  newKeg,
                  PintPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}
