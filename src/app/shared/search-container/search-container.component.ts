import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-container',
    templateUrl: 'search-container.component.html'
})
export class SearchContainerComponent {
    @Input() breadcrumb: string;
    @Input() placeholder: string;
    @Output() doSearchChange: EventEmitter<string> = new EventEmitter<string>();
    search: string;

    constructor() {
    }

    onSearch() {
        this.doSearchChange.emit(this.search);
    }
}
