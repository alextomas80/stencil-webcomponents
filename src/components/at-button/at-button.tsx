import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'at-button',
  styleUrl: 'at-button.css',
  shadow: true,
})
export class ATButton {
  @Prop() text: string = 'Botón de ejemplo';


  render() {
    return <button class="button">{this.text}</button>;
  }
}
