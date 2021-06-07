const container = document.querySelector(".container");
window.addEventListener('scroll', () => {
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
  let addBox = () => {
    for (let i = 0; i < 33; i++) {
      const item = document.createElement("div");
      item.setAttribute("class", "box");
      container.appendChild(item);
    }
}

if (scrollTop + clientHeight === scrollHeight) {
    addBox();
  }
})
