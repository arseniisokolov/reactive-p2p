import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PureLoaderComponent } from './components/pure-loader/pure-loader.component';


@NgModule({
    declarations: [
        PureLoaderComponent
    ],
    exports: [
        PureLoaderComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class LoaderModule { }
