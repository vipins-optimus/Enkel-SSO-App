import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchFilter } from './search-filter.pipe';
import { SearchContainerComponent } from './search-container/search-container.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        SearchFilter,
        SearchContainerComponent
    ],
    exports: [
        SearchFilter,
        SearchContainerComponent
    ]
})
export class SharedModule { }
