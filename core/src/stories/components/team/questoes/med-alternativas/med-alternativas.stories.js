import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../../constants';

export default {
  title: 'Components/Team/Questões/Alternativas',
  decorators: [withDesign],
};

const TemplateDefault = ({ alternativas, dsColor}) => {
  const id = Math.random().toString(36).substr(2, 9);
  setTimeout(() => {

    const alternativasEl = document.getElementById(id);
    //alternativasEl.dsSkinConfig = dsSkinConfig;

    for (const key in alternativas) {
      alternativasEl[key] = alternativas[key];
    }
  }, 5000);

  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-alternativas id=${id} .dsColor=${dsColor}></med-alternativas>
          <!-- component -->

        <div>
      </ion-content>
    </ion-app>
    `
  }

export const Alternativas = TemplateDefault.bind({});
Alternativas.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=313%3A107',
  },
  actions: {
    handles: ['medChange','medClick'],
  },
}
Alternativas.argTypes = {
  alternativas: {
    defaultValue: {
      alternativas: [
        {
          Alternativa: 'A',
          Enunciado: 'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: 'https://via.placeholder.com/500',
          Porcentagem: 0.55,
          Riscada: true,
        },
        {
          Alternativa: 'B',
          Enunciado: 'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.55
        },
        {
          Alternativa: 'C',
          Enunciado: 'Enunciado C Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: 'https://via.placeholder.com/500',
          Porcentagem: 0.3
        },
        {
          Alternativa: 'D',
          Enunciado: 'Enunciado D Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.05
        },
        {
          Alternativa: 'E',
          Enunciado: 'Enunciado E Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: 'https://via.placeholder.com/500',
          Porcentagem: 0
        },
      ],
      alternativaSelecionada: null,
      respostaCorreta: 'C',
      mostraResposta: true,
      permiteRiscar: true,
      dsSkinConfig: { alternativas: 'A' }
    },
    control: { type: 'array' },
    description: 'Define a listagem de alternativas.',
    table: {
      type:  { summary: 'MedAlternativaInterface[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
