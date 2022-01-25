import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonMethod } from './commonmethod/commonsmethods';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  tag="PlayerService"
  private playTrackSource = new Subject<string>();
  private pauseTrackSource = new Subject();
  private trackEndedSource = new Subject();
  private  TrackTittle    =new Subject<string>();
  playTrackmusic$ = this.playTrackSource.asObservable();
  pauseTrack$ = this.pauseTrackSource.asObservable();
  trackEnded$ = this.trackEndedSource.asObservable();
  tracktitle$= this.TrackTittle.asObservable();

  playTrack(previewUrl: string) {
   
    this.playTrackSource.next(previewUrl);
  }
  playTrack1Title(tracktitle:string) {
    this.TrackTittle.next(tracktitle);
   
  }

  pauseTrack() {
    this.pauseTrackSource.next();
  }

  trackEnded() {
    this.trackEndedSource.next();
  }
  constructor() { }
}
