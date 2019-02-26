import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilter } from './search-filter.pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SearchFilter
    ],
    exports: [
        SearchFilter
    ]
})
export class SharedModule { }
