export function btnLevel(): string {
  return `<div class="level__btn">
    <input id="level__toggle" type="checkbox" />
    <label class="level__btn" for="level__toggle">
      <span></span>
    </label>
  </div>`;
}

export function contentEditor(): string {
  return `<div id="html" class="editor-html">
    <div class="editor-html_line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10</div>
    </div class="editor-html_content">editor html</div>
  </div>`;
}

export function itemLevel(item: number, text: string): string {
  return `
    <span>&#x2714;</span>
    <span>${item + 1}. </span>
    <span>${text}</span>
  `;
}

export function contentLogo(): string {
  return `<span>RS-CSS</span>`;
}

export function contentFooter(): string {
  return `<div class="footer-content">
    <div>
      <a class="footer-content_logo">RS-CSS</a>
      <p class="footer-content_copyright">Copyright © 2020 RS CSS | All Rights Reserved</p>
    </div>
      <a href="https://rs.school/js/"><img src="assets/inline/rs_school_js.svg"></a>
    <div>
      <h2>About</h2>
      <p class="footer-content_about">This project is a simulator for learning css selectors.</p>
      <a class="footer-content_about" href="https://github.com/rolling-scopes-school/kastrubait-JS2020Q3">create by Kastrubai T</a>
    </div>
  </div>`;
}

export function editorCss(): string {
  return `<div class="editor-title">
    <span>CSS</span>
    <span>style.css</span>
  </div>
  <div class="editor-css">
    <div class="line-numbers">1<br>2<br>3<br>4<br>5<br></div>
    <input id="code" type="text" autocomplete="off"> <pre>{
  // some style
}</pre>
    <button id="check" class="disabled">Проверить</button>
  </div>`;
}

export function editorHtml(): string {
  return `<div class="editor-title">
    <span>HTML</span>
    <span>index.html</span>
  </div>
  <div class="editor-html">
    <div class="line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13</div>
    <div class="editor-html_content"></div>
  </div>`;
}

export function levelCounter(): string {
  return `<div id="level-counter">
    <span class="arrow left">&#9664;</span>
    <span id="level-indicator">
      <span id="labelLevel" class="translate">Уровень</span>
      <span class="current">24</span>
      <span id="labelOf">из</span>
      <span class="total">24</span>
    </span>
    <span class="arrow rigth disabled">&#9654;</span>
  </div>`;
}
