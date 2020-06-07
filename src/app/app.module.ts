import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Graph2DComponent } from './graph2-d/graph2-d.component';
import { IndexBlockComponent } from './index-block/index-block.component';

@NgModule({
  declarations: [
    AppComponent,
    Graph2DComponent,
    IndexBlockComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
