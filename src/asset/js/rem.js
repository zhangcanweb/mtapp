function remFn() {
  const docEl = document.documentElement;

  function setRemUint() {
    const rem = docEl.clientWidth / 10;
    docEl.style.fontSize = `${rem}px`;
  }

  setRemUint();

  window.addEventListener('resize', setRemUint);
}
remFn();
