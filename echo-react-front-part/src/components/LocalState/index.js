export const loadState = () => {
  try {
    const keyState = localStorage.getItem('showEcho');
    if (keyState === null ) {
      return undefined;
    }
    return JSON.parse(keyState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const keyState = JSON.stringyfy(state);
    localStorage.setItem('showEcho', keyState);
  } catch (err) {

  }
};
