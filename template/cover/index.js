/* eslint-disable */
import Util from '../util';
import config from '@/config/host';
let domain = process.env.<%- data.project.domain || 'DOMAIN' %>;
let instance = Util.finance(config.host[domain]);

<% _.forEach(data.list, function(o){ %> /** <%- o.summary %> */
export function <%- $$.convertUrl(o.path) %> (opts) {
    return instance({
        method: '<%- o.method %>',
        url: '<%- o.path %>',
        opts: opts,
        parameters: {
            paramType: '<%- o.parameters.length && o.parameters[0]['paramType'] || '' %>'
        },
        res: <%- o.responseMessages[0].responseModel %>
    });
}

<% }) %>
