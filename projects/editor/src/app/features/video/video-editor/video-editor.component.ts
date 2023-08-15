import { Component, HostBinding, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { Interaction } from '@shared';

@Component({
  selector: 'lce-video-editor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.scss'],
})
export default class VideoEditorComponent {
  private readonly fb = inject(FormBuilder);

  @HostBinding('class') readonly cls = 'feature';

  @Input('id') videoId?: number;

  readonly form = this.fb.nonNullable.group({
    src: '',
    name: '',
    id: '',
    duration: '',
    interactions: this.fb.array([] as FormControl<Interaction>[]),
  });

  selectVideo() {}
}
