define('frontend/templates/components/sex-component', ['exports'], function (exports) {

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
            "column": 116
          }
        },
        "moduleName": "frontend/templates/components/sex-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"type","button");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(element0,0,0);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["btn btn-default text-uppercase ",["get","class",["loc",[null,[1,89],[1,94]]]]]]],
        ["element","action",["selectSex",["get","sex",["loc",[null,[1,29],[1,32]]]]],[],["loc",[null,[1,8],[1,34]]]],
        ["content","title",["loc",[null,[1,98],[1,107]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});