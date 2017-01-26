import { APP_SETTINGS, SETTINGS } from './common/settings/index';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { ScoreboardComponent, DashboardComponent } from './dashboard';
import {
    CommunityFilterPipe,
    CommunityDetailsComponent,
    CommunityComponent,
    CommunityService,
    CommunityLabelPipe
} from './community';
import {
    ArtifactLabelPipe,
    ArtifactFilterPipe,
    ArtifactStatusPipe,
    ArtifactTypePipe,
    ArtifactDetailsComponent,
    ArtifactService,
    ArtifactboardComponent,
    ArtifactPieComponent,
    ArtifactComponent
} from './artifact';
import { NavigationComponent } from './common/components';
import { ConfigurationService, LoggingService } from './common/services';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        DashboardComponent,
        ScoreboardComponent,
        ArtifactboardComponent,
        CommunityComponent,
        CommunityFilterPipe,
        ArtifactComponent,
        ArtifactFilterPipe,
        ArtifactStatusPipe,
        ArtifactTypePipe,
        ArtifactLabelPipe,
        CommunityLabelPipe,
        ArtifactPieComponent,
        NavigationComponent,
        CommunityDetailsComponent,
        ArtifactDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ChartModule
    ],

    providers: [
        ConfigurationService,
        { provide: APP_SETTINGS, useValue: SETTINGS },
        CommunityService,
        ArtifactService,
        LoggingService
    ]
})
export class AppModule { }
