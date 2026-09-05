document.querySelectorAll('.issue-reader').forEach(reader => {
  const pages = [...reader.querySelectorAll('.issue-spread')];
  const previous = reader.querySelector('[data-previous]');
  const next = reader.querySelector('[data-next]');
  let index = 0;
  function show(value) {
    index = Math.max(0, Math.min(pages.length - 1, value));
    pages.forEach((page, i) => { page.hidden = i !== index; });
    previous.disabled = index === 0;
    next.disabled = index === pages.length - 1;
    reader.querySelector('[data-position]').textContent = `${index + 1} / ${pages.length}`;
  }
  previous.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  show(0);
});
