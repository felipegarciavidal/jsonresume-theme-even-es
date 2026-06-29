import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import DateTime from './date-time.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['awards']} awards
 * @returns {string | false}
 */
export default function Awards(awards = []) {
  return (
    awards.length > 0 &&
    html`
      <section id="awards">
        <h3>Premios</h3>
        <div class="stack">
          ${awards.map(award => {
            const { awarder, date, summary, title } = award
            const { url } = /** @type {{ url?: string }} */ (award)
            return html`
              <article>
                <header>
                  <h4>${Link(url, title)}</h4>
                  <div class="meta">
                    ${awarder && html`<div>Otorgado por <strong>${awarder}</strong></div>`} ${date && DateTime(date)}
                  </div>
                </header>
                ${summary && markdown(summary)}
              </article>
            `
          })}
        </div>
      </section>
    `
  )
}
