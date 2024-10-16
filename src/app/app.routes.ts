import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account/account.component';
import { PlayerHomeComponent } from './home/playerHome/player-home/player-home.component';
import { StorytellerHomeComponent } from './home/storytellerHome/storyteller-home/storyteller-home.component';
import { PlayerCampaignsComponent } from './campaigns/playerCampaigns/player-campaigns/player-campaigns.component';
import { StorytellerCampaignsComponent } from './campaigns/storytellerCampaigns/storyteller-campaigns/storyteller-campaigns.component';
import { CharactersComponent } from './characters/characters/characters.component';
import { WorldbuildingComponent } from './worldbuilding/worldbuilding/worldbuilding.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'playerHome', component: PlayerHomeComponent},
    {path: 'storytellerHome', component: StorytellerHomeComponent},
    {path: 'characters', component: CharactersComponent},
    {path: 'worldbuilding', component: WorldbuildingComponent},
    {path: 'playerCampaigns', component: PlayerCampaignsComponent},
    {path: 'storytellerCampaigns', component: StorytellerCampaignsComponent},
    {path: 'account', component: AccountComponent},
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        {
          enableTracing: false, // <-- debugging purposes only
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }