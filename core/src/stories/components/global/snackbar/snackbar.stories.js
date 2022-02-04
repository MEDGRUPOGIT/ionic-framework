import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { toastController } from '../../../../../dist/ionic/index.esm.js';

export default {
  title: 'Components/Global/Snack Bar',
  decorators: [withDesign],
};

const createToastDefault = async () => {
  toastController.create({
    header: 'Titulo da Notificação.',
    message: 'Sem conexão. Por favor, tente conectar-se novamente para concluir essa tarefa.',
    position: 'bottom',
    showCloseButton: false,
    dsColor: 'fb-warning',
    buttons: [
    {
      side: 'start',
      icon: 'med-information',
      handler: () => {
        console.log('clicked');
      }
    },
    {
      text: 'tente novamente',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
  ]
  }).then((toast) => {
    toast.present()
  })
}

const TemplateDefault = () => {
  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
        <ion-button ds-name="primary" @click="${createToastDefault}">Abrir Toast</ion-button>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const SnackBar = TemplateDefault.bind({});
SnackBar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=2237%3A5201',
  },
}
