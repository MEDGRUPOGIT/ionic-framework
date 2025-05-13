import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/Ionic/Select",
  decorators: [withDesign],
};

const Template = ({
  "ds-color": dsColor,
  "ds-name": dsName,
  disabled,
  state,
  inverted,
  "show-popover-with-delay": showPopoverWithDelay,
}) => {
  const interfaceOpts = { cssClass: "tp-popover" };

  return html`
    <style>
      tp-input-container {
        // margin-left: auto;
      }
    </style>

    <ion-app>
      <ion-content>
        <div class="ion-padding">
          <ion-label token="p14">Description</ion-label>
          <tp-input-container
            .dsColor=${dsColor}
            ds-name=${dsName}
            .disabled=${disabled}
            .inverted=${inverted}
            state=${state}
            show-popover-with-delay=${showPopoverWithDelay}
            has-icon="end"
          >
            <ion-select
              mode="md"
              ds-color=${dsColor}
              ds-name=${dsName}
              .disabled=${disabled}
              placeholder="Lorem ipsum dolor"
              interface="popover"
              .interfaceOptions=${interfaceOpts}
            >
              <ion-select-option> Option 1 </ion-select-option>
              <ion-select-option> Option 2 </ion-select-option>
              <ion-select-option> Option 3 </ion-select-option>
              <ion-select-option> Option 4 </ion-select-option>
              <ion-select-option> Option 5 </ion-select-option>
              <ion-select-option> Option 6 </ion-select-option>
              <ion-select-option> Option 7 </ion-select-option>
            </ion-select>
            <ion-icon class="med-icon" slot="end" name="med-baixo"></ion-icon>
          </tp-input-container>

          <tp-input-container
            .dsColor=${dsColor}
            ds-name=${dsName}
            .disabled=${disabled}
            .inverted=${inverted}
            state=${state}
            has-icon="end"
            style="width: 50%;"
          >
            <ion-select
              mode="md"
              ds-color=${dsColor}
              ds-name=${dsName}
              .disabled=${disabled}
              placeholder="Lorem ipsum dolor"
              interface="popover"
              .interfaceOptions=${interfaceOpts}
            >
              <ion-select-option> Option 1 </ion-select-option>
              <ion-select-option> Option 2 </ion-select-option>
              <ion-select-option> Option 3 </ion-select-option>
            </ion-select>
            <ion-icon class="med-icon" slot="end" name="med-baixo"></ion-icon>
          </tp-input-container>

          <tp-input-container
            .dsColor=${dsColor}
            ds-name=${dsName}
            .disabled=${disabled}
            .inverted=${inverted}
            state=${state}
            has-icon="end"
            style="width: 25%;"
          >
            <ion-select
              mode="md"
              ds-color=${dsColor}
              ds-name=${dsName}
              .disabled=${disabled}
              placeholder="Lorem ipsum dolor"
              interface="popover"
              .interfaceOptions=${interfaceOpts}
            >
              <ion-select-option value="opt-1"> Option 1 </ion-select-option>
              <ion-select-option value="opt-2"> Option 2 </ion-select-option>
              <ion-select-option value="opt-3"> Option 3 </ion-select-option>
            </ion-select>
            <ion-icon class="med-icon" slot="end" name="med-baixo"></ion-icon>
          </tp-input-container>
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=9341%3A58123",
  },
};
Default.argTypes = {
  "ds-color": {
    options: [undefined, ...Object.values(MedColors)],
    control: { type: "select" },
    description: "Define a cor do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedColors).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
  "ds-name": {
    options: [undefined, "secondary"],
    control: { type: "inline-radio" },
    description: "Define a variação do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: "secondary | undefined" },
      defaultValue: { summary: "undefined" },
    },
  },
  disabled: {
    disabled: false,
    control: { type: "boolean" },
    description: "Define o estado disabled do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  inverted: {
    control: { type: "boolean" },
    description:
      "Define a direção de abertura do popover (acima ou abaixo do select).",
    defaultValue: false,
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false },
    },
  },
  state: {
    options: [undefined, "attention", "caution", "warning", "success"],
    control: { type: "select" },
    description: "Define o estado de feedback do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: "attention | caution | warning | success | undefined" },
      defaultValue: { summary: "undefined" },
    },
  },
  showPopoverWithDelay: {
    control: { type: "boolean" },
    description: "Define um delay para o tempo de renderização do popover",
    defaultValue: false,
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false },
    },
  },
};
