import { VideoService } from '../video.service';
import { ChangeDetectionStrategy, Component, HostBinding, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lce-video-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoListComponent {
  private readonly videoService = inject(VideoService);

  @HostBinding('class') readonly cls = 'feature';

  readonly videos$ = this.videoService.videos$;

  deleteVideo(id: number): void {
    this.videoService.deleteVideo(id);
  }

  duplicateVideo(id: number): void {
    this.videoService.duplicateVideo(id);
  }
}
