import Util from '<%- $$.relative("util") %>';

const baseUrl = function() {
    return {
        development: '',
        prepub: '',
        production: ''
    }[process.env.NODE_ENV];
};

export default Util.createAPI(baseUrl);
