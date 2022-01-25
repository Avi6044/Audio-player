import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayerService } from 'src/app/player.service';
import { CommonMethod } from 'src/app/commonmethod/commonsmethods';
import * as $ from 'jquery';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
Tag="PlayerComponent"
showplayer=false
  @ViewChild('player',{static: true})
  playerRef:ElementRef<any>;
  @ViewChild('volume',{static: true})
  myvalume:ElementRef<any>;
  player;
   length:any
   currenttimenew:any
   songtitle:string
   isplaymusic=false
   totallengthtrack:any
   volumerange:number=1
   disable=true
  
  constructor(public playerSer: PlayerService) {
    this.songtitle=" Song Title"
    this.isplaymusic=false
    this.currenttimenew="00:00"
    this.totallengthtrack="00:00"

    console.log('working constructor')
  
    playerSer.playTrackmusic$.subscribe(previewUrl => {
      CommonMethod.showconsole(this.Tag, "Player COmponent cons : "+previewUrl)
      
    
      this.playTrack(previewUrl);
     
     
    });
    playerSer.tracktitle$.subscribe(title => {
      this.playTrackTitle(title);
      this.songtitle=title
    });

  }

  ngOnInit() {
    this.player = this.playerRef.nativeElement; 
    this.player.addEventListener("timeupdate", ()=>{
      this.totallengthtrack =this.calculateCurrentValue(this.player.duration)
      this.currenttimenew= this.calculateCurrentValue(this.player.currentTime)


      var progressbar = document.getElementById('seek-obj') as HTMLProgressElement;
      // progressbar.value=0
      let myprogressduration=0
      myprogressduration=this.player.currentTime / this.player.duration;
      progressbar.value = myprogressduration
      // CommonMethod.showconsole(this.Tag,'alue of process:- '+progressbar.value)
    
      progressbar.addEventListener("click", seek.bind(this));
    
      function seek(event) {
        var percent = event.offsetX / progressbar.offsetWidth;
        CommonMethod.showconsole(this.Tag,'Percentage Value of :- '+percent)
        this.player.currentTime=percent *this.player.duration
        progressbar.value = percent / 100;
        CommonMethod.showconsole(this.Tag,'Value of progress bar on click:- '+ progressbar.value)
        CommonMethod.showconsole(this.Tag,'Value of progress bar on click:- '+ this.player.currentTime)
      }
      });

  }
 


  playTrack(previewUrl) {
    this.showplayer=true
    
    CommonMethod.showconsole(this.Tag,'Src file sdfsd :- '+previewUrl)
    this.player.src = previewUrl;
    this.player.play();
    this.player.onLoadMetaData;
    this.isplaymusic=true;
    (document.getElementById('playsongsicon') as HTMLButtonElement).className="fa fa-pause";
    document.getElementById('myimage').classList.add("roationimage")
    document.getElementById('mysongtitle').classList.add('songtitlehead')
   


  }
  playTrackTitle(title){
    CommonMethod.showconsole(this.Tag,'Title of Sogns:- '+title)
  }



  songsPlay(){
  
    if(this.isplaymusic == true)
    {
     
  
      CommonMethod.showconsole(this.Tag,'Working');
   
      (document.getElementById('playsongsicon') as HTMLButtonElement).className="fa fa-play";
      document.getElementById('mysongtitle').classList.remove('songtitlehead')
      document.getElementById('myimage').classList.remove("roationimage")
      this.player.pause()
      this.isplaymusic=false
    }
    else{
    
        (document.getElementById('playsongsicon') as HTMLButtonElement).className="fa fa-pause";
        this.player.play()
        document.getElementById('mysongtitle').classList.add('songtitlehead')
        document.getElementById('myimage').classList.add("roationimage")
        this.isplaymusic=true
    }
   
  }
  calculateTotalValue(length) {
    var minutes = Math.floor(length / 60),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString(),
      seconds = seconds_str.substr(0, 2),
      time = minutes + ':' + seconds
    return time;
  }

  calculateCurrentValue(currentTime) {
     var minutes = Math.floor(currentTime / 60) %60,
        seconds_int = currentTime - minutes * 60,
        current_seconds_long = currentTime % 60,
        current_seconds:any = current_seconds_long.toFixed(),
        current_time = (minutes < 10 ? "0" + minutes : minutes) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
    return current_time;
  }
  
  pauseTrack() {
    this.player.pause();
  }

  playerEnded() {
    this.playerSer.trackEnded();
    (document.getElementById('playsongsicon') as HTMLButtonElement).className="fa fa-play";
    document.getElementById('mysongtitle').classList.remove('songtitlehead')
    document.getElementById('myimage').classList.remove("roationimage")
    this.player.pause()
    this.isplaymusic=false
  }

 change_vol(event){
  CommonMethod.showconsole(this.Tag,"Volume of player:- "+this.player.volume)
  CommonMethod.showconsole(this.Tag,"volume value sliderL:- "+event.value)
 this.player.volume=event.value;
 this.volumerange=event.value
 if (event.value == 0) {
  this.player.muted = true;
  (document.getElementById('volumebuttonicn') as HTMLButtonElement).className="fa fa-volume-off";
} else {
  this.player.muted = false;
  (document.getElementById('volumebuttonicn') as HTMLButtonElement).className="fa fa-volume-up";
}

}
volumeMute(){
  if (this.player.muted) {
    this.player.muted = false;
    // volumeRange.value = audio.volume
    this.volumerange=this.player.volume;
  CommonMethod.showconsole(this.Tag,'Value:- '+this.volumerange);
    (document.getElementById('volumebuttonicn') as HTMLButtonElement).className="fa fa-volume-up";
}
else {
    this.player.muted = true;
    // volumeRange.value = 0;
    this.volumerange=0;
    (document.getElementById('volumebuttonicn') as HTMLButtonElement).className="fa fa-volume-off";
    // CommonMethod.showconsole(this.Tag,'Value:- '+JSON.stringify(this.volumerange));
    // document.getElementById('volume') as=0


  }
}

}
