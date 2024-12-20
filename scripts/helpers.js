export const create = (type) => {
  return document.createElement(type);
};

export const get = (element) => {
  return document.querySelector(element);
};

export const getAll = (element) => {
  return document.querySelectorAll(element);
};
