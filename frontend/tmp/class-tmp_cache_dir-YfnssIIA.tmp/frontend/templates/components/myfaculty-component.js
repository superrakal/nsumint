define('frontend/templates/components/myfaculty-component', ['exports'], function (exports) {

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
            "column": 188
          }
        },
        "moduleName": "frontend/templates/components/myfaculty-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-lg-2 col-md-3 col-sm-6 col-xs-12 faculty");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"type","button");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(element0,0,0);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["btn btn-default text-uppercase ",["get","class",["loc",[null,[1,155],[1,160]]]]]]],
        ["element","action",["selectFaculty",["get","faculty",["loc",[null,[1,91],[1,98]]]]],[],["loc",[null,[1,66],[1,100]]]],
        ["content","title",["loc",[null,[1,164],[1,173]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});