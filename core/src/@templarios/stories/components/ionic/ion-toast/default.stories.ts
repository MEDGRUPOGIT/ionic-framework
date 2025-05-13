import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { toastController } from "../../../../../../dist/ionic/index.esm.js";

export default {
  title: "Components/Ionic/Toast",
  decorators: [withDesign],
};

const Template = ({ "color-modifiers": colorModifiers, icons }) => {
  const openToast = async () => {
    toastController
      .create({
        header: "Mensagem da Notificação.",
        position: "bottom",
        showCloseButton: true,
        cssClass: `tp-toast ${colorModifiers}`,
        buttons: [
          {
            side: "end",
            icon: icons,
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ],
      })
      .then((toast) => {
        toast.present();
      });
  };

  const openToastMedrobot = async () => {
    toastController
      .create({
        header: "Desculpe!",
        message:
          "Você não possui permissão para acessar esta referência bibliográfica. Para obter acesso, é necessário adquirir outro curso. Por favor, visite nossa página de cursos para mais informações",
        position: "bottom",
        showCloseButton: true,
        cssClass: `tp-toast-medrobot ${colorModifiers}`,
        buttons: [
          {
            side: "end",
            text: "Ir para o site",
            handler: () => {
              console.log("Favorite clicked");
            },
          },
        ],
      })
      .then((toast) => {
        toast.present();
      });
  };

  return html`
    <ion-app>
      <ion-content>
        <ion-button mode="ios" ds-size="xs" @click="${openToast}">
          toast
        </ion-button>

        <ion-button mode="ios" ds-size="xs" @click="${openToastMedrobot}">
          toast medrobot
        </ion-button>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=8211%3A57102",
  },
};
Default.argTypes = {
  "color-modifiers": {
    options: [undefined, "tp-toast--success", "tp-toast--warning"],
    control: { type: "select" },
    description: "Define a cor do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: "tp-toast--success | tp-toast--warning" },
      defaultValue: { summary: "undefined" },
    },
  },
  icons: {
    options: [undefined, "med-fechar", "med-checkcirculo", "med-alerta"],
    control: { type: "select" },
    description: "Define a cor do componente.",
    defaultValue: undefined,
    table: {
      type: { summary: "med-fechar | med-checkcirculo | med-alerta" },
      defaultValue: { summary: "undefined" },
    },
  },
};
