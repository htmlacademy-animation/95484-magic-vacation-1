export default () => {
  const body = document.querySelector(`body`);

  body.onload = () => {
    body.classList.add(`loaded`);
  };
};
