import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';
import { MedColor } from '../../@templarios/types/color.type';
import { getIonMode } from '../../global/ionic-global';
import { Color, TabBarChangedEventDetail, TabBarResizeEventDetail } from '../../interface';
import { generateMedColor } from '../../@templarios/utilities/color';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-tab-bar',
  styleUrls: {
    ios: 'tab-bar.md.scss',
    md: 'tab-bar.md.scss'
  },
  shadow: true
})
export class TabBar implements ComponentInterface {
  private keyboardWillShowHandler?: () => void;
  private keyboardWillHideHandler?: () => void;

  private hostHeight = 0;
  private hostResizeObserver!: ResizeObserver;

  @Element() el!: HTMLElement;

  /**
   * TODO
   */
  @Event() medResize!: EventEmitter<TabBarResizeEventDetail>;

  @State() gap!: string;

  @State() keyboardVisible = false;

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * The selected tab component
   */
  @Prop() selectedTab?: string;
  @Watch('selectedTab')
  selectedTabChanged() {
    if (this.selectedTab !== undefined) {
      this.ionTabBarChanged.emit({
        tab: this.selectedTab
      });
    }
  }

  /**
   * If `true`, the tab bar will be translucent.
   * Only applies when the mode is `"ios"` and the device supports
   * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
   */
  @Prop() translucent = false;

  /** @internal */
  @Event() ionTabBarChanged!: EventEmitter<TabBarChangedEventDetail>;

  componentWillLoad() {
    this.selectedTabChanged();
    this.setSize();
  }

  connectedCallback() {
    this.updateGap();

    if (typeof (window as any) !== 'undefined') {
      this.keyboardWillShowHandler = () => {
        if (this.el.getAttribute('slot') !== 'top') {
          this.keyboardVisible = true;
        }
      }

      this.keyboardWillHideHandler = () => {
        setTimeout(() => this.keyboardVisible = false, 50);
      }

      window.addEventListener('keyboardWillShow', this.keyboardWillShowHandler!);
      window.addEventListener('keyboardWillHide', this.keyboardWillHideHandler!);
    }
  }

  disconnectedCallback() {
    if (typeof (window as any) !== 'undefined') {
      window.removeEventListener('keyboardWillShow', this.keyboardWillShowHandler!);
      window.removeEventListener('keyboardWillHide', this.keyboardWillHideHandler!);

      this.keyboardWillShowHandler = this.keyboardWillHideHandler = undefined;
    }
  }

  /**
  * Med Resize
  */
  private updateGap() {
    let gap = '2px';

    if(this.el.children.length <= 3) {
      gap = '8px';
    }

    if(this.el.children.length === 4) {
      gap = '4px';
    }

    this.gap = gap;
  }

  private setSize() {
    this.medResize.emit({height:1})
    this.hostResizeObserver = new ResizeObserver(() => {
      let newHostHeight = Number(this.el.getBoundingClientRect().height);

      if (newHostHeight !== this.hostHeight) {
        this.medResize.emit({ height: newHostHeight });
        this.hostHeight = newHostHeight;
      }
    });

    this.hostResizeObserver.observe(this.el);
  }

  render() {
    const { dsColor, translucent, keyboardVisible } = this;
    const mode = getIonMode(this);

    this.medResize.emit({height:1});

    return (
      <Host
        from-stencil
        role="tablist"
        aria-hidden={keyboardVisible ? 'true' : null}
        style={{ '--gap': `${this.gap}` }}
        class={generateMedColor(dsColor, {
          [mode]: true,
          'tab-bar-translucent': translucent,
          'tab-bar-hidden': keyboardVisible,
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
