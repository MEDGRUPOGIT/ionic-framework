import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  h,
} from "@stencil/core";
import { TpSelectDropdownOption } from "./utils/select-dropdown.types";
import { generateMedColor } from "../../../../@templarios/utilities/color";
import { MedColor } from "../../../../@templarios/types/color.type";

@Component({
  tag: "tp-select-dropdown",
  styleUrl: "select-dropdown.scss",
  assetsDirs: ["assets"],
  scoped: true,
})
export class TpSelectDropdown {
  @Element() host!: HTMLElement;

  /**
   * Define a variação de cor do componente.
   */
  @Prop({ reflect: true }) color?: MedColor;

  /**
   * Define o nome do componente, agrupando as opções.
   */
  @Prop({ reflect: true }) name!: string;

  /**
   * Define o valor do componente.
   */
  @Prop({ reflect: true, mutable: true }) value: string | number | null = null;

  /**
   * Define as opções de seleção do componente.
   */
  @Prop({ reflect: true }) options: TpSelectDropdownOption[] = [];

  /**
   * Define o placeholder do componente.
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * Define se o componente representa valores numéricos.
   */
  @Prop({ reflect: true }) numeric = false;

  /**
   * Evento emitido quando há mudança no valor do componente.
   */
  @Event() valueChange!: EventEmitter<string | number>;

  @State() open = false;

  @State() selectedOption: TpSelectDropdownOption | null = null;

  @Listen("click", { target: "window" })
  closeOnOutsideClick(event: MouseEvent) {
    const target = event.target as Node;

    if (this.open && !this.host.contains(target)) {
      this.open = false;
    }
  }

  @Listen("keydown", { target: "window" })
  closeOnEscapeKey(event: KeyboardEvent) {
    if (this.open && event.key === "Escape") {
      this.open = false;
    }
  }

  handleChange(event: any) {
    this.value =
      event.target.value === ""
        ? null
        : this.numeric
        ? Number(event.target.value)
        : event.target.value;
    this.valueChange.emit(this.value!);
    this.selectedOption = this.options.find(
      ({ value }) =>
        this.value === (value === null || this.numeric ? value : `${value}`)
    )!;

    if (this.open) {
      this.open = false;
    }
  }

  componentWillLoad() {
    this.selectedOption = this.options.find(
      ({ value }) =>
        this.value === (value === null || this.numeric ? value : `${value}`)
    )!;
  }

  render() {
    const { color, name, value, options, placeholder, open, selectedOption } =
      this;

    return (
      <Host
        class={generateMedColor(color, {
          "tp-select-dropdown": true,
          "tp-select-dropdown--open": open,
        })}
      >
        <div class="tp-select-dropdown__container">
          <div
            class="tp-select-dropdown__header"
            onClick={() => (this.open = !this.open)}
          >
            <div class="tp-select-dropdown__header-content">
              <div class="tp-select-dropdown__left">
                <ion-label
                  class={{
                    "tp-select-dropdown__label": true,
                    "tp-select-dropdown__label--placeholder": !selectedOption,
                  }}
                  // @ts-ignore
                  token="p14"
                >
                  {selectedOption ? selectedOption.label : placeholder}
                </ion-label>
              </div>
            </div>

            <div class="tp-select-dropdown__arrow">
              <ion-icon class="med-icon" name="med-baixo"></ion-icon>
            </div>
          </div>

          <ion-accordion-group
            class={{
              "tp-select-dropdown__accordion-group": true,
              "tp-select-dropdown__accordion-group--open": open,
            }}
            value={open ? "open" : null}
          >
            <ion-accordion class="tp-select-dropdown__accordion" value="open">
              <div
                slot="content"
                class="tp-select-dropdown__options tp-scroll"
                no-styling-content
              >
                {options.map(({ value: optionValue, label }) => (
                  <label
                    class={{
                      "tp-select-dropdown__option": true,
                      "tp-select-dropdown__option--selected":
                        optionValue === value,
                    }}
                    key={optionValue}
                  >
                    <input
                      type="radio"
                      name={name}
                      value={optionValue === null ? "" : optionValue}
                      checked={optionValue === value}
                      onChange={this.handleChange.bind(this)}
                    />

                    <div class="tp-select-dropdown__left">
                      <ion-label
                        class="tp-select-dropdown__label"
                        // @ts-ignore
                        token="p14"
                        ds-color="neutral-10"
                      >
                        {label}
                      </ion-label>
                    </div>
                  </label>
                ))}
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </div>
      </Host>
    );
  }
}
