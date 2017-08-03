import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { RecipeSelector,RecipeLikeNameFilter } from './app.selector';

@NgModule({
  declarations: [
    RecipeSelector,
    RecipeLikeNameFilter
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RecipeSelector]
})
export class AppModule { }



