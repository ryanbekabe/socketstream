
exports.init = function(root, config) {
  return {
    name: 'Default',
    process: function(template, path, id) {
      return '<script id="tmpl-' + id + '" type="text/x-tmpl">' + template + '</script>';
    }
  };
};