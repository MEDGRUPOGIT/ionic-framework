import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sheet-content-test',
  styleUrl: 'sheet-content-test.scss',
  scoped: true,
})
export class SheetContentTest {
  render() {
    return (
      <Host>
        <ion-header class="tp-sheet-header">
          <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
          </ion-button>
        </ion-header>
        <ion-content class="tp-sheet-content">
          <med-type>Sheet</med-type>
          <med-type>Sheet</med-type>
          <med-type>Sheet</med-type>
        </ion-content>
        <ion-footer class="tp-sheet-footer">
          <ion-button mode="ios" expand="block">button</ion-button>
        </ion-footer>
      </Host>
    );
  }
}
