import { Component, h, Host, Prop } from "@stencil/core";
import { MedFontSize } from "../../../../global/templarios/font-size.enum";
import { RangeValue } from "../../../range/range-interface";

@Component({
  tag: "med-font-zoom",
  styleUrl: "med-font-zoom.scss",
  shadow: true,
})
export class MedFontZoom {
  /**
   * TODO
   */
  @Prop() emitter!: { emit: (value: MedFontSize) => void };

  /**
   * TODO
   */
  @Prop({mutable: true}) value: MedFontSize = MedFontSize.XS;

  readonly min: number = 1;
  readonly max: number = 5;
  readonly step: number = 1;

  fontSizeToValue = (fontSize: MedFontSize): RangeValue => {
    switch (fontSize) {
      case MedFontSize.XXXS:
        return 1;
      case MedFontSize.XXS:
        return 2;
      case MedFontSize.XS:
        return 3;
      case MedFontSize.SM:
        return 4;
      case MedFontSize.MD:
        return 5;
    }
  };

  onRangeChange = (rangeValue: RangeValue): void => {
    if (this.emitter) {
      switch (rangeValue) {
        case 1:
          this.value = MedFontSize.XXXS;
          break;
        case 2:
          this.value = MedFontSize.XXS;
          break;
        case 3:
          this.value = MedFontSize.XS;
          break;
        case 4:
          this.value = MedFontSize.SM;
          break;
        case 5:
          this.value = MedFontSize.MD;
          break;
        default:
          this.value = MedFontSize.XS;
      }

      this.emitter.emit(this.value);
    }
  };

  render() {
    return (
      <Host from-stencil>
        <ion-range
          onIonChange={(ev) => this.onRangeChange(ev.detail.value)}
          min={this.min}
          max={this.max}
          step={this.step}
          value={this.fontSizeToValue(this.value)}
        >
          <ion-icon
            class="med-icon"
            slot="start"
            size="small"
            name="med-fontemenor"
          ></ion-icon>
          <ion-icon class="med-icon" slot="end" name="med-fontemaior"></ion-icon>
        </ion-range>
      </Host>
    );
  }
}
