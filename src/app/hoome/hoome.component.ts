import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Track } from 'ngx-audio-player'; 
import { PlayerService } from '../player.service';
import { CommonMethod } from '../commonmethod/commonsmethods';

@Component({
  selector: 'app-hoome',
  templateUrl: './hoome.component.html',
  styleUrls: ['./hoome.component.css']
})
export class HoomeComponent implements OnInit {

  animal: string;
  name: string;
  tag="HoomeComponent"
  // phone_number:any;
//   msaapDisplayTitle = true;
//   msaapDisplayPlayList = true;
//   msaapPageSizeOptions = false;
//   msaapDisplayVolumeControls = true;
msbapTitle = 'Audio Title';
msbapAudioUrl = '/assets/music/Struggler - R Nait (DjPunjab.Com).mp3';     
msbapDisplayTitle = true; 
msbapDisplayVolumeControls = true;
  msaapPlaylist: Track[] = [
    {
        title: 'Struggler',
        link: '/assets/music/Struggler - R Nait (DjPunjab.Com).mp3'
    },
    {
        title: 'Paap',
        link: '/assets/music/Paap - Kulwinder Billa (DjPunjab.Com).mp3'
       
    },
    {
        title: 'Khanjar 2',
        link: '/assets/music/Khanjar 2 - Masha Ali (DjPunjab.Com).mp3'
       
    },
    {
        title: 'Testing Audio ',
        link: 'https://www.kozco.com/tech/organfinale.mp3'
       
    }
];
playerRef
player: any;
mytrack:Array<any>






constructor(private playerSer: PlayerService) {
    this.mytrack=[]
    this.mytrack.push( {
        title: 'Struggler',
        link: '/assets/music/Struggler - R Nait (DjPunjab.Com).mp3'
    },
    {
        title: 'Paap',
        link: '/assets/music/Paap - Kulwinder Billa (DjPunjab.Com).mp3'
       
    },
    {
        title: 'Khanjar 2',
        link: '/assets/music/Khanjar 2 - Masha Ali (DjPunjab.Com).mp3'
       
    },
    {
        title: 'Testing Audio ',
        link: 'https://www.kozco.com/tech/organfinale.mp3'
       
    },
    {
        title: 'Testing Audio 2 ',
        link: 'https://www.kozco.com/tech/32.mp3'
       
    },
    
    )

  
    
  }






  phone_number:any
  ngOnInit() {
  }
  playTrack(track:string,title:string) {
      CommonMethod.showconsole(this.tag,'working')
    this.playerSer.playTrack(track);
    this.playerSer.playTrack1Title(title)
    // var audio =document.getElementById('myplayer') as HTMLAudioElement
    // CommonMethod.showconsole(this.tag,'Duration home comp :- '+audio.duration)
  }
}
