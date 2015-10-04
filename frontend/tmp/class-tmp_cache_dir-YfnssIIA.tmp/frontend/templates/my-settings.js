define('frontend/templates/my-settings', ['exports'], function (exports) {

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
              "column": 399
            },
            "end": {
              "line": 1,
              "column": 510
            }
          },
          "moduleName": "frontend/templates/my-settings.hbs"
        },
        arity: 1,
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
          ["inline","myfaculty-component",[],["value",["subexpr","@mut",[["get","model.my_faculty",["loc",[null,[1,457],[1,473]]]]],[],[]],"faculty",["subexpr","@mut",[["get","faculty",["loc",[null,[1,482],[1,489]]]]],[],[]],"title",["subexpr","@mut",[["get","faculty.name",["loc",[null,[1,496],[1,508]]]]],[],[]]],["loc",[null,[1,429],[1,510]]]]
        ],
        locals: ["faculty"],
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
            "column": 852
          }
        },
        "moduleName": "frontend/templates/my-settings.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"id","my_settings");
        dom.setAttribute(el1,"class","animated");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createElement("form");
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","form-group row");
        var el5 = dom.createElement("h2");
        dom.setAttribute(el5,"class","text-center text-uppercase");
        var el6 = dom.createTextNode("Вы");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","text-center sex");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","form-group row");
        var el5 = dom.createElement("h2");
        dom.setAttribute(el5,"class","text-center text-uppercase");
        var el6 = dom.createTextNode("Ваш факультет");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","form-group row");
        var el5 = dom.createElement("h2");
        dom.setAttribute(el5,"class","text-center text-uppercase");
        var el6 = dom.createTextNode("Ваш ник");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","form-group text-center actions");
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"id","save_my_settings");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-default text-uppercase");
        var el6 = dom.createTextNode(" Сохранить настройки");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 0, 0]);
        var element1 = dom.childAt(element0, [0, 1]);
        var element2 = dom.childAt(element0, [3, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element1,0,0);
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [2]),1,1);
        morphs[4] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [
        ["inline","sex-component",[],["value",["subexpr","@mut",[["get","model.my_sex",["loc",[null,[1,197],[1,209]]]]],[],[]],"sex","male","title","Парень"],["loc",[null,[1,175],[1,237]]]],
        ["inline","sex-component",[],["value",["subexpr","@mut",[["get","model.my_sex",["loc",[null,[1,259],[1,271]]]]],[],[]],"sex","female","title","Девушка"],["loc",[null,[1,237],[1,302]]]],
        ["block","each",[["get","faculties",["loc",[null,[1,418],[1,427]]]]],[],0,null,["loc",[null,[1,399],[1,519]]]],
        ["inline","nickname-input",[],["value",["subexpr","@mut",[["get","model.nickname",["loc",[null,[1,627],[1,641]]]]],[],[]]],["loc",[null,[1,604],[1,643]]]],
        ["element","action",["save"],[],["loc",[null,[1,723],[1,740]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});