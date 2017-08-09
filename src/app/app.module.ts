import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroComponent }        from './hero.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroService }          from './hero.service';
import { LifeCycleComponent }   from './lifecycle.component';


@NgModule({
    declarations: [
        AppComponent,
        LifeCycleComponent,
        HeroDetailComponent,
        HeroComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [HeroService],
    bootstrap: [LifeCycleComponent]
    // bootstrap: [AppComponent]
})

export class AppModule {}