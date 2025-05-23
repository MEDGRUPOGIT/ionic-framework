import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MOCK_DROPDOWN_OPTIONS } from "../utils/select-dropdown.mock";

export default {
  title: "Components/Core/Select dropdown",
  decorators: [withDesign],
};

const Template = ({ ...args }) => {
  setTimeout(() => {
    const teste1 = document.querySelector(".teste-1");
    // @ts-ignore
    teste1.options = MOCK_DROPDOWN_OPTIONS;
  }, 0);

  return html`
    <tp-select-dropdown
      class="teste-1"
      name="teste-1"
      color="${args.color}"
      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      value="opt1"
      .disabled=${args.disabled}
    >
    </tp-select-dropdown>
  `;
};

export const Default = Template.bind({});
// @ts-ignore
Default.argTypes = {
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
