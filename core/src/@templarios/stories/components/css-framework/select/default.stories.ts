import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Select",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor, "ds-name": dsName, disabled }) => {
  return html`
    <p tp-label token="p14" for="tp-select">Description:</p>
    <div
      tp-container-select
      ds-color=${dsColor}
      ds-name=${dsName}
      ?disabled=${disabled}
    >
      <select
        tp-select
        id="tp-select"
        ds-color=${dsColor}
        ds-name=${dsName}
        .disabled=${disabled}
        placeholder="Lorem ipsum dolor"
      >
        <option placeholder value="" disabled selected>
          Lorem ipsum dolor
        </option>
        <option>Lorem ipsum dolor 1</option>
        <option>Lorem ipsum dolor 2</option>
        <option>Lorem ipsum dolor 3</option>
        <option>Lorem ipsum dolor 4</option>
        <option>Lorem ipsum dolor 5</option>
      </select>
      <ion-icon class="med-icon" name="med-baixo"></ion-icon>
    </div>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=9341%3A58123",
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
};
