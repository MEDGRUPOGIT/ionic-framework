import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { BaseGap, BaseRadius, BaseSpacing, MedColors } from '../../../../templarios';

export default {
  title: 'Components/Ionic/Item',
  decorators: [withDesign],
};

const Template = ({
  'ds-color': dsColor,
  radius,
  gap,
  'spacing-v': spacingV,
  'spacing-h': spacingH,
}) => {
  const interfaceOpts = { cssClass: "tp-popover" };
  const pickerOptions = { cssClass: "tp-datetime" };

  return html`
    <ion-app>
      <ion-content>

        <ion-grid>
          <ion-row>
            <ion-col>

              <ion-label token="h24">Default</ion-label>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <ion-label>Texto Primario</ion-label>
              </ion-item>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>

              <ion-label token="h24">Icon</ion-label>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none"
                detail="false">
                <ion-icon class="med-icon" slot="start" name="med-direita"></ion-icon>
                <ion-label>Texto Primario</ion-label>
              </ion-item>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none"
                detail="false">
                <ion-icon class="med-icon" slot="start" name="med-direita"></ion-icon>
                <ion-label>Texto Primario</ion-label>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none"
                detail="false">
                <ion-label>Texto Primario</ion-label>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>

              <ion-label token="h24">Button</ion-label>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <ion-button slot="start" ds-size="xxs" mode="ios" fill="clear" icon-only>
                  <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
                </ion-button>
                <ion-label>Texto Primario</ion-label>
              </ion-item>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <ion-button slot="start" ds-size="xxs" mode="ios" fill="clear" icon-only>
                  <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
                </ion-button>
                <ion-label>Texto Primario</ion-label>
                <ion-button slot="end" ds-size="xxs" mode="ios" fill="clear" icon-only>
                  <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
                </ion-button>
              </ion-item>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <ion-label>Texto Primario</ion-label>
                <ion-button slot="end" ds-size="xxs" mode="ios" fill="clear" icon-only>
                  <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
                </ion-button>
              </ion-item>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>

             <ion-label token="h24">Radio</ion-label>

              <ion-radio-group value="Value 1">
                <ion-item
                  ds-color=${dsColor}
                  radius=${radius}
                  gap=${gap}
                  spacing-v=${spacingV}
                  spacing-h=${spacingH}
                  mode="ios"
                  lines="none">
                    <ion-radio slot="start" value="value-1" mode="md"></ion-radio>
                    <ion-label>Value 1</ion-label>
                </ion-item>

                <ion-item
                  ds-color=${dsColor}
                  radius=${radius}
                  gap=${gap}
                  spacing-v=${spacingV}
                  spacing-h=${spacingH}
                  mode="ios"
                  lines="none">
                    <ion-label>Value 2</ion-label>
                    <ion-radio slot="end" value="value-2" mode="md"></ion-radio>
                </ion-item>
              </ion-radio-group>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>

              <ion-label token="h24">Checkbox</ion-label>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <ion-checkbox slot="start" value="value-1" mode="md"></ion-checkbox>
                <ion-label>Value 1</ion-label>
              </ion-item>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <ion-label>Value 2</ion-label>
                <ion-checkbox slot="end" value="value-2" mode="md"></ion-checkbox>
              </ion-item>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>

              <ion-label token="h24">Toogle</ion-label>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <ion-label ds-color="neutral-10">Value 1</ion-label>
                <ion-toggle slot="start" mode="ios" value="value-1"></ion-toggle>
              </ion-item>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <ion-label ds-color="neutral-10">Value 2</ion-label>
                <ion-toggle slot="end" mode="ios" value="value-2"></ion-toggle>
              </ion-item>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>

              <ion-label token="h24">Inputs</ion-label>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <div>
                  <ion-label>Datetime</ion-label>
                  <tp-input-container>
                    <ion-datetime
                      mode="ios"
                      .pickerOptions=${pickerOptions}
                      placeholder="dd/mm/aaaa">
                    </ion-datetime>
                    <ion-icon class="med-icon" slot="end" name="med-cronograma"></ion-icon>
                  </tp-input-container>
                </div>
              </ion-item>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <div>
                <ion-label token="p14">Select</ion-label>
                <tp-input-container has-icon="end">
                  <ion-select
                    mode="md"
                    placeholder="Lorem ipsum dolor"
                    interface="popover"
                    .interfaceOptions=${interfaceOpts}>
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
                </div>
              </ion-item>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <div>
                  <ion-label>Input com Placeholder</ion-label>
                  <ion-input mode="md" placeholder="Placeholder"></ion-input>
                </div>
              </ion-item>

              <ion-item
                ds-color=${dsColor}
                radius=${radius}
                gap=${gap}
                spacing-v=${spacingV}
                spacing-h=${spacingH}
                mode="ios"
                lines="none">
                <div>
                  <ion-label>Range</ion-label>
                  <ion-range></ion-range>
                </div>
              </ion-item>

            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=13338%3A46802',
  },
};
Default.argTypes = {
  'ds-color': {
    options: [undefined, ...Object.values(MedColors)],
    control: { type: 'select' },
    description: 'Define a cor do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  radius: {
    options: [undefined, ...Object.values(BaseRadius)],
    control: { type: 'select' },
    description: 'Define o token do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(BaseRadius).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  gap: {
    options: [undefined, ...Object.values(BaseGap)],
    control: { type: 'select' },
    description: 'Define o token do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(BaseGap).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  'spacing-v': {
    options: [undefined, ...Object.values(BaseSpacing)],
    control: { type: 'select' },
    description: 'Define o token do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(BaseSpacing).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  'spacing-h': {
    options: [undefined, ...Object.values(BaseSpacing)],
    control: { type: 'select' },
    description: 'Define o token do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(BaseSpacing).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
