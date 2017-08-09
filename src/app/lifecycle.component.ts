import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: 'lifecycle.component.html'
})

export class LifeCycleComponent {
	constructor() {

	}

	ngOnInit(): void { console.log('Inicializando') }
	ngOnChanges(): void { console.log('Cambiando??') }
}