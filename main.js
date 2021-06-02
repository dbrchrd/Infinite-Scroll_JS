const container = document.querySelector(".container");
window.addEventListener('scroll', () => {
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
  let addBox = () => {
    const item = document.createElement("div");
    item.setAttribute("class", "box");
    container.appendChild(item);
  }
  if (scrollTop + clientHeight === scrollHeight) {
      addBox();
    }
  })
