import intro from "./intro";
import AccentTypographyBuild from "./accent-typography-build";

export default () => {

  const introAnimations = intro();

  const historyTitle = document.querySelector(`.slider__item-title`);
  const prizesTitle = document.querySelector(`.prizes__title`);
  const rulesTitle = document.querySelector(`.rules__title`);
  const gameTitle = document.querySelector(`.game__title`);

  const titles = [historyTitle, prizesTitle, rulesTitle, gameTitle];
  const titlesAnimation = titles.map((title) => new AccentTypographyBuild({
    element: title,
  }));

  const animations = [
    introAnimations,
    ...titlesAnimation,
  ];

  document.body.addEventListener(`screenChanged`, (e) => {
    const {screenId} = e.detail;

    animations.forEach((animation) => {
      animation.destroyAnimation();
    });

    const animation = animations[screenId];

    if (animation) {
      animation.runAnimation();
    }

  });
};
