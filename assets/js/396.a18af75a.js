(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{634:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"graphqlservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphqlservice","aria-hidden":"true"}},[t._v("#")]),t._v(" GraphQLService "),a("Badge",{attrs:{text:"Service",type:"service"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("hr"),t._v(" "),t._m(5),t._v(" "),a("hr"),t._v(" "),t._m(6),t._v(" "),a("hr"),t._v(" "),t._m(7),t._v(" "),a("hr"),t._v(" "),t._m(8),t._v(" "),a("hr"),t._v(" "),t._m(9),t._v(" "),a("hr"),t._v(" "),t._m(10)])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { GraphQLService } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/graphql"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.15.0/packages/graphql/src/services/GraphQLService.ts#L0-L0"}},[t._v("/packages/graphql/src/services/GraphQLService.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"typescript-lang "},[a("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" GraphQLService "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    httpPort"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),t._v(" | "),a("span",{staticClass:"token keyword"},[t._v("number")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("constructor")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("expressApp"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/common/mvc/decorators/class/ExpressApplication.html"}},[a("span",{staticClass:"token"},[t._v("ExpressApplication")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" httpServer"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/common/server/decorators/HttpServer.html"}},[a("span",{staticClass:"token"},[t._v("HttpServer")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" injectorService"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" InjectorService"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n    "),a("span",{staticClass:"token function"},[t._v("createServer")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("id"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" settings"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/graphql/interfaces/IGraphQLSettings.html"}},[a("span",{staticClass:"token"},[t._v("IGraphQLSettings")])]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Promise<"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token keyword"},[t._v("any")]),t._v(">"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n    "),a("span",{staticClass:"token function"},[t._v("createSchema")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("buildSchemaOptions"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" BuildSchemaOptions"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Promise<"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("GraphQLSchema>"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n    "),a("span",{staticClass:"token function"},[t._v("get")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("id?"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" ApolloServer | undefined"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n    "),a("span",{staticClass:"token function"},[t._v("getSchema")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("id?"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" GraphQLSchema | undefined"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n    "),a("span",{staticClass:"token function"},[t._v("has")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("id?"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("boolean")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("protected")]),t._v(" "),a("span",{staticClass:"token function"},[t._v("getResolvers")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("a",{attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{staticClass:"token"},[t._v("Type")])]),t._v("<"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token keyword"},[t._v("any")]),t._v(">"),a("span",{staticClass:"token punctuation"},[t._v(";")]),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members","aria-hidden":"true"}},[this._v("#")]),this._v(" Members")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("pre",[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[this._v("httpPort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("string")]),this._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("number")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("pre",[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/graphql/interfaces/IGraphQLSettings.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IGraphQLSettings")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("pre",[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSchema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buildSchemaOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BuildSchemaOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("GraphQLSchema>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),t._v(" "),a("p",[t._v("Create a new type-graphql Schema and bind it with Ts.ED injector.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("pre",[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ApolloServer | undefined")])])]),t._v(" "),a("p",[t._v("Get an instance of ApolloServer from his id")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("pre",[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSchema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GraphQLSchema | undefined")])])]),t._v(" "),a("p",[t._v("Get an instance of GraphQL schema from his id")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("pre",[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("pre",[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResolvers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])])])])])}],!1,null,null,null);s.default=e.exports}}]);