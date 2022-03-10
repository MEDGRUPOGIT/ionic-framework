import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from "../../../constants";

export default {
  title: "Components/Compositions/@OK Semana (Week)",
  decorators: [withDesign],
};

const Template = ({ dsColor, active, skin, content }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component -->
          <med-semana .dsColor=${dsColor} .active=${active} .skin=${skin} .content=${content}></med-semana>
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
  content:{
    defaultValue: {
      Title: "semana",
      Numero: "01",
      DataInicio: "16/08",
      DataFim: "24/08",
      Itens: [
        {
          Nome: "nef 1",
          PercentLido: 75,
          Downloaded: false,
          DownloadProgress: 0,
          Time: "2h30m",
          Descricao: "Lorem Ipslum at lanium",
        },
        {
          Nome: "nef 2",
          PercentLido: 100,
          Downloaded: true,
          DownloadProgress: 0,
          Time: "2h30m",
          Descricao: "Lorem Ipslum at lanium",
        },
        {
          Nome: "nef 3",
          PercentLido: 0,
          Downloaded: false,
          DownloadProgress: 20,
          Time: "2h30m",
          Descricao: "Lorem Ipslum at lanium",
        },
      ],
    },
    control: { type: 'object' },
    description: 'Define o conteúdo do componente.',
  }
};

