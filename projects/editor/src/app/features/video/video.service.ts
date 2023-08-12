import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoInteractive } from '@shared';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private readonly http = inject(HttpClient);

  public getVideos(): Observable<VideoInteractive[]> {
    return this.http.get<VideoInteractive[]>('/assets/data/videos.json');
  }
}
