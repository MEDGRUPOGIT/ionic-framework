import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from "../../../constants";

export default {
  title: "Components/Compositions/@OK Semana (Week)",
  decorators: [withDesign],
};

const Template = ({ dsColor, active, skin }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component -->
          <med-semana .dsColor=${dsColor} .active=${active} .skin=${skin} ></med-semana>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=12138%3A43556',
  },
  actions: {
    handles: ['medDownloaded', 'medCancelar','medDownloading'],
  },
};
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: "MedColor" },
      defaultValue: { summary: "undefined" },
    },
  },
  dsSize: {
    options: [undefined, 'sm'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'sm' },
      defaultValue: { summary: 'undefined' },
    },
  },
  active: {
    control: { type: 'boolean' },
    description: 'Define se o componente irá estar ativo.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  skin: {
    options: [undefined, 'lista'],
    control: { type: 'select' },
    description: 'Define se o componente irá mostrar skin lista.',
    defaultValue: undefined,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  download: {
    download: false,
    control: { type: "boolean" },
    description: "Define o estado de download do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  downloaded: {
    downloaded: false,
    control: { type: "boolean" },
    description: "Define o estado de downloaded do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  downloadProgress: {
    defaultValue: '40',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define o progresso de download.'
  },
  label: {
    control: { type: 'text' },
    description: 'Define o texto do componente',
    defaultValue: 'nef 1',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem a ser mostrada.'
  },
};

