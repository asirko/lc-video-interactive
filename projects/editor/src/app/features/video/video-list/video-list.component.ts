import { VideoService } from '../video.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lce-video-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoListComponent {
  private readonly videoService = inject(VideoService);

  readonly video$ = this.videoService.getVideos();
}
