import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Cartão Resposta Item',
  decorators: [withDesign],
};

const TemplateAnulada = () => {
  return html`
    <ion-app>
      <ion-content style="--background: var(--med-color-neutral-dark-prime); heigh: 100%;">

        <!-- component -->
        <med-cartao-resposta-lista>
          <med-cartao-resposta-item color="feedback-warning" anulada>01</med-cartao-resposta-item>
        </med-cartao-resposta-lista>
        <!-- component -->

      <ion-content>
    </ion-app>
  `
}

export const CartaoRespostaItemAnulada = TemplateAnulada.bind({});
CartaoRespostaItemAnulada.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=802%3A477',
  },
}
