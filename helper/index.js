exports.convertUrl = function (url) {
  const _url = url
    .replace(/:|{|}/g, '')
    .split('/')
    .filter(value => !!value).join('_');
  return _url.split('.')[0];
};
