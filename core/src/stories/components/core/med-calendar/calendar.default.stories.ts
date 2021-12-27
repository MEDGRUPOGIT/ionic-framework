import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Calendar',
  decorators: [withDesign],
};

const Template = ({dsColor, calendario}) => {
  return html`
    <ion-app>
      <med-calendar .dsColor=${dsColor} calendario=${calendario}>
        <med-calendar-day .dsColor=${dsColor} active>1</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>2</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>3</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>4</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>5</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>6</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>7</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>8</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>9</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>10</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>11</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>12</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>13</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>14</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>15</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>16</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>18</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>18</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>19</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>20</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>21</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>22</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>23</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>24</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>25</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>26</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>27</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>28</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>29</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>30</med-calendar-day>
        <med-calendar-day .dsColor=${dsColor}>31</med-calendar-day>
      </med-calendar-day>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: 'Define a cor do componente.',
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  calendario: {
    control: { type: 'text' },
    defaultValue: 'Dezembro 2021',
  },
}
