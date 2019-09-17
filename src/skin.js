import "core-js/stable"
import "regenerator-runtime/runtime"

const timestamp = function() {
  let timeIndex = 0;
  const shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];

  const now = new Date();
  let shift = shifts[timeIndex++] || 0;
  const date = new Date(now - shift * 1000);

  return date.getTime() / 1000;
};

const changeSkin = function(skin) {
  location.href = location.href.split('#')[0].split('?')[0] + '?skin=' + skin;
};

const getCurrentSkin = function() {
  const header = document.getElementById('header');
  let skin = location.href.split('skin=')[1];

  if (!skin) {
    skin = 'Default';
  }

  if (skin.indexOf('#') !== -1) {
    skin = skin.split('#')[0];
  }

  const skins = {
    Default: {
      avatars: false,
      list: false,
      autoFullScreen: false,
      cubeEffect: false,
      paginationArrows: false
    }
  };

  const el = document.querySelectorAll('#skin option');
  const total = el.length;
  for (const i = 0; i < total; i++) {
    const what = skin == el[i].value ? true : false;

    if (what) {
      el[i].setAttribute('selected', 'selected');

      header.innerHTML = skin;
      header.className = skin;
    } else {
      el[i].removeAttribute('selected');
    }
  }

  return {
    name: skin, 
    params: skins[skin] 
  };
};

export { getCurrentSkin, timestamp }
