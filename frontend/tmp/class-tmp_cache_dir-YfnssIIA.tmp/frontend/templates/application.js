define('frontend/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 1004
              },
              "end": {
                "line": 1,
                "column": 1114
              }
            },
            "moduleName": "frontend/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","fa fa-user fa-3x");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 1225
              },
              "end": {
                "line": 1,
                "column": 1344
              }
            },
            "moduleName": "frontend/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","fa fa-user-secret fa-3x");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      var child2 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 1462
              },
              "end": {
                "line": 1,
                "column": 1572
              }
            },
            "moduleName": "frontend/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","fa fa-search fa-3x");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

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
              "column": 845
            },
            "end": {
              "line": 1,
              "column": 1644
            }
          },
          "moduleName": "frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-lg-10 col-md-9 col-sm-12 col-xs-12 text-center");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","steps");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-4 col-md-4 col-sm-4 col-xs-4 step");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4,"class","hidden-xs");
          var el5 = dom.createTextNode("Ваши настройки");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-4 col-md-4 col-sm-4 col-xs-4 step");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4,"class","hidden-xs");
          var el5 = dom.createTextNode("Настройки собеседника");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-4 col-md-4 col-sm-4 col-xs-4 step");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4,"class","hidden-xs");
          var el5 = dom.createTextNode("Поиск собеседника");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [0, 0]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [0]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [2]),0,0);
          return morphs;
        },
        statements: [
          ["block","link-to",["my_settings"],["tagName","button","class","btn btn-default btn-circle"],0,null,["loc",[null,[1,1004],[1,1126]]]],
          ["block","link-to",["user_settings"],["tagName","button","class","btn btn-default btn-circle"],1,null,["loc",[null,[1,1225],[1,1356]]]],
          ["block","link-to",["searching"],["tagName","button","class","btn btn-default btn-circle"],2,null,["loc",[null,[1,1462],[1,1584]]]]
        ],
        locals: [],
        templates: [child0, child1, child2]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 1644
            },
            "end": {
              "line": 1,
              "column": 1971
            }
          },
          "moduleName": "frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-lg-8 col-md-7 col-sm-12 col-xs-12 chat-tools");
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","steps");
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","col-lg-12 col-md-12 col-sm-12 col-xs-12 step text-center");
          var el4 = dom.createElement("button");
          dom.setAttribute(el4,"class","btn btn-default btn-circle");
          var el5 = dom.createElement("i");
          dom.setAttribute(el5,"class","fa fa-stop fa-3x");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4,"class","hidden-xs");
          var el5 = dom.createTextNode("Завершить разговор");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0, 0, 0, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["endDialog"],[],["loc",[null,[1,1811],[1,1833]]]]
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
            "column": 2033
          }
        },
        "moduleName": "frontend/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1,"class","navbar navbar-default");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container-fluid");
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-header");
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"aria-expanded","false");
        dom.setAttribute(el4,"data-target","#bs-collapse");
        dom.setAttribute(el4,"data-toggle","collapse");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"class","navbar-toggle collapsed");
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"id","bs-collapse");
        dom.setAttribute(el3,"class","collapse navbar-collapse");
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","navbar-text navbar-left");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-code-fork");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" 4.4");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4,"class","navbar-text navbar-right");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-user");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"id","connectCounter");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Онлайн");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-lg-2 col-md-3 col-sm-12 col-xs-12 logo text-center hidden-xs");
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","center-block");
        var el4 = dom.createTextNode("NSUMINT");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("small");
        var el4 = dom.createTextNode("Анонимный чат студентов НГУ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 0, 1, 1]),3,3);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","connectCounter",["loc",[null,[1,603],[1,621]]]],
        ["block","unless",[["get","isChatting",["loc",[null,[1,855],[1,865]]]]],[],0,1,["loc",[null,[1,845],[1,1982]]]],
        ["content","outlet",["loc",[null,[1,2017],[1,2027]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});