# accordion-item



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                              | Type                             | Default     |
| ------------ | ------------ | -------------------------------------------------------- | -------------------------------- | ----------- |
| `background` | `background` | Define se o componente irá ter background quando aberto. | `boolean`                        | `false`     |
| `dsColor`    | `ds-color`   | Define a cor do componente.                              | `string \| undefined`            | `undefined` |
| `icon`       | `icon`       | Define a posição do ícone de abertura do componente.     | `"left" \| "right" \| undefined` | `undefined` |
| `noBorder`   | `no-border`  | Define a variação da borda do componente.                | `boolean`                        | `false`     |


## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `opened` |             | `CustomEvent<any>` |
| `toggle` | Internal    | `CustomEvent<any>` |


## Slots

| Slot         | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| `"auxiliar"` | Define o conteúdo auxiliar do componente.                           |
| `"button"`   | Se houver botões no componente eles devem ser inseridos nesse slot. |
| `"content"`  | Define o conteúdo do componente.                                    |
| `"header"`   | Define o conteúdo do header do componente.                          |
| `"progress"` | Slot destinado a progress-bar.                                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
