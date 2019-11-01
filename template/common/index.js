<% _.forEach(config.projects, function(project){ %>import * as <%- $$.convertUrl(project.modelName) %> from './<%- project.modelName %>';
<% }) %>
export default {<% _.forEach(config.projects, function(project, i){ %>
    <%- $$.convertUrl(project.modelName) %><% if(config.projects.length - 1 !== i) { %>,<% } %><% }) %>
};
