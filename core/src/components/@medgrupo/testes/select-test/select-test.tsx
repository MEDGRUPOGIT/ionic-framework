import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'select-test',
  styleUrl: 'select-test.scss',
  shadow: true,
})
export class SelectTest {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
