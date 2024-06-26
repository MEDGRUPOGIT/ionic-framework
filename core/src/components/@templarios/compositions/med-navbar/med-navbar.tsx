import { Component, Element, h, Host, Prop } from '@stencil/core';
import ResizeObserver from "resize-observer-polyfill";
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-navbar',
  styleUrl: 'med-navbar.scss',
  shadow: true,
})
export class MedNavbar {
  @Element() el!: HTMLElement;

  /**
   * todo
   */
 @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop() dsName?: 'secondary' | 'transparent';

  private leftEl!: HTMLDivElement;
  private rightEl!: HTMLDivElement;
  private centerEl!: HTMLDivElement;

  private sidesResizeObserver!: ResizeObserver;

  componentDidLoad() {
    this.setSize();
  }

  disconnectedCallback() {
    if(this.sidesResizeObserver){
      this.sidesResizeObserver.disconnect();
    }
  }

  private setSize() {
    this.sidesResizeObserver = new ResizeObserver((entries: any) => {
      for (let entry of entries) {
        const rightWidth = Number(this.rightEl.getBoundingClientRect().width);
        const leftWidth = Number(this.leftEl.getBoundingClientRect().width);
        const leftDiff = entry.contentRect.width - rightWidth;
        const rightDiff = entry.contentRect.width - leftWidth;

        let marginLeft = 0;
        let marginRight = 0;

        if (rightWidth !== leftWidth) {
          if (entry.target.id === 'left') {
            if (leftDiff > 0) {
              marginRight = leftDiff;
            } else {
              marginLeft = rightDiff - leftDiff;
              if (marginLeft < 0) {
                marginLeft *= -1;
              }
            }
          } else if (entry.target.id === 'right') {
            if (rightDiff > 0) {
              marginLeft = rightDiff;
            } else {
              marginRight = rightDiff - leftDiff;
              if (marginRight < 0) {
                marginRight *= -1;
              }
            }
          }
        }

        this.centerEl.style.setProperty('--padding-left',`${marginLeft}px`);
        this.centerEl.style.setProperty('--padding-right',`${marginRight}px`);
      }
    });

    this.sidesResizeObserver.observe(this.leftEl);
    this.sidesResizeObserver.observe(this.rightEl);
  }

  render() {
    const { dsColor, dsName } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-navbar': true,
          [`med-navbar--${dsName}`]: dsName !== undefined,
        })}>
        <header class="med-navbar__header">
          <slot name="top"></slot>

          <div class="med-navbar__container">
            <div id="left" class="med-navbar__left" ref={(el) => this.leftEl = el as HTMLDivElement}>
              <slot name="left"></slot>
            </div>

            <div class="med-navbar__center" ref={(el) => this.centerEl = el as HTMLDivElement}>
              <slot name="title"></slot>
              <slot name="subtitle"></slot>
            </div>

            <div id="right" class="med-navbar__right" ref={(el) => this.rightEl = el as HTMLDivElement}>
              <slot name="right"></slot>
            </div>
          </div>
        </header>
      </Host>
    );
  }
}
