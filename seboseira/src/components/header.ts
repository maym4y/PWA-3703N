import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'seboseira';

  @property({ type: Boolean}) enableBack: boolean = false;

  static styles = css`
    header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #271D1A;
      color: #D5C9AA;
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #menuBar {
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #D5C9AA;
      text-decoration: none;
      padding: 10xp;
      margin: 10xp;
      border: 1xp;
    }
    
    #menuBar div {
      padding: 10xp;
      margin: 10xp;
      border: 1xp;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;

  render() {
    return html`
      <header>

        <div id="back-button-block">
          ${this.enableBack ? html`<sl-button size="small" href="${resolveRouterPath()}">
            Back
          </sl-button>` : null}

          <div id="menuBar">
            <div id="about-button">
              <a href="${resolveRouterPath('about')}">Sobre o App</a>
            </div>
            <div id="login-button">
              <a href="${resolveRouterPath('login')}">Login</a>
            </div>
            <div id="search-button"
              <a href="${resolveRouterPath('search')}">Pesquise</a>
            </div>
            <div id="registry-button">
              <a href="${resolveRouterPath('registry')}">Registrar livro</a>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}
