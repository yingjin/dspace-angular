import { Component, Input } from '@angular/core';

import { Item } from '../../../../../core/shared/item.model';
import { ItemPageFieldComponent } from '../item-page-field.component';

@Component({
  selector: 'ds-item-page-ispartof-field',
  templateUrl: '../item-page-field.component.html'
})
/**
 * This component is used for displaying the ispartof (dc.relation.IsPartOf) of an item
 */
export class ItemPageIspartofFieldComponent extends ItemPageFieldComponent {

  /**
   * The item to display metadata for
   */
  @Input() item: Item;

  /**
   * Separator string between multiple values of the metadata fields defined
   * @type {string}
   */
  separator: string;

  /**
   * Fields (schema.element.qualifier) used to render their values.
   * In this component, we want to display values for metadata 'dc.relation.IsPartOf'
   */
  fields: string[] = [
    'dc.relation.IsPartOf'
  ];

  /**
   * Label i18n key for the rendered metadata
   */
  label = 'item.page.ispartof';

  /**
   * Use the {@link MarkdownPipe} to render dc.relation.IsPartOf values
   */
  enableMarkdown = true;
}
