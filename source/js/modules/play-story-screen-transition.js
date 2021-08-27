export default () => {
  return new Promise((resolve) => {
    const storyScreen = document.getElementById(`story`);
    const screenTransitionElement = document.querySelector(`.screen-transition`);

    const onTransitionEnd = () => {
      screenTransitionElement.classList.remove(`active`);
      resolve();
    };

    if (!storyScreen.classList.contains(`active`)) {
      resolve();
      return;
    }

    screenTransitionElement.addEventListener(`transitionend`, onTransitionEnd, {once: true});
    screenTransitionElement.classList.add(`active`);
  });
};
