define('frontend/templates/searching', ['exports'], function (exports) {

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
              "column": 125
            },
            "end": {
              "line": 1,
              "column": 893
            }
          },
          "moduleName": "frontend/templates/searching.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          dom.setNamespace("http://www.w3.org/2000/svg");
          var el1 = dom.createElement("svg");
          dom.setAttribute(el1,"viewbox","0 0 100 100");
          dom.setAttribute(el1,"xmlns","http://www.w3.org/2000/svg");
          var el2 = dom.createElement("g");
          dom.setAttribute(el2,"class","anim-0");
          var el3 = dom.createElement("circle");
          dom.setAttribute(el3,"cx","50");
          dom.setAttribute(el3,"cy","50");
          dom.setAttribute(el3,"fill","#3CB371");
          dom.setAttribute(el3,"r","50");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("g");
          dom.setAttribute(el2,"class","anim-1");
          var el3 = dom.createElement("circle");
          dom.setAttribute(el3,"cx","50");
          dom.setAttribute(el3,"cy","50");
          dom.setAttribute(el3,"fill","white");
          dom.setAttribute(el3,"r","5");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("g");
          dom.setAttribute(el2,"class","anim-2");
          var el3 = dom.createElement("circle");
          dom.setAttribute(el3,"cx","75");
          dom.setAttribute(el3,"cy","50");
          dom.setAttribute(el3,"fill","white");
          dom.setAttribute(el3,"r","5");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("line");
          dom.setAttribute(el3,"stroke","white");
          dom.setAttribute(el3,"stroke-width","3");
          dom.setAttribute(el3,"x1","25");
          dom.setAttribute(el3,"x2","75");
          dom.setAttribute(el3,"y1","50");
          dom.setAttribute(el3,"y2","50");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("g");
          dom.setAttribute(el2,"class","anim-3");
          var el3 = dom.createElement("circle");
          dom.setAttribute(el3,"cx","50");
          dom.setAttribute(el3,"cy","25");
          dom.setAttribute(el3,"fill","white");
          dom.setAttribute(el3,"r","5");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("line");
          dom.setAttribute(el3,"stroke","white");
          dom.setAttribute(el3,"stroke-width","3");
          dom.setAttribute(el3,"x1","50");
          dom.setAttribute(el3,"x2","25");
          dom.setAttribute(el3,"y1","25");
          dom.setAttribute(el3,"y2","75");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("line");
          dom.setAttribute(el3,"stroke","white");
          dom.setAttribute(el3,"stroke-width","3");
          dom.setAttribute(el3,"x1","50");
          dom.setAttribute(el3,"x2","75");
          dom.setAttribute(el3,"y1","25");
          dom.setAttribute(el3,"y2","75");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("g");
          dom.setAttribute(el2,"class","anim-4");
          var el3 = dom.createElement("circle");
          dom.setAttribute(el3,"cx","75");
          dom.setAttribute(el3,"cy","25");
          dom.setAttribute(el3,"fill","white");
          dom.setAttribute(el3,"r","5");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("line");
          dom.setAttribute(el3,"stroke","white");
          dom.setAttribute(el3,"stroke-width","3");
          dom.setAttribute(el3,"x1","75");
          dom.setAttribute(el3,"x2","25");
          dom.setAttribute(el3,"y1","25");
          dom.setAttribute(el3,"y2","25");
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
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 917
            },
            "end": {
              "line": 1,
              "column": 1050
            }
          },
          "moduleName": "frontend/templates/searching.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"type","button");
          dom.setAttribute(el1,"class","btn btn-default text-uppercase");
          var el2 = dom.createTextNode(" Остановить поиск");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [
          ["element","action",["stopSearching"],[],["loc",[null,[1,944],[1,970]]]]
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
              "column": 1050
            },
            "end": {
              "line": 1,
              "column": 1201
            }
          },
          "moduleName": "frontend/templates/searching.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","button tools");
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"type","button");
          dom.setAttribute(el2,"class","btn btn-default text-uppercase");
          var el3 = dom.createTextNode(" Начать поиск");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["startSearching"],[],["loc",[null,[1,1092],[1,1119]]]]
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
            "column": 1230
          }
        },
        "moduleName": "frontend/templates/searching.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"id","searching");
        dom.setAttribute(el1,"class","animated");
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container text-center");
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3,"class","text-uppercase");
        var el4 = dom.createTextNode("поиск собеседника");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element2,1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [2]),0,0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","isSearching",["loc",[null,[1,131],[1,142]]]]],[],0,null,["loc",[null,[1,125],[1,900]]]],
        ["block","if",[["get","isSearching",["loc",[null,[1,923],[1,934]]]]],[],1,2,["loc",[null,[1,917],[1,1208]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});