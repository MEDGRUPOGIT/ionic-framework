import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  Watch,
  h
} from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { TpMultiSelectDropdownOption } from './utils/multi-select-dropdown.types';

@Component({
  tag: 'tp-multi-select-dropdown',
  styleUrl: 'multi-select-dropdown.scss',
  assetsDirs: ['assets'],
  scoped: true
})
export class TpMultiSelectDropdown {
  @Element() host!: HTMLElement;

  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: MedColor;

  /**
   * Define o valor do componente.
   */
  @Prop({ reflect: true, mutable: true }) value: Array<string | number> = [];

  /**
   * Define as opções de seleção do componente.
   */
  @Prop({ reflect: true }) options: TpMultiSelectDropdownOption[] = [];

  /**
   * Define o placeholder do componente.
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * Define a representação do valor selecionado caso o usuário do componente deseja não utilizar o default.
   */
  @Prop({ reflect: true }) valueLabel?: string;

  /**
   * Define se o componente representa valores numéricos.
   */
  @Prop({ reflect: true }) numeric = false;

  /**
   * Evento emitido quando há mudança no valor do componente.
   */
  @Event() valueChange!: EventEmitter<Array<string | number>>;

  @State() open = false;

  @State() selectedOptions: TpMultiSelectDropdownOption[] = [];

  selectedOptionsMap: Map<string | number, boolean> = new Map();

  @Listen('click', { target: 'window' })
  closeOnOutsideClick(event: MouseEvent) {
    const target = event.target as Node;

    if (this.open && !this.host.contains(target)) {
      this.open = false;
    }
  }

  @Listen('keydown', { target: 'window' })
  closeOnEscapeKey(event: KeyboardEvent) {
    if (this.open && event.key === 'Escape') {
      this.open = false;
    }
  }

  @Watch('value')
  onValueChange() {
    this.selectedOptions = this.getSelectedOptions();
  }

  change(event: CustomEvent) {
    const value = this.numeric
      ? Number(event.detail.value)
      : event.detail.value;
    const updatedValue = this.getUpdatedValue(value, event.detail.checked);

    this.value = updatedValue;
    this.valueChange.emit(updatedValue);
  }

  getUpdatedValue(selectedValue: string | number, checked: boolean) {
    const isIncluded = this.value.includes(selectedValue);

    if (!isIncluded && checked) {
      return [...this.value, selectedValue];
    } else if (isIncluded && !checked) {
      return this.value.filter((optionValue) => optionValue !== selectedValue);
    }

    return [...this.value];
  }

  getSelectedOptions() {
    const selectedOptions = this.options.filter(({ value }) => {
      return this.value.includes(value);
    });

    this.options.forEach(({ value }) => {
      this.selectedOptionsMap.set(value, false);
    });

    selectedOptions.forEach(({ value }) => {
      this.selectedOptionsMap.set(value, true);
    });

    return selectedOptions;
  }

  componentWillLoad() {
    this.selectedOptions = this.getSelectedOptions();
  }

  render() {
    const {
      color,
      options,
      placeholder,
      valueLabel,
      open,
      selectedOptions,
      selectedOptionsMap
    } = this;

    return (
      <Host
        class={generateMedColor(color, {
          'tp-multi-select-dropdown': true,
          'tp-multi-select-dropdown--open': open
        })}
      >
        <div class='tp-multi-select-dropdown__container'>
          <div
            class='tp-multi-select-dropdown__header'
            onClick={() => (this.open = !this.open)}
          >
            <div class='tp-multi-select-dropdown__header-content'>
              <div class='tp-multi-select-dropdown__left'>
                <ion-label
                  class={{
                    'tp-multi-select-dropdown__label': true,
                    'tp-multi-select-dropdown__label--placeholder':
                      !selectedOptions.length
                  }}
                  // @ts-ignore
                  token='p14'
                >
                  {selectedOptions.length
                    ? valueLabel
                      ? valueLabel
                      : selectedOptions.map(({ label }) => label).join(', ')
                    : placeholder}
                </ion-label>
              </div>
            </div>

            <div class='tp-multi-select-dropdown__arrow'>
              <ion-icon class='med-icon' name='med-baixo'></ion-icon>
            </div>
          </div>

          <ion-accordion-group
            class={{
              'tp-multi-select-dropdown__accordion-group': true,
              'tp-multi-select-dropdown__accordion-group--open': open
            }}
            value={open ? 'open' : null}
          >
            <ion-accordion
              class='tp-multi-select-dropdown__accordion'
              value='open'
            >
              <div
                slot='content'
                class='tp-multi-select-dropdown__options tp-scroll'
                no-styling-content
              >
                {options.map(({ value: optionValue, label }) => (
                  <ion-item
                    class='tp-multi-select-dropdown__option'
                    mode='ios'
                    //  @ts-ignore
                    gap='s16'
                    spacing-v='s08'
                    spacing-h='s12'
                  >
                    <ion-checkbox
                      mode='md'
                      slot='start'
                      checked={selectedOptionsMap.get(optionValue)}
                      value={optionValue as string}
                      onIonChange={this.change.bind(this)}
                    ></ion-checkbox>

                    <ion-label
                      class='tp-multi-select-dropdown__label'
                      //  @ts-ignore
                      token='p14'
                      ds-color='neutral-10'
                    >
                      {label}
                    </ion-label>
                  </ion-item>
                ))}
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </div>
      </Host>
    );
  }
}
