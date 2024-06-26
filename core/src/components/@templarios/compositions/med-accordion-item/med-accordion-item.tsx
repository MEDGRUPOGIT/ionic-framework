import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

/**
  * @slot header - Define o conteúdo do header do componente.
  * @slot button - Se houver botões no componente eles devem ser inseridos nesse slot.
  * @slot content - Define o conteúdo do componente.
  * @slot auxiliar - Define o conteúdo auxiliar do componente.
  * @slot progress - Slot destinado a progress-bar.
  */
@Component({
  tag: 'med-accordion-item',
  styleUrl: 'med-accordion-item.scss',
  shadow: true,
})
export class MedAccordionItem implements ComponentInterface {
  @Element() hostElement!: any;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) noBorder = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) background = false;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) canCollapse = true;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) isOpened = false;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) slotsToggle: 'start' | 'middle' | 'end'[] = [];

  /**
   * todo
   */
  @Event() toggle!: EventEmitter;

  /**
   * todo
   */
  @Event() opened!: EventEmitter;

  /**
   * todo
   */
  @Event() medClick!: EventEmitter;

  /**
   * todo
   */
  @State() isOpen = false;

  @Watch('isOpened')
  watchPropHandler(newValue: boolean) {
    if (newValue !== this.isOpen) { }
    this.toggleOpen();
  }

  componentDidLoad() {
    if (this.isOpened) {
      this.toggleOpen();
    }
  }

  private content!: HTMLDivElement;

  private header!: HTMLDivElement;

  private isTransitioning = false;

  private onClick = (slot: any) => {
    if (!this.canCollapse) {
      return
    }
    if (!this.slotsToggle.length || this.slotsToggle.indexOf(slot) >= 0) {
      this.toggleOpen();
    }
  }

  private toggleOpen() {
    if (this.isTransitioning) {
      return;
    }

    this.isOpen = !this.isOpen;
    this.opened.emit(this.isOpen);
    this.isTransitioning = true;

    this.toggle.emit({
      element: this.hostElement,
      content: this.content,
      header: this.header,
      shouldOpen: this.isOpen,
      startTransition: () => {
        this.isTransitioning = true;
      },
      endTransition: () => {
        this.isTransitioning = false;
      },
      setClosed: () => {
        this.isOpen = false;
        this.opened.emit(this.isOpen);
      },
    });
  }

  private onHeaderClick() {
    this.medClick.emit();
  }

  render() {
    const { dsColor, noBorder, isOpen, background } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-accordion-item': true,
          'med-accordion-item--no-border': noBorder,
          'med-accordion-item--open': isOpen,
          'med-accordion-item--background': background,
        })}>
        <div class="med-accordion-item__header" onClick={() => this.onHeaderClick()} ref={(el) => this.header = el as HTMLDivElement}>
          <div class="med-accordion-item__header-container">

            <div class="header-container__start" onClick={() => this.onClick('start')}>
              <slot name="start"></slot>
            </div>

            <div class="header-container__middle" onClick={() => this.onClick('middle')}>
              <slot name="middle"></slot>
            </div>

            <div class="header-container__end" onClick={() => this.onClick('end')}>
              <slot name="end"></slot>
            </div>

          </div>

          <div>
            <slot name="auxiliar"></slot>
          </div>

          <div onClick={() => this.onClick('middle')}>
            <slot name="full-header"></slot>
          </div>
        </div>

        <div class="med-accordion-item__content" ref={(el) => this.content = el as HTMLDivElement}>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

}
