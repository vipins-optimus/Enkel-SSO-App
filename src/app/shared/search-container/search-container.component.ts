import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CompCommunicationService } from '../comp-communication.service';

@Component({
    selector: 'app-search-container',
    templateUrl: 'search-container.component.html'
})
export class SearchContainerComponent {
    @Input() breadcrumb: string;
    @Input() placeholder: string;
    @Output() doSearch: EventEmitter<string> = new EventEmitter<string>();
    @Output() doSorting: EventEmitter<number> = new EventEmitter<number>();
    search: string;
    sortBy = 0;
    sortByValues = [
        { id: 0, name: 'Name (a-z)' },
        { id: 1, name: 'Name (z-a)' }
    ];

    constructor(private compCommunicationService: CompCommunicationService) {
    }

    onSearch() {
        this.doSearch.emit(this.search);
    }

    onSorting() {
        this.doSorting.emit(this.sortBy);
    }
}
