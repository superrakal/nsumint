define('frontend/templates/components/chatbox-component', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 287
          }
        },
        "moduleName": "frontend/templates/components/chatbox-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","chatbox-wrapper");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","messages");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"role","alert");
        dom.setAttribute(el3,"class","alert alert-info alert-dismissible fade in");
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"aria-label","Close");
        dom.setAttribute(el4,"data-dismiss","alert");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"class","close");
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"aria-hidden","true");
        var el6 = dom.createTextNode(" ×");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("NSUMINT: Диалог начался");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});