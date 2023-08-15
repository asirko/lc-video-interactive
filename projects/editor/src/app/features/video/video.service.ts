import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { VideoInteractive } from '@shared';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private readonly http = inject(HttpClient);

  private _videos$: BehaviorSubject<VideoInteractive[] | null> | undefined;

  get videos$(): Observable<VideoInteractive[]> {
    if (!this._videos$) {
      this._videos$ = new BehaviorSubject<VideoInteractive[] | null>(null);
      if (localStorage.getItem('videos')) {
        this._videos$.next(JSON.parse(localStorage.getItem('videos')!) as VideoInteractive[]);
      } else {
        this.http.get<VideoInteractive[]>('/assets/data/videos.json').subscribe(videos => {
          localStorage.setItem('videos', JSON.stringify(videos));
          this._videos$!.next(videos);
        });
      }
    }
    return this._videos$.asObservable().pipe(filter(videos => videos !== null)) as Observable<VideoInteractive[]>;
  }

  deleteVideo(id: number): void {
    const videos = this._videos$!.value!;
    const index = videos.findIndex(video => video.id === id);
    if (index !== -1) {
      videos.splice(index, 1);
      localStorage.setItem('videos', JSON.stringify(videos));
      this._videos$!.next(videos);
    }
  }

  duplicateVideo(id: number): void {
    const videos = this._videos$!.value!;
    const index = videos.findIndex(video => video.id === id);
    if (index !== -1) {
      const newVideo = { ...videos[index] };
      newVideo.id = videos.reduce((max, video) => Math.max(max, video.id), 0) + 1;
      videos.push(newVideo);
      localStorage.setItem('videos', JSON.stringify(videos));
      this._videos$!.next(videos);
    }
  }
}
