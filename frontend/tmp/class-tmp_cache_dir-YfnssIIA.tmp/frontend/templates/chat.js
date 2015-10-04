define('frontend/templates/chat', ['exports'], function (exports) {

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
            "column": 382
          }
        },
        "moduleName": "frontend/templates/chat.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"id","chat");
        dom.setAttribute(el1,"class","animated");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("small");
        var el4 = dom.createTextNode("Собеседник набирает сообщение ...");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","message-input");
        var el4 = dom.createElement("form");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [2, 0]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0,0,0);
        morphs[1] = dom.createAttrMorph(element1, 'class');
        morphs[2] = dom.createElementMorph(element2);
        morphs[3] = dom.createMorphAt(element2,0,0);
        return morphs;
      },
      statements: [
        ["inline","chatbox-component",[],["model",["subexpr","@mut",[["get","controller.model",["loc",[null,[1,85],[1,101]]]]],[],[]]],["loc",[null,[1,59],[1,103]]]],
        ["attribute","class",["concat",["animated ",["get","typing_class",["loc",[null,[1,128],[1,140]]]]]]],
        ["element","action",["sendMessage"],["on","submit"],["loc",[null,[1,218],[1,254]]]],
        ["inline","message-input",[],["value",["subexpr","@mut",[["get","message",["loc",[null,[1,277],[1,284]]]]],[],[]],"disabled",["subexpr","@mut",[["get","controllers.application.isChatting",["loc",[null,[1,294],[1,328]]]]],[],[]],"model",["subexpr","@mut",[["get","controller.model",["loc",[null,[1,335],[1,351]]]]],[],[]]],["loc",[null,[1,255],[1,353]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});