import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressBarModule
} from '@angular/material';


@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatTabsModule,
        MatProgressBarModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatTabsModule,
        MatProgressBarModule
    ]
})
export class MaterialModule { }