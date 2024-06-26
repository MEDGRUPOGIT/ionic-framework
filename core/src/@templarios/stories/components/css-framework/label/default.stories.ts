import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors, MedType } from "../../../../templarios";

export default {
  title: "Components/CSS Framework/Label",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor, token, slot }) => {
  return html` 
  <p tp-label ds-color=${dsColor} token=${token}>
    Teste Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque doloribus consequuntur facere tempore nihil minima vel unde sunt impedit maxime et praesentium excepturi placeat optio illum, officia debitis error.
  </p> `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=12435%3A44300",
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
  token: {
    options: [undefined, ...Object.values(MedType)],
    control: { type: "select" },
    description: "Define o token do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedType).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  }
};
