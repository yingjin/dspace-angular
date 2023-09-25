import {Component, Input} from '@angular/core';
import {
  FileDownloadLinkComponent as BaseComponent
} from '../../../../../app/shared/file-download-link/file-download-link.component';
import {combineLatest as observableCombineLatest, Observable, of as observableOf} from 'rxjs';
import {Bitstream} from '../../../../../app/core/shared/bitstream.model';
import {Item} from '../../../../../app/core/shared/item.model';
// import {AuthorizationDataService} from "../../../../../app/core/data/feature-authorization/authorization-data.service";
// import {FeatureID} from "../../../../../app/core/data/feature-authorization/feature-id";
// import {hasValue, isNotEmpty} from "../../../../../app/shared/empty.util";
import {map} from 'rxjs/operators';
// import {getBitstreamDownloadRoute, getBitstreamRequestACopyRoute} from "../../../../../app/app-routing-paths";

@Component({
  selector: 'ds-file-download-link',
  // templateUrl: './file-download-link.component.html',
  templateUrl: '../../../../../app/shared/file-download-link/file-download-link.component.html',
  // styleUrls: ['./file-download-link.component.scss'],
  styleUrls: ['../../../../../app/shared/file-download-link/file-download-link.component.scss'],
})
export class FileDownloadLinkComponent extends BaseComponent {
  /**
   * Optional bitstream instead of href and file name
   */
  @Input() bitstream: Bitstream;

  @Input() item: Item;

  /**
   * Additional css classes to apply to link
   */
  @Input() cssClasses = '';

  /**
   * A boolean representing if link is shown in same tab or in a new one.
   */
  @Input() isBlank = false;

  @Input() enableRequestACopy = false;

  bitstreamPath$: Observable<{
    routerLink: string,
    queryParams: any,
  }>;

  canDownload$: Observable<boolean>;

  ngOnInit() {
    this.canDownload$ = observableOf(false);
    const canRequestACopy$ = observableOf(false);
    this.bitstreamPath$ = observableCombineLatest([this.canDownload$, canRequestACopy$]).pipe(
      map(([canDownload, canRequestACopy]) => this.getBitstreamPath(canDownload, canRequestACopy))
    );
  }

}
