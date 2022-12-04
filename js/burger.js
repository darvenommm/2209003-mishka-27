(function () {
  'use strict';

  const button = document.querySelector('.header__burger');
  const CLASS_FOR_ACTIVE_BUTTON = 'header__burger--active';
  const linkLists = document.querySelectorAll('.navigation__menu-links');
  const CLASS_FOR_OPEN_LINK_LIST = 'navigation__menu-links--open';
  const maxWindowWidth = 768;

  button.addEventListener('click', () => {
    linkLists.forEach((linkList) => {
      linkList.classList.toggle(CLASS_FOR_OPEN_LINK_LIST);
    });

    button.classList.toggle(CLASS_FOR_ACTIVE_BUTTON);
  });

  const resetButtonAndLists = () => {
    linkLists.forEach((linkList) => {
      linkList.classList.remove(CLASS_FOR_OPEN_LINK_LIST);
    });

    button.classList.remove(CLASS_FOR_ACTIVE_BUTTON);
  };

  document.body.addEventListener('click', (event) => {
    const target = event.target;

    // button children
    if (button.contains(target)) {
      return;
    }

    // linkLists children
    let isLinkListsChildren = false;
    linkLists.forEach((linkList) => {
      if (linkList.contains(target)) {
        isLinkListsChildren = true;
        return;
      }
    });

    if (isLinkListsChildren) {
      return;
    }

    // default
    resetButtonAndLists();
  });

  // window width
  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > maxWindowWidth) {
      resetButtonAndLists();
    }
  });
})();
