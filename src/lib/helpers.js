const activate = (el, name) => {
  if (!name || name === '') throw new Error('No class name specified.');
  document.querySelectorAll(`.${name}`).forEach((e) => { e.classList.remove(name); });
  if (el && el !== '') {
    el.classList.add(name);
  }
};

const toggle = (el, name) => {
  el.classList.toggle(name);
};

const template = function generateHTMLFromTemplate(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
};

module.exports = {
  activate,
  toggle,
  template,
};
