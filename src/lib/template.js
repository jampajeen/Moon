const template = function generateHTMLFromTemplate(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
};

module.exports = template;
