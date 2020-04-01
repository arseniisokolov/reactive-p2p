import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TosterComponent } from "./components/toster/toster.component";

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [
        TosterComponent
    ],
    exports: [
        TosterComponent
    ]
})
export class ModalsModule {

}