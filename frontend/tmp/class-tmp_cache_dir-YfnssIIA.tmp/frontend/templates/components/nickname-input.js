define('frontend/templates/components/nickname-input', ['exports'], function (exports) {

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
            "column": 133
          }
        },
        "moduleName": "frontend/templates/components/nickname-input.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","nickname");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
        return morphs;
      },
      statements: [
        ["inline","input",[],["class","form-control","type","text","value",["subexpr","@mut",[["get","value",["loc",[null,[1,69],[1,74]]]]],[],[]],"placeholder","Максимум 12 символов (Не обязателен)"],["loc",[null,[1,22],[1,127]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});