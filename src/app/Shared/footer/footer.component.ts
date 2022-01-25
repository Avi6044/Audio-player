import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { PlayerService } from 'src/app/player.service';
import { CommonMethod } from 'src/app/commonmethod/commonsmethods';
import { ArrayData } from 'src/app/commonmethod/CommonInterface';
import { NgxAudioPlayerModule } from 'ngx-audio-player';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Tag="FooterComponent"


  
  constructor() {


      
    }
  
  

   ngOnInit() {
     
    }

}
