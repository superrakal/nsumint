define('frontend/templates/components/message-input', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 186
            },
            "end": {
              "line": 1,
              "column": 235
            }
          },
          "moduleName": "frontend/templates/components/message-input.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["inline","file-upload",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[1,228],[1,233]]]]],[],[]]],["loc",[null,[1,208],[1,235]]]]
        ],
        locals: [],
        templates: []
      };
    }());
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
            "column": 252
          }
        },
        "moduleName": "frontend/templates/components/message-input.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","input_wrapper");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,0,0);
        morphs[1] = dom.createMorphAt(element0,1,1);
        return morphs;
      },
      statements: [
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","value",["loc",[null,[1,44],[1,49]]]]],[],[]],"disabled",["subexpr","@mut",[["get","isDisabled",["loc",[null,[1,59],[1,69]]]]],[],[]],"autofocus","true","placeholder","Введите сообщение... (Перенос строки ctrl+enter)","class","form-control message_input"],["loc",[null,[1,27],[1,186]]]],
        ["block","unless",[["get","isDisabled",["loc",[null,[1,196],[1,206]]]]],[],0,null,["loc",[null,[1,186],[1,246]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});