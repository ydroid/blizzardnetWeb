import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from './player.service';
import { SubSink } from 'subsink';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {
  loading = true;
  subs = new SubSink();
  name: string;
  player: any;
  equipemt: any;
  stats: any;
  talentos: any;
  profesiones: any;
  secondaryProfessions: any;
  iClassic: any;
  iBurnning:any;
  iLk:any;
  constructor(private title: Title, private meta: Meta, private playerService: PlayerService,private route: ActivatedRoute) { }

  getItem(slot) {
    return this.equipemt.find(a => a.slot ==slot);
  }

  getTeam(team) {
    return this.player?.pvpteams.find(a => a.type == team);
  }

  getBackground(){
    const back = "background: url('/assets/images/equipment-overview.png') 100% 100%, url('/assets/images/" + this.player?.racemask+"-"+this.player?.gender+".jpg') 50% 100%";
    return back;
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if(param.name) {
        this.name = param.name;
        this.title.setTitle(param.name +' - BlizzardNet Guild')
        this.loading = true;
        this.playerService.getAlgo(this.name).subscribe(data => {
          if(data) {
            this.player = data;
            this.equipemt = this.player?.equipment;
            this.stats = this.player?.stats;
            this.talentos = this.player?.talents;
            this.profesiones = this.player?.professions;
            this.secondaryProfessions = this.player?.secondaryProfessions;
            this.iClassic = this.player?.dungeons.classic;
            this.iBurnning = this.player?.dungeons.burnning;
            this.iLk = this.player?.dungeons.lk;
            this.meta.addTags([
              { name: 'twitter:card', content: 'summary' },
              { name: 'og:url', content: 'https://blizzardnet.herokuapp.com/player/' + param.name },
              { name: 'og:title', content: param.name +' - BlizzardNet Guild' },
              { name: 'og:description', content: this.player?.level + " " + this.player?.race + " " +this.player?.class },
              { name: 'og:image', content: "https://blizzardnet.herokuapp.com/assets/icons/races/" + this.player?.racemask+"-"+this.player?.gender.toLowerCase()+".png" },
            ]);
            console.log(this.player);
            this.loading = false;
          }
        });
      }
    })
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
