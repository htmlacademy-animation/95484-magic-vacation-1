import AccentTypographyBuild from "./accent-typography-build";

export default () => {
  const introTitle = document.querySelector(`.intro__title`);
  const introDate = document.querySelector(`.intro__date`);
  const introMessage = document.querySelector(`.intro__message`);
  const introLabel = document.querySelector(`.intro__label`);

  const introTitleAnimation = new AccentTypographyBuild(
      {
        element: introTitle,
        activeClass: `active`,
        wordClass: `intro__word`,
        letterClass: `intro__letter`,
        delay: 200
      }
  );

  const introDateAnimation = new AccentTypographyBuild(
      {
        element: introDate,
        duration: 500,
      }
  );

  function destroyAnimation() {
    introTitleAnimation.destroyAnimation();
    introDateAnimation.destroyAnimation();
    introMessage.classList.remove(`active`);
    introLabel.classList.remove(`active`);
  }

  function runAnimation() {

    introTitleAnimation.runAnimation();

    introTitle.addEventListener(`transitionend`, () => {
      introMessage.classList.add(`active`);
    }, {once: true});

    introMessage.addEventListener(`animationend`, () => {
      introDateAnimation.runAnimation();
    }, {once: true});


    introDate.addEventListener(`transitionend`, (e) => {
      introLabel.classList.add(`active`);
    }, {once: true});
  }

  return {
    runAnimation,
    destroyAnimation,
  };
};
