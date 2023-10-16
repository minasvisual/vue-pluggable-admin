import { openBlock, createElementBlock, createElementVNode, createCommentVNode, ref as ref$1, watch, computed, resolveComponent, withModifiers, createVNode, Fragment, renderList, normalizeClass, toDisplayString, mergeProps, toHandlers, unref, createBlock, withCtx, renderSlot, inject, reactive, onBeforeMount, onMounted, onUnmounted, createTextVNode, normalizeProps, guardReactiveProps, isRef, nextTick, onBeforeUnmount, withKeys, resolveDynamicComponent, withDirectives, vModelText } from 'vue';
import _ from 'lodash';
import axios from 'axios';
import deepmerge from 'deepmerge';
import moment from 'moment';
import { createInput } from '@formkit/vue';

const _hoisted_1$v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
};
const _hoisted_2$r = /*#__PURE__*/createElementVNode("path", { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" }, null, -1 /* HOISTED */);
const _hoisted_3$e = [
  _hoisted_2$r
];

function render$h(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_3$e))
}

const script$x = {};


script$x.render = render$h;
script$x.__file = "src/components/icons/ChevronLeft.vue";

const _hoisted_1$u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
};
const _hoisted_2$q = /*#__PURE__*/createElementVNode("path", { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" }, null, -1 /* HOISTED */);

function render$g(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$u, [
    createCommentVNode("! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
    _hoisted_2$q
  ]))
}

const script$w = {};


script$w.render = render$g;
script$w.__file = "src/components/icons/ChevronRight.vue";

const _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
};
const _hoisted_2$p = /*#__PURE__*/createElementVNode("path", { d: "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }, null, -1 /* HOISTED */);

function render$f(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$t, [
    createCommentVNode("! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
    _hoisted_2$p
  ]))
}

const script$v = {};


script$v.render = render$f;
script$v.__file = "src/components/icons/ArrowDown.vue";

const _hoisted_1$s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
};
const _hoisted_2$o = /*#__PURE__*/createElementVNode("path", { d: "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" }, null, -1 /* HOISTED */);

function render$e(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$s, [
    createCommentVNode("! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
    _hoisted_2$o
  ]))
}

const script$u = {};


script$u.render = render$e;
script$u.__file = "src/components/icons/ArrowUp.vue";

const _hoisted_1$r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
const _hoisted_2$n = /*#__PURE__*/createElementVNode("path", { d: "M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" }, null, -1 /* HOISTED */);

function render$d(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$r, [
    createCommentVNode("! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
    _hoisted_2$n
  ]))
}

const script$t = {};


script$t.render = render$d;
script$t.__file = "src/components/icons/Pencil.vue";

const _hoisted_1$q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
};
const _hoisted_2$m = /*#__PURE__*/createElementVNode("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }, null, -1 /* HOISTED */);

function render$c(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$q, [
    createCommentVNode("! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
    _hoisted_2$m
  ]))
}

const script$s = {};


script$s.render = render$c;
script$s.__file = "src/components/icons/Plus.vue";

const _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
const _hoisted_2$l = /*#__PURE__*/createElementVNode("path", { d: "M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" }, null, -1 /* HOISTED */);

function render$b(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$p, [
    createCommentVNode("! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
    _hoisted_2$l
  ]))
}

const script$r = {};


script$r.render = render$b;
script$r.__file = "src/components/icons/Refresh.vue";

const _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
};
const _hoisted_2$k = /*#__PURE__*/createElementVNode("path", { d: "M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" }, null, -1 /* HOISTED */);

function render$a(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$o, [
    createCommentVNode("! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. "),
    _hoisted_2$k
  ]))
}

const script$q = {};


script$q.render = render$a;
script$q.__file = "src/components/icons/Trash.vue";

const _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  viewBox: "0 0 512 512"
};
const _hoisted_2$j = /*#__PURE__*/createElementVNode("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" }, null, -1 /* HOISTED */);
const _hoisted_3$d = [
  _hoisted_2$j
];

function render$9(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_3$d))
}

const script$p = {};


script$p.render = render$9;
script$p.__file = "src/components/icons/MinusCircle.vue";

const _hoisted_1$m = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  viewBox: "0 0 512 512"
};
const _hoisted_2$i = /*#__PURE__*/createElementVNode("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" }, null, -1 /* HOISTED */);
const _hoisted_3$c = [
  _hoisted_2$i
];

function render$8(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$c))
}

const script$o = {};


script$o.render = render$8;
script$o.__file = "src/components/icons/PlusCircle.vue";

var script$n = { 
    components: {  ChevronRightIcon: script$w, ChevronLeftIcon: script$x },
    props:{
      pages: {
        type: Number
      },
      actual: {
        type: Number,
        default: 1
      },
    },
    setup(props, { emit }){
      
      const _actual = ref$1(props.actual);   
      const _pages = ref$1(props.pages);   

      watch(_pages, (nil) => {
        console.log('novo pages', nil);
      });

      let hasPrev = computed(() => _actual.value > 1);
      let hasNext = computed(() => _actual.value < _pages.value);
      let pageNums = computed(() => {
        let init =  _pages.value > 5; 
        let ends =  _pages.value > 10; 
        let pg = init && ends && _actual.value > 5 && _actual.value < (_pages.value - 5) ? [_actual.value]:[]; 
        return [ ..._.range(1, ( init ? 5:_pages.value)), ...pg, ..._.range( (ends ? (_pages.value - 5):_pages.value), _pages.value)] 
      });
      
      const prev = () => {
        _actual.value = _actual.value > 1 ? (_actual.value - 1) : _actual.value; 
        console.log(
          'prev', typeof _actual.value , 1
        );
        emit('change', _actual.value);
      };

      const next = () => { 
        console.log(
          'next', _actual.value , _pages.value
        );
        _actual.value = _actual.value < _pages.value ? (_actual.value + 1) : _actual.value; 
      
        emit('change', _actual.value);
      };

      const change = (num) => {
        _actual.value = num;
        emit('change', _actual.value);
      };
           
      return {
        change,
        next,
        prev,
        hasPrev,
        hasNext,
        _,
        _actual,
        _pages,
        pageNums
      }
    },
    mounted(){
      this.$watch('pages', () => {
        this._pages = (this.pages + 1);
      }, { immediate: true });
    }
  };

const _hoisted_1$l = { "aria-label": "Page navigation" };
const _hoisted_2$h = { class: "flex justify-center list-style-none" };
const _hoisted_3$b = {
  key: 0,
  class: "page-item"
};
const _hoisted_4$9 = { "aria-hidden": "true" };
const _hoisted_5$4 = ["onClick"];
const _hoisted_6$4 = {
  key: 1,
  class: "page-item"
};
const _hoisted_7$2 = {
  "aria-hidden": "true",
  class: "text-md"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronLeftIcon = resolveComponent("ChevronLeftIcon");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");

  return (openBlock(), createElementBlock("div", _hoisted_1$l, [
    createElementVNode("ul", _hoisted_2$h, [
      ($setup.hasPrev)
        ? (openBlock(), createElementBlock("li", _hoisted_3$b, [
            createElementVNode("a", {
              class: "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none cursor-pointer",
              "aria-label": "Previous",
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => ($setup.prev && $setup.prev(...args)), ["prevent"]))
            }, [
              createElementVNode("span", _hoisted_4$9, [
                createVNode(_component_ChevronLeftIcon, {
                  class: "h-6 w-6",
                  "aria-hidden": "true"
                })
              ])
            ])
          ]))
        : createCommentVNode("v-if", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.pageNums, (i) => {
        return (openBlock(), createElementBlock("li", {
          class: normalizeClass(["page-item", { 'active': $setup._actual === i }]),
          key: i
        }, [
          createElementVNode("a", {
            class: normalizeClass(["page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer", { 'bg-blue-600 text-white ': $setup._actual === i, 'bg-transparent text-teal-900': $setup._actual != i }]),
            onClick: withModifiers(() => $setup.change(i), ["prevent"])
          }, toDisplayString(i), 11 /* TEXT, CLASS, PROPS */, _hoisted_5$4)
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */)),
      ($setup.hasNext)
        ? (openBlock(), createElementBlock("li", _hoisted_6$4, [
            createElementVNode("a", {
              class: "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer",
              "aria-label": "Next",
              onClick: _cache[1] || (_cache[1] = withModifiers((...args) => ($setup.next && $setup.next(...args)), ["prevent"]))
            }, [
              createElementVNode("span", _hoisted_7$2, [
                createVNode(_component_ChevronRightIcon, {
                  class: "h-6 w-6",
                  "aria-hidden": "true"
                })
              ])
            ])
          ]))
        : createCommentVNode("v-if", true)
    ])
  ]))
}

script$n.render = render$7;
script$n.__file = "src/components/common/Pagination.vue";

var script$m = {
    props:['data', 'cell'],
    data(){ return {
        formopen: false,
        pic: false
    }},
    methods: {
        replaceByDefault(e) {
            e.target.src = '';
        },
        showModal(item){ 
           this.$emit("click", this.data);
           this.pic = item;
           this.formopen = true;
        }
    }
};

const _hoisted_1$k = ["src"];
const _hoisted_2$g = {
  key: 0,
  class: "modal fixed w-full h-full bg-black/20 left-0 top-0"
};
const _hoisted_3$a = { class: "absolute -translate-x-1/2 left-1/2 bg-white p-4 rounded-lg my-2 text center" };
const _hoisted_4$8 = ["src"];

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, [
    createElementVNode("img", {
      onClick: _cache[0] || (_cache[0] = $event => ($options.showModal($props.data))),
      src: $props.data,
      style: {"height":"30px","width":"auto"},
      onError: _cache[1] || (_cache[1] = (...args) => ($options.replaceByDefault && $options.replaceByDefault(...args)))
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$k),
    ($data.formopen)
      ? (openBlock(), createElementBlock("div", _hoisted_2$g, [
          createElementVNode("div", _hoisted_3$a, [
            createElementVNode("button", {
              onClick: _cache[2] || (_cache[2] = e => $data.formopen = false),
              class: "absolute right-0 top-0"
            }, "✖"),
            createElementVNode("img", { src: $data.pic }, null, 8 /* PROPS */, _hoisted_4$8)
          ])
        ]))
      : createCommentVNode("v-if", true)
  ]))
}

script$m.render = render$6;
script$m.__file = "src/components/tables/image.vue";

var script$l = {
    props:['data', 'cell'],
    data(){ return {
        valid: true,
        model: []
    }},
    mounted () {
      this.checkFormat(this.data);
    },
    methods:{
        checkFormat(data){
            if( data === null || data === undefined) 
            this.model = [];
            if( Array.isArray(data) ){
            this.valid = true;
            this.model = data;
            }else if( typeof data == 'string' && data.includes('[') ){
                try {
                    this.model = JSON.parse(data);
                    this.valid = true;
                } catch (e) {
                    this.valid = false;
                }
            }else {
                this.valid = false;
            }
        }
    }
};

const _hoisted_1$j = { key: 0 };
const _hoisted_2$f = { key: 1 };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("span", null, [
    ($data.valid)
      ? (openBlock(), createElementBlock("span", _hoisted_1$j, toDisplayString($data.model && $data.model.join(', ')), 1 /* TEXT */))
      : (openBlock(), createElementBlock("span", _hoisted_2$f, "Invalid data array"))
  ]))
}

script$l.render = render$5;
script$l.__file = "src/components/tables/tags.vue";

const { has: has$1, sortBy, get: get$2, isNil: isNil$1, isObject, omit, isEqual, capitalize, round } = _;
 
// const sendType = (cell, row, data) => {
//     if( cell?.action?.source == 'cell')
//         return cell
//     else if( cell?.action?.source == 'row')
//         return { ...row, [cell.key]: data }
//     else if( cell?.action?.source == 'field')
//         return { [cell.key]: data }
//     else if( cell?.action?.source == 'context')
//         return mergeDeep(cell?.action?.data, { overwrite: {api:{ resource:row }}, row: get(row, cell?.action?.id, data) })
//     else if( cell?.action?.source == 'custom')
//         return cell?.action?.data
//     else    
//         return data
// }

const mergeDeep  = (a = {}, b = {}) => {
    return deepmerge(a, b, {
        arrayMerge: (d, s) => {
            return [ ...d, ...s ]
        }
    })
};

const getErrorMessage = (error) => {
    if(error){
        if( get$2(error, 'code', '') == "ECONNREFUSED" ){
            return error.message + "( " + get$2(error, 'config.url') + ")"
        }

        if( has$1(error, 'response.data.message') )
            return get$2(error, 'response.data.message')

        if( get$2(error, 'message') )
            return get$2(error, 'message')

        if( typeof error == 'string' )
            return error
    }
    return ""
};

// const formatModel = (columns=[], data) => {
//     columns.map(i => {
//         if( data[i.prop] && ['date'].includes(i.type) ){ 
//             let format = ( i.type == 'date' ? 'YYYY-MM-DD': 'YYYY-MM-DD\\Thh:mm:ss' )
//             data[i.prop] = formatDate(data[i.prop], format, null, true)
//         } 
//     })
//     return data
// }

// const formatOutput = (columns=[], data) => {
//     console.debug('formatOutput', data)
//     let extractdata = (col = {}, k) =>  {
//         if( col.children && Array.isArray(col.children) )  col.children.map( i => extractdata(i, k))
//         if( get(col, 'name', false) ){
//             if( col.ignored && data[col.name] ) {
//                 console.debug('formatOutput ignored', col)
//                 data = omit(data, [col.name]) 
//             }
//         }
//     }
//     columns.map((col, k) => {
//             extractdata(col, k)
//     })
//     console.debug('formatOutput out', data)
//     return data
// }

const formatDate = function(value, format, from, utc=false) {
    if (value) {
      let date = moment(String(value), from);
      // console.log('formatDate', value, date)
      if(utc) date = date.utc();
      return date.format(format)
    }
};

const interpolate = (string, scope, def) => {
    if( typeof string !== 'string' ) return string; 

    return string.replace(/\{([^}]*)}/g, (r,k) => get$2(scope, k, (def ? def:'{'+k+'}')) );
};

const queryString = (params, join, data) => {
    let rtn = '';
    let arrQuery = [];
    if( isObject(params) && Object.keys(params).length > 0 ){
        Object.keys(params).map(k => {
            if( Array.isArray(params[k]) )
                params[k].map(i => arrQuery.push([ interpolate(k, data), interpolate(i, data)]) );
            else
                arrQuery.push([interpolate(k, data), interpolate(params[k], data)]);
        });

        rtn = join+new URLSearchParams( arrQuery );
    }
    return rtn
};

const filterParams = (api, queryInfo) => { 
    let { page, pageSize, sort, filters } = queryInfo || {};
    let { params = {}, pagination = {} } = api || {};
    if( !isNil$1(page) && has$1(pagination, 'pageField') )
        params[ pagination.pageField || 'page' ] = page;
    if( !isNil$1(pageSize) && has$1(pagination, 'limitField') )
        params[ pagination.limitField || 'limit'] = pageSize;
    if( sort && !isNil$1(sort.prop) && !isNil$1(sort.order) && has$1(pagination, 'sortField') && has$1(pagination, 'sortExp') ){
        let pagData = {prop: sort.prop, sort: sort.order == 'ascending'? get$2(pagination,'sortAscChar','asc'): get$2(pagination, 'sortDescChar', 'desc')};
        params[ pagination.sortField || 'order' ] = interpolate( get$2(pagination, 'sortExp', '{prop},{order}'), pagData);
    }

    if( get$2(queryInfo, 'filters', []).length > 0 ){
      for(let i = 0; i < get$2(queryInfo, 'filters', []).length; i++ ){  
        let filterField = interpolate(
          get$2(filters[i], 'filterField', (pagination?.filterField || 'filter')), 
          get$2(filters, '[0]', {}) 
        );
        let filterExp = get$2(filters[i], 'filterExp', (pagination?.filterExp || '{prop},like,%{value}%'));
        if ( !params[filterField] ) params[ filterField ] = [];
        if( has$1(filters, `[${i}].prop`) && has$1(filters, `[${i}].value`) && filters[i].value && has$1(pagination, 'filterField') && (has$1(pagination, 'filterExp') || has$1(filters[i], 'filterExp')) )
            params[ filterField ].push( interpolate(filterExp, filters[i]) );
      }
    }else if( has$1(pagination, 'filterField') ){
      let filterField = interpolate(
        get$2(pagination, 'filterField', 'filter'), 
        get$2(filters, '[0]', {}) 
      );
      delete params[ filterField ];
    }
    console.log('filter params', params);
    return {...api, params};
};

// const getLocalStorage = (key, json=true) => {
//     try{
//         let ls = window.localStorage.getItem(key)
//         if( ls ){
//             if( json ) ls = JSON.parse(ls)
//             return ls
//         }
//         return null
//     }catch(e){
//         console.log('getLocalStorage', e)
//         return null
//     }
// }

// const setLocalStorage = (key, data, json=true) => {
//     try{
//         if( key ){
//             if( json ) data = JSON.stringify(data)
            
//             let ls = window.localStorage.setItem(key, data)
//             return ls
//         }
//         return true
//     }catch(e){
//         console.log('setLocalStorage', e)
//         return false
//     }
// }

// const saveSettings = (data) => {
//     try{
//         let settings = getLocalStorage('settings') || {}

//         settings = { ...settings, ...data }

//         setLocalStorage('settings', settings)

//         return settings
//     }catch(e){
        
//         console.log('saveSettings', e)
//     }
// }

// const isRegex = (data, reg, custom=false) => {
//     let rgs ={
//         url: "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.)"
//     }
//     if( !rgs[reg] && !custom ) return ;

//     var regex = new RegExp( rgs[reg] || reg );

//     console.debug('isRegex', rgs[reg], data, regex.test(data))
//     return regex.test(data)
// }  


///
// TABLES
//

const schemaColumns = (properties) => {
  // let columns = [ { label: '', key: "_selected", filter: false, sorter:false, sort: -1 } ]
  let columns = [  ];
  let extractdata = (col = {}, k) =>  {
      if( col.children && Array.isArray(col.children) )  col.children.map( i => extractdata(i, k));
      if( get$2(col, 'config.grid', false) )
          columns.push({
              sort: get$2(col, 'config.sort', k+1),
              key: get$2(col, 'name', col.id),
              label: get$2(col, 'config.label', capitalize((col.label || col.name))),
              type: get$2(col, 'config.type', (col.type || 'text')),
              action: Object.assign( get$2(col, 'config.action',{}), get$2(col, 'attributes', {}) ),
              options: get$2(col, 'options', {}),
              model: get$2(col, 'model', {}),
              overwrite: get$2(col, 'overwrite', {}),
              sorter: get$2(col, 'config.sorter', true),
              filter: get$2(col, 'config.filter', true),
              _classes: get$2(col, 'config.classes'),
              _style: get$2(col, 'config.styles'),
          });
  };
  properties.map((col, k) => {
          extractdata(col, k);
  });

  // columns.push({ label: '', key: 'actions', filter: false, sorter: false })

  return sortBy(columns, ['sort'])
};

const can = (schema, attr, def = true) => {
  return get$2(schema, attr, def)
};

const isSelected = (rows, row) => {
    return rows.findIndex(i => _.isEqual(i, row) ) >= 0
};

const selectionChange = (rows, row, index) => {
    let key = rows.findIndex(i => isEqual(i, row) );
    if( key >= 0 )   
      rows.splice(key, 1);
    else
      rows.push(row);
    return rows
};

const selectionAll = (rows, data) =>{
  if( rows.length == data.length ){
    rows = [];
  }else
    rows = data;
  return rows
};

const fetchQueryInfo = (type, data) => {
  console.debug("fetch query info", type, data);
  let queryInfo = { type };
  if( type == 'sort' ){
    queryInfo.sort = { prop: data.column, order: data.asc === true ? 'ascending':'descending' };
  }
  if( type == 'filter' ){
    queryInfo.filters = Object.keys(data).map((key) => ({ 
      prop: key, value: data[key]?.value, filterExp: data[key]?.filter?.filterExp, filterField: data[key]?.filter?.filterField
    }));
  }
  if( type == 'page' ){
    queryInfo.page = data;
  }
  if( type == 'pageSize' ){
    queryInfo.pageSize = data;
  }
  
 return queryInfo
};

const validateQueryInfo = (queryInfo) => { 
  if( !queryInfo || typeof queryInfo !== 'object' ) return false;
  
  if( ['sizeChange', 'pageSize', 'size', 'pageChange', 'sort', 'filter', 'page', 'init'].includes(queryInfo.type) ){
      if( queryInfo.type == 'filter' &&  !get$2(queryInfo, 'filters[0].prop')  )
          return false;
  }

  return true
};

const calcPages = (totalRows, perPage) => {
  let count = (totalRows || 1) / perPage;
  let rounded = round(count);
  return count > rounded ? rounded + 1 : rounded
};

const normalizeInput = async (row, modifier) => {  
  if( typeof row == 'string' ) return row

  if( row.children && Array.isArray(row.children) )
    for(let idx in row.children){ 
      row.children[idx] = await normalizeInput(row.children[idx], modifier);
    }  

  if( row['$el'] ) return row

  let input = {
    ...row,
    label: _.get(row, 'label', _.capitalize(row?.name ?? '')),
    placeholder: _.get(row, 'placeholder', _.capitalize(row?.name ?? '')),
  };
  if( input['type'] || (!input['$cmp'] && !input['$el'] && !input['type']) ) input['$formkit'] = input.type || 'text';
 
  if( modifier && typeof modifier == 'function') input = await modifier(input);

  return input
};

var script$k = {
    props:['data', 'cell', 'row'],
    methods: {
        replaceContent() {
            if( this.cell?.action?.label ) 
                return interpolate(this.cell.action.label, {data: this.data, action: this.cell.action, row: this.row  })
            else
                return this.data
        }
    }
};

const _hoisted_1$i = ["href", "target", "innerHTML"];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("a", {
    href: $props.cell?.action?.handler,
    target: ($props.cell?.action?.target ?? '_self'),
    innerHTML: $options.replaceContent()
  }, null, 8 /* PROPS */, _hoisted_1$i))
}

script$k.render = render$4;
script$k.__file = "src/components/tables/link.vue";

var script$j = {
    props:['data', 'cell', 'row'],
    computed:{ 
        expression(){ 
            let compiled = _.template(_.get(this.cell, 'action.template', '${ data }'));
            return compiled({data: this.data, cell: this.cell, row: this.row}) 
        }
    }
};

const _hoisted_1$h = ["innerHTML"];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("span", mergeProps({ innerHTML: $options.expression }, toHandlers(_ctx.$listeners, true)), null, 16 /* FULL_PROPS */, _hoisted_1$h))
}

script$j.render = render$3;
script$j.__file = "src/components/tables/expression.vue";

const { get: get$1, set, has, isNil, isEmpty } = _;

var ResourceClass = ({ $axios,  }) => {
  let modelUrl = null;
  let config = {};
  let model = {};
  let schema = [];
  let session = {};
  let sorter = null;
  // table
  let rows = {};
  let total = 1;
 
  // Schema 
  const setConfig = (input) =>{
    config = input;
  };

  const setModel = (modelObj={}) => {
    model = JSON.parse(JSON.stringify(modelObj));
    schema = model.properties;
  };

  const getModel = () => {
    return model
  };

  const loadModel = (url, options = {}) => {
    return $axios.get(url, options).then(({data}) => {
        console.debug("loadModel "+url, data);
        if( !data ) throw { message: "Model Load error" }

        model = JSON.parse(JSON.stringify(data));
        schema = model.properties;
        return model
    })
  };

  const loadModelByUrl = async (path='', file) => {
    try {
      modelUrl = `/models/${path}${file}`;
      let { data } = await $axios.get(modelUrl);
      if( !data.domain )
        throw { message:'Model load error' }

      model = data;

      return data
    } catch (error) {
      console.error("loadModelByUrl", error);
      return false
    }
  };

  const can = (perm) => {
    if( perm == 'getData' ){
      return get$1(model, 'api.getData', true)
    }
    if( perm == 'getDataById' ){
      return get$1(model, 'api.getData', true)
    } 
    if( perm == 'deleteDataById' ){
      return get$1(model, 'api.deleteDataById', true)
    } 

    return true
  };

  const isIt = (perm) => {
    if( perm == 'local' ){
      return get$1(model, 'api.pagination.local', false)
    } 
    if( perm == 'sorter' ){
      return sorter
    }
    if( perm == 'logged' ){
      return get$1(model, 'auth', false)
    }
    return false
  };

  // Data
  const setData = (resource, filters) => { 
    console.log('setData', resource, filters);
    let data = resource;
    let isRow = has(data, `[${model.primaryKey || 'id'}]`) || model.type == 'form';
    let api = get$1(model, 'api', {}); 

    if( isRow ){
      return ( !isNil(api.wrapDataById) ? get$1(data, api.wrapDataById, data): data)
    }else {
      rows = ( !isNil(api.wrapData) ? get$1(data, api.wrapData, data): data);
      total = ( !isNil(api.totalData) ? get$1(data, api.totalData, rows.length): rows.length );

      if( !Array.isArray(rows) ) rows = [rows];
      if( typeof total !== 'number' ) total = rows.length;

      if( filters?.filters && Array.isArray(filters?.filters) && filters?.filters?.length > 0 ){
        rows = filterLocal(filters.filters);
        total = rows.length;
      }

      if( !filters?.sort )
        filters.sort = getSchemaSort();
      if( filters?.sort )
        rows = sortLocal(filters.sort);
 
      return {
        rows,
        total
      }
    }
  };

  const getData = (data={}, config={}) => {
    console.log("called get data", data, config);
    let { api = {} } = model;
    if( api.resource && isEmpty(data.data) ) data.data = api.resource;
    let primaryKey = (model?.primaryKey || 'id');

    let url = '';
    let isRow = has(data, `[${model.primaryKey || 'id'}]`) || model.type == 'form';
    let options = {
      method: ( isRow ? ( isNil(api.methodGetById) ? 'GET':api.methodGetById) : (isNil(api.methodGet) ? 'GET':api.methodGet) ),
      ...config
    }; 
    let sessionConfig = {
      session: model.auth
    };

    let query = queryString(api.params, ( api.rootApi.includes('?') ? '&':'?'), data);

    if( isRow )
      url = `${api.rootApi}${ isNil(api.urlGetById) ? '/{'+primaryKey+'}{query}': api.urlGetById }`;
    else
      url = `${api.rootApi}${ isNil(api.urlGet) ? '{query}': api.urlGet }`;

    if( api.headers )
      options['headers'] = api.headers;
    
    url = interpolate(url, {...data, query });
  
    // console.debug('get data', url, options, sessionConfig)
    return $axios(url, options, sessionConfig)
    .then( data => {  
      data = sessionConfig.wrap === false ? data : data.data;

      if( isRow ){
        return ( !isNil(api.wrapDataById) ? get$1(data, api.wrapDataById, data): data)
      }else {
        rows = ( !isNil(api.wrapData) ? get$1(data, api.wrapData, data): data);
        total = ( !isNil(api.totalData) ? get$1(data, api.totalData, rows.length): rows.length );

        if( !Array.isArray(rows) ) rows = [rows];
        if( typeof total !== 'number' ) total = rows.length;
  
        return {
          rows,
          total
        }
      }
    })
  };
  
  const getDataObject = (data={}, config={}) => { 
    let { api = {} } = model;
    if( api.resource && isEmpty(data.data) ) data.data = api.resource;
 
    let url = '';
    let options = {
      method:  isNil(api.methodGet) ? 'GET': api.methodGet,
      ...config
    }; 
    let sessionConfig = {
      session: model.auth
    };

    let query = queryString(api.params, ( api.rootApi.includes('?') ? '&':'?'), data);
  
    url = `${api.rootApi}${ isNil(api.urlGet) ? '{query}':api.urlGet }`;

    if( api.headers )
      options['headers'] = api.headers;
    
    url = interpolate(url, {...data, query });
    
    console.debug('get data object', url, options, sessionConfig);
    return $axios(url, options, sessionConfig)
        .then(({data}) => {   
          return ( !isNil(api.wrapData) ? get$1(data, api.wrapData, data): data) 
        })
  };
    
  const saveData = async (data, config={}) => { 
    let { api = {} } = model; 
    let resource = api.resource || {};
    let url = '';
    let primaryKey = (isNil(model.primaryKey) ? 'id':model.primaryKey);
    let method = data[primaryKey] ? (isNil(api.methodPatch) ? "PUT":api.methodPatch) : (isNil(api.methodPost) ? "POST":api.methodPost);
    let query = interpolate( 
      queryString(api.params, (api.rootApi.includes('?') ? '&':'?')),  
      { ...data, data: resource }
    );
    let sessionConfig = {
      session: model.auth
    };
  
    if( has(data, primaryKey) && !isNil(data[primaryKey]) )
      url = `${api.rootApi}${ isNil(api.urlPatch) ? '/{id}':api.urlPatch }`;
    else
      url = `${api.rootApi}${ isNil(api.urlPost) ? '': api.urlPost}`;

    console.log("saveData interpolate date", url, {...data, query}, api.resource);
    url = interpolate(url, {...data, query, data: resource});

    let options = {
      method,
      data,
      ...config
    };
    if( api.headers )
      options['headers'] = api.headers;
    
    return $axios(url, options, sessionConfig)
  };

  const deleteData = async (data, config={}) => {
    let { api={} } = model;
    if( api?.resource && isEmpty(data.data) ) data.data = api.resource;
    
    let primaryKey = (model?.primaryKey || 'id');

    if( !has(data, primaryKey) ) return Promise.reject('Id not found')

    let sessionConfig = {
      session: model?.auth
    };
    
    let method = ( isNil(api.methodDelete) ? "DELETE":api.methodDelete );
    let query = interpolate( 
      queryString(api.params, (api.rootApi.includes('?') ? '&':'?')),  
      data
    );
    let url = `${api.rootApi}${ isNil(api.urlDelete) ? '/{id}':api.urlDelete }`;
      
    url = interpolate(url, {...data, query});

    let options = {
      method,
      ...config
    };
    if( api.headers )
      options['headers'] = api.headers;
    
    return $axios(url, options, sessionConfig)
  };

  // Fitlers
  const getSchemaSort = () => {
    return schema.reduce( (pv, i) => {
      if( _.has(i, 'config.sorter') && typeof i.config.sorter == 'string' ){ 
        pv = { prop:i.name, order:i.config.sorter };
      }
      return pv
    }, ({}))
  };

  const paginate = ({ local = false, perPage = 5, page = 1 }) => { 
    console.debug('paginate', rows.length, ((perPage * page) - perPage), (perPage * page));
    if( !local ) return rows
    return  [...rows].slice( ((perPage * page) - perPage), (perPage * page))
  };

  const sorting = ({ local, col, order }) => {
    if( !local ) return rows
    return _.orderBy(rows, col. order)
  };

  const filterLocal = (filters = []) => { 
    return rows.filter(
      (row) => {
        return filters.some(i => String(row[i.prop]).includes(String(i.value)) )
      }
    )
  };

  const sortLocal = (filters) => { 
    console.debug('sortLocal', filters);
    if( !filters || !filters.prop ) return rows

    let sorted = _.sortBy(rows, [filters.prop]);
    sorter = filters.prop;
    if( filters.order === 'descending' ) sorted.reverse();
    return sorted
  };

  // AUTH
  const getSession = () => {
    return session
  };

  const authenticate = ({username, secret, remember}) => {
    try{  
      console.debug('store login'); 

      if( !has(config, 'auth.url_login') ) 
        throw new Error('url login doest exist');
      let input = {
        [get$1(config, 'auth.field_username', 'email')]: username,
        [get$1(config, 'auth.field_secret', 'password')]: secret, 
      };
      if( has(config, 'auth.field_remember') )
        input[get$1(config, 'auth.field_remember', 'remember')] = remember;

      return $axios({
              url: get$1(config, 'auth.url_login'),
              method: get$1(config, 'auth.url_method', 'post'),
              data: input,
              headers: get$1(config, 'api.headers', {}) 
            })
      .then(async (res) => {
          let token = setToken(res);
          let reqAuthData = authRequest(token);
          let user = setUser(res.data);
          session = { request: reqAuthData, logged: true, token, user }; 
          return { token, request: reqAuthData, user, logged: true  }
      })
    }catch(e){ 
      console.error('Resource > authenticate error', e);
      return Promise.reject(e)
    }
  };

  const checkAuth = (force = false) => {
    try{   
      console.debug('Resource > checkAuth start');
      let cfg = _.get(config, 'auth', {});
      let token = getToken(); 
      //Check active session
      if( !token )
        return Promise.reject({message: 'Token not exits'})

      if( _.get(session,'logged') && !force )
        return Promise.resolve(session)

      if( !_.has(cfg, 'logged_url') ){
        return Promise.reject({message: 'Logged url not found'})
      }
      
      let reqAuthData = authRequest(token);
      let url = interpolate( _.get(cfg, 'logged_url'), session);
      
      let options = { 
        url, 
        method: _.get(cfg, 'logged_method', 'get'), 
        ...reqAuthData  
      };

      return $axios(options).then((res) => {
          let user = setUser(res.data);
          
          session = { user, request: reqAuthData, logged: true, token };
          return { token, user, request: reqAuthData, logged: true }
      })
    }catch(e){
      logout();
      console.error('Resource > checkAuth error', e);
      return Promise.reject({message: e.message})
    }
  };

  const getToken = () => { 
    return sessionStorage.getItem(`${_.get(config, 'domain', 'default')}_session`)
  };

  const removeToken = () => { 
    return sessionStorage.removeItem(`${_.get(config, 'domain', 'default')}_session`)
  };

  const setToken = ({data, headers}) => {
    let token = null; 

    let cfg = _.get(config, 'auth', {});
    if( _.get(cfg, 'response_mode', 'body') === 'header' ){
      token = headers[ _.get(cfg, 'response_token', 'access-token') ];
    }else {
      token = _.get(data, _.get(cfg, 'response_token', 'access_token'), null);
    } 

    if( !token ) {
      return new Error ({message: 'token not found', config: cfg, data, headers})
    }

    sessionStorage.setItem(`${_.get(config, 'domain', 'default')}_session`, token);
    return token
  };

  const authRequest = (token) => { 
    let cfg = _.get(config, 'auth', {});

    let tokenRequest = get$1(cfg, 'request_token_expression', '{token}');
    if( _.get(cfg, 'request_mode', 'header') == 'query' )
      return { 
        headers: _.get(config, 'api.headers', {}),
        params:{
          [_.get(cfg, 'request_token', 'access-token')] : interpolate(tokenRequest, {token})
        }
      } 
    else 
      return {
        headers:{
          ..._.get(config, 'api.headers', {}),
          [_.get(cfg, 'request_token', 'access-token')] : interpolate(tokenRequest, {token})
        }
      }
  };
  
  const setUser = (data) => { 
    let cfg = _.get(config, 'auth', {});
    if( !_.has(cfg, 'logged_model') ) return {};

    let { id, name, username, role } = _.get(cfg, 'logged_model');
    let content = _.get(data, _.get(cfg, 'logged_wrap'), data);
    let user = {
      "id": _.get(content, id, "id"),
      "name": _.get(content, name, "name"),
      "username": _.get(content, username, "email"),
      "role": _.get(content, role, "level")
    };

    return user;
  };

  const logout = async (ctx) => {
    _.get(config, 'auth', {});

    let auth = { logged: false };
    let token = getToken();
    console.log("dispatched logout", token);
    if( token ){   
      removeToken();
    }
    session = auth; 
    return auth
  };

  return {
    // Schema
    loadModel,
    loadModelByUrl,
    setModel,
    getModel,
    can,
    isIt,
    // Data
    setConfig,
    getData,
    setData,
    getDataObject,
    saveData,
    deleteData,
    paginate,
    sorting,
    getSchemaSort,
    // Auth
    getSession,
    getToken,
    setToken,
    authenticate,
    checkAuth,
    logout,
  }
};

var script$i = {
  props:['data', 'cell'],
  // mixins: [InputMixin],
  data(){return { 
    Instance: ResourceClass({ $axios: axios }),  
  }},
  computed:{

  },
  async mounted(){
    let { action, model } = this.cell;
    this.Instance = ResourceClass;
    // if( schema )
    //   schema = await this.loadNestedSchema(schema)
      
    // if( action && action.fieldValue )
    //   schema = { api:  }

    if( model && model.api  )
      this.cell.options = await this.getOptions(
          { ...model.api, ...action }, 
          this.data, 
          filterParams(model.api, { filters:[{prop: action.fieldValue, value: this.data}] }) 
      );

    this.renderComponent = true;
  },
  methods:{ 
    forceRerender() {
      this.renderComponent = false;

      this.$nextTick(() => {
        this.renderComponent = true;
      });
    }, 
    async getOptions({ rootApi, fieldLabel, fieldValue, ...data }, model = {}, filter={}){
      try{ 
        // console.debug("input mixin get options", { rootApi, fieldLabel, fieldValue, ...data })
        if( rootApi ){
          this.loading = true;
          data = mergeDeep(data, this.request);
          if( typeof filter == 'object' )
            data = mergeDeep(data, filter);

          rootApi = interpolate(rootApi, { data: model });
 
          this.Instance.setModel({ api: { ...data, rootApi, resource: this.formValues } });

          // console.log("getOoptions", this.Instance.getModel())
          let { rows } = await this.Instance.getData({ data: model }); 

         this.options = rows && rows.map((i, k) => ({ 
              label: get(i, fieldLabel, i.toString()), 
              value: get(i, fieldValue, k)
            }) 
          );
          
          this.loading = false;
          this.forceRerender();
          return this.options
        }
      }catch(e){
          alert('Erro to get data from '+ rootApi);
          console.error('Erro select input', e);
          return this.options
      }
    },
  }
};

const _hoisted_1$g = ["value"];
const _hoisted_2$e = ["value"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.renderComponent)
    ? (openBlock(), createElementBlock("select", {
        key: 0,
        class: "table-select",
        value: $props.data,
        size: "sm",
        disabled: ""
      }, [
        createCommentVNode(" v-on=\"$listeners\" "),
        (openBlock(true), createElementBlock(Fragment, null, renderList(($props.cell.options || _ctx.options), (opt, idx) => {
          return (openBlock(), createElementBlock("option", {
            key: idx,
            value: opt.value
          }, toDisplayString(opt.label), 9 /* TEXT, PROPS */, _hoisted_2$e))
        }), 128 /* KEYED_FRAGMENT */))
      ], 8 /* PROPS */, _hoisted_1$g))
    : createCommentVNode("v-if", true)
}

script$i.render = render$2;
script$i.__file = "src/components/tables/select.vue";

const _hoisted_1$f = {
  key: 0,
  class: "font-semibold text-xs mr-1"
};
const _hoisted_2$d = {
  key: 1,
  class: "font-semibold text-xs ml-1"
};


var script$h = {
  __name: 'toggle',
  props: ['data', 'cell', 'row'],
  setup(__props) {

const { data, cell, row } = __props;
 
    
  const model = ref(row ?? false);

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["flex items-center cursor-pointer py-2", ['cursor-not-allowed']])
  }, [
    (!unref(model))
      ? (openBlock(), createElementBlock("span", _hoisted_1$f, " Off "))
      : createCommentVNode("v-if", true),
    createElementVNode("div", {
      class: normalizeClass(["rounded-full w-10 h-6 p-0.5 bg-gray-300", {'bg-red-500': !unref(model),'bg-green-500': unref(model)}])
    }, [
      createElementVNode("div", {
        class: normalizeClass(["rounded-full w-5 h-5 bg-white transform mx-auto duration-300 ease-in-out", {'-translate-x-2': !unref(model),'translate-x-2': unref(model)}])
      }, null, 2 /* CLASS */)
    ], 2 /* CLASS */),
    (unref(model))
      ? (openBlock(), createElementBlock("span", _hoisted_2$d, " On "))
      : createCommentVNode("v-if", true)
  ]))
}
}

};

script$h.__file = "src/components/tables/toggle.vue";

const _hoisted_1$e = { class: "whitespace-nowrap" };
  
var script$g = {
  __name: 'dates',
  props: ['data', 'cell', 'row'],
  setup(__props) {

  
    

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$e, toDisplayString(unref(formatDate)(__props.data, __props.cell?.action?.format || 'MM/DD/YYYY hh:mm', __props.cell?.action?.from || null, __props.cell?.action?.utc || false)), 1 /* TEXT */))
}
}

};

script$g.__file = "src/components/tables/dates.vue";

const _hoisted_1$d = ["textContent"];
const _hoisted_2$c = ["innerHTML"];
const _hoisted_3$9 = ["textContent"];
// import Actions from './action'
// import BelongsTo from './belongsTo'

var script$f = {
  __name: 'index',
  props: ['data','cell'],
  setup(__props) {

const { data, cell } = __props;
  
const { get } = _;
  
computed(() => {
    return get(cell, 'click.type', 'link')
});  

function emitAction(){
    // if( this.cell.type == 'action' || !this.cell.action || !this.cell.action.event || this.cell.action.event != 'click' ) 
    //     return;

    // this.$bus.$emit(this.cell.action?.handler, this.sendType(this.cell, this.data, this.data[this.cell.key]) )
    // console.log("chamado event", this.cell)
}

return (_ctx, _cache) => {
  const _component_CommonsFragment = resolveComponent("CommonsFragment");

  return (__props.cell.type == 'tags')
    ? (openBlock(), createBlock(_component_CommonsFragment, { key: 0 }, {
        default: withCtx(() => [
          createVNode(script$l, {
            data: __props.data[__props.cell.key],
            cell: __props.cell,
            row: __props.data,
            onClick: emitAction
          }, null, 8 /* PROPS */, ["data", "cell", "row"])
        ]),
        _: 1 /* STABLE */
      }))
    : (__props.cell.type == 'image')
      ? (openBlock(), createBlock(_component_CommonsFragment, { key: 1 }, {
          default: withCtx(() => [
            createVNode(script$m, {
              data: __props.data[__props.cell.key],
              cell: __props.cell,
              row: __props.data,
              onClick: emitAction
            }, null, 8 /* PROPS */, ["data", "cell", "row"])
          ]),
          _: 1 /* STABLE */
        }))
      : (__props.cell.type == 'switch' || __props.cell.type == 'toggle')
        ? (openBlock(), createBlock(_component_CommonsFragment, { key: 2 }, {
            default: withCtx(() => [
              createVNode(script$h, {
                data: __props.data[__props.cell.key],
                cell: __props.cell,
                row: __props.data,
                onClick: emitAction
              }, null, 8 /* PROPS */, ["data", "cell", "row"])
            ]),
            _: 1 /* STABLE */
          }))
        : (__props.cell.type == 'select' || __props.cell.type == 'autocomplete' || __props.cell.type == 'dynamic')
          ? (openBlock(), createBlock(_component_CommonsFragment, {
              key: 3,
              onClick: emitAction
            }, {
              default: withCtx(() => [
                createVNode(script$i, {
                  data: __props.data[__props.cell.key],
                  cell: __props.cell,
                  row: __props.data,
                  onClick: emitAction
                }, null, 8 /* PROPS */, ["data", "cell", "row"])
              ]),
              _: 1 /* STABLE */
            }))
          : (__props.cell.type == 'link')
            ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                createCommentVNode(" <span v-else-if=\"cell.type == 'belongsTo'\">\r\n        <BelongsTo :data=\"data[cell.key]\" :cell=\"cell\" :row=\"data\" v-on:click=\"emitAction\"   />\r\n    </span>  "),
                createVNode(_component_CommonsFragment, null, {
                  default: withCtx(() => [
                    createVNode(script$k, {
                      data: __props.data[__props.cell.key],
                      cell: __props.cell,
                      row: __props.data,
                      onClick: emitAction
                    }, null, 8 /* PROPS */, ["data", "cell", "row"])
                  ]),
                  _: 1 /* STABLE */
                })
              ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
            : (__props.cell.type == 'expression')
              ? (openBlock(), createBlock(_component_CommonsFragment, { key: 5 }, {
                  default: withCtx(() => [
                    createVNode(script$j, {
                      data: __props.data[__props.cell.key],
                      cell: __props.cell,
                      row: __props.data,
                      onClick: emitAction
                    }, null, 8 /* PROPS */, ["data", "cell", "row"])
                  ]),
                  _: 1 /* STABLE */
                }))
              : (__props.cell.type == 'date')
                ? (openBlock(), createElementBlock("span", {
                    key: 6,
                    onClick: emitAction
                  }, [
                    createVNode(script$g, {
                      data: __props.data[__props.cell.key],
                      cell: __props.cell,
                      row: __props.data,
                      onClick: emitAction
                    }, null, 8 /* PROPS */, ["data", "cell", "row"])
                  ]))
                : (__props.cell.type == 'object')
                  ? (openBlock(), createElementBlock(Fragment, { key: 7 }, [
                      createCommentVNode(" <span v-else-if=\"cell.type == 'action'\"  >\r\n        <Actions :data.sync=\"data[cell.key]\" :cell.sync=\"cell\" :row.sync=\"data\" />\r\n    </span> "),
                      createElementVNode("span", {
                        textContent: toDisplayString(unref(get)(__props.data, `row.${__props.cell.action.name}`, __props.data[__props.cell.key])),
                        onClick: emitAction
                      }, null, 8 /* PROPS */, _hoisted_1$d)
                    ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                  : (__props.cell.type == 'html')
                    ? (openBlock(), createElementBlock("span", {
                        key: 8,
                        innerHTML: __props.data[__props.cell.key],
                        onClick: emitAction
                      }, null, 8 /* PROPS */, _hoisted_2$c))
                    : (openBlock(), createElementBlock("span", {
                        key: 9,
                        textContent: toDisplayString(__props.data[__props.cell.key]),
                        onClick: emitAction
                      }, null, 8 /* PROPS */, _hoisted_3$9))
}
}

};

script$f.__file = "src/components/tables/index.vue";

const _hoisted_1$c = {
  class: "spinner",
  viewBox: "0 0 50 50"
};
const _hoisted_2$b = /*#__PURE__*/createElementVNode("circle", {
  class: "path",
  cx: "25",
  cy: "25",
  r: "20",
  fill: "none",
  "stroke-width": "5"
}, null, -1 /* HOISTED */);

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$c, [
    _hoisted_2$b,
    renderSlot(_ctx.$slots, "default")
  ]))
}

const script$e = {};

script$e.render = render$1;
script$e.__file = "src/components/common/Spinner.vue";

const _hoisted_1$b = { class: "relative shadow-md sm:rounded-lg crud-table overflow-x-auto w-full" };
const _hoisted_2$a = { class: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" };
const _hoisted_3$8 = { class: "pd-toolbar py-1" };
const _hoisted_4$7 = ["colspan"];
const _hoisted_5$3 = { class: "headers flex" };
const _hoisted_6$3 = { class: "lelf-col flex items-center justify-left w-1/2" };
const _hoisted_7$1 = { class: "right-col flex items-center justify-center w-1/2" };
const _hoisted_8$1 = { class: "right-col flex items-center justify-end w-1/2" };
const _hoisted_9 = { class: "px-4 flex gap-2" };
const _hoisted_10 = ["checked"];
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "flex items-center gap-2" };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = /*#__PURE__*/createElementVNode("th", { class: "" }, "   ", -1 /* HOISTED */);
const _hoisted_15 = {
  key: 0,
  class: "pd-filters"
};
const _hoisted_16 = /*#__PURE__*/createElementVNode("th", { class: "px-4 flex gap-2" }, "   ", -1 /* HOISTED */);
const _hoisted_17 = { class: "px-2 flex items-center justify-end" };
const _hoisted_18 = {
  key: 0,
  class: "flex items-center justify-end"
};
const _hoisted_19 = /*#__PURE__*/createElementVNode("p", { class: "" }, "Limit", -1 /* HOISTED */);
const _hoisted_20 = { class: "px-4 py-2" };
const _hoisted_21 = ["checked", "onChange"];
const _hoisted_22 = { class: "px-2 py-2 flex justify-end" };
const _hoisted_23 = ["onClick"];
const _hoisted_24 = ["onClick"];
const _hoisted_25 = {
  key: 0,
  class: "pd-subfooter"
};
const _hoisted_26 = /*#__PURE__*/createElementVNode("td", { class: "px-4 py-2" }, "   ", -1 /* HOISTED */);
const _hoisted_27 = { class: "px-2 py-2 flex justify-end" };
const _hoisted_28 = { class: "pd-footer" };
const _hoisted_29 = ["colspan"];
const _hoisted_30 = {
  key: 2,
  class: "text-center h-20"
};
  
  
var script$d = {
  __name: 'Table',
  props: {  
    model:{
      type: Object,
      default: null
    },
    resource: {
      type: Array,
      default: []
    }
  },
  emits: ['create','edit','delete','selected','refresh'],
  setup(__props, { emit }) {

const { resource, model:defModel } = __props;

  
  
  let model = defModel ? ref$1(defModel) : inject('model');  
  inject('session');  
  // const App = useAppContext() 
  let Instance = ResourceClass({ $axios: axios }); 
  let alert = ref$1(null);
  let ready = ref$1(false);
  let schema = ref$1([]);
  let filters = ref$1({});
  let selected = ref$1([]);
  let table = ref$1(resource);
  let perPage = ref$1(5);
  let tableCount = ref$1(1);
  reactive({});
  let queryInfo = reactive({});
  const gete = _.get;

  
      
  let totalCols = computed(() => { 
    return schema.value.length + 2
  });
    
  let totalPages = computed(() => { 
    return calcPages(tableCount.value, perPage.value)
  });

  const deleteEmit = (row) =>{
    // Instance.setModel({ ...model.value })

    if( confirm('Are you sure?') ) { 
      ( Instance.can('deleteDataById') ? Instance.deleteData(row):Promise.resolve('bypassed')).then(
        e => {
          console.log(e);
          // $message("Removido com sucesso")
          emit('delete', { target: 'delete', row });
          getDatasource();
        }
      ).catch(setAlert);
    }else {
     return false
    }
  };

  const selectAll = () => {
    selected.value = selectionAll(selected.value, table.value);
    table.value = [ ...table.value ];
  };

  const deleteSelected = async () => {
    if( confirm('Are you sure?') ) {
      for( let row of selected.value ){
        await Instance.deleteData(row).then(e => { 
          emit('delete', { target: 'delete', row});
        });
      }
      $message("Removido com sucesso");
      getDatasource();
    }
  };

  const toggleSort = (col = {}) => {
    nextTick(() => { 
      // let localPagination = _.get(model.value,'api.pagination.local', false)
      // config.sort = col.key
      col._order = _.isNil(col._order) ? false : !col._order;

      queryInfo = { ...queryInfo, ...fetchQueryInfo('sort', { column: col.key, asc: col._order }) };

      console.debug('toggleSort', queryInfo);
      // if( Instance.isIt('local') )
      //   table.value = Instance.sorting({ local: true, col:[col.key], order:[col._order ? 'desc':'asc']  })
      // else
        getDatasource();
    });
  };

  const changePage = (num) => {
    nextTick(() => { 
      let localPagination = _.get(model.value,'api.pagination.local', false);
      queryInfo = { ...queryInfo, ...fetchQueryInfo('page', num) };

      if( localPagination )
        table.value = Instance.paginate({ local: true, perPage: perPage.value, page:num });
      else
        getDatasource();
    });
  };

  const changeLimit = (v) => {
    nextTick(() => { 
      queryInfo = { ...queryInfo, ...fetchQueryInfo('pageSize', v) };

      getDatasource();
    });
  };

  const setFilter = (col, value) => {
    return changeFilters({ [col.key]:{ value:value, filter: col?.filter }})
  };

  const changeFilters = (e) => {
    nextTick(() => { 
      console.debug("changeFilters change", e); 
      filters.value = Object.assign(filters.value, e);

      Object.keys(filters.value).map((item) => {
        if( !filters.value[item].value )
           filters.value = _.omit(filters.value, [item]);
      });

      queryInfo = { ...queryInfo, ...fetchQueryInfo('filter', filters.value) };
      getDatasource();
    });
  };

  const getDatasource = async (data={}, config={}) => {
    try { 
      if( !Instance.isIt('local') && !validateQueryInfo( JSON.parse(JSON.stringify(queryInfo)) )){
        let api = filterParams({ ...model.value.api }, { ...queryInfo, data: resource.value }); 
        Instance.setModel({ ...model.value, api });
      }
 
      if( Instance.can('getData') ){
        var { rows, total } = await Instance.getData(data, config);  
      } else { 
        var { rows, total } = await Instance.setData(resource, queryInfo);  
      }

      if( Instance.isIt('local') ) { 
        var { rows, total } = await Instance.setData(rows, queryInfo);  
      }
       
      // table.value = localPagination ? 
      table.value = Instance.paginate({ local:true, perPage: perPage.value });
      tableCount.value = total;

      emit('refresh', { target:'refresh', rows });
      console.debug("concluiu  getDatasource");
    } catch (error) {
      console.error(error);
      setAlert({ message:"Error to getData" });
    }
  };

  const modifyColumn = async (input) => {
    if( input.model && typeof input.model == 'string' ) 
      input.model = await Instance.loadModel(input.model);

    if( input.overwrite && typeof input.overwrite == 'object' )
      input.model = mergeDeep(input.model, input.overwrite);
 
    return input
  };

  const setAlert = (rs) => {
    alert.value = {
      message: _.get(rs, 'response.data.message', _.get(rs, 'data.message', rs.message)),
      type: rs && rs.error ? 'error': 'success',
    };
  };

  watch(model, () => {
    Instance.setModel({ ...model.value });

    getDatasource();
  });

  watch(() => selected, (dd) => {  
    emit('selected', { target:'selected', rows:dd.value });
  }, { deep: true });

  onBeforeMount(async () => {
    schema.value = schemaColumns(model.value?.properties); 
    for(let idx in schema.value){
      // console.debug('onBeforeMount', schema.value[idx])
      schema.value[idx] = await modifyColumn(schema.value[idx]);
    }
  });
    
  onMounted(async () => {
    try { 
      // console.error("table mounted", model.value)
      Instance.setModel({ ...model.value });
  
      await getDatasource();

      // $bus.listen('table:refresh', getDatasource)
    } catch (error) {
      console.error("onmounted", error);
    }
    ready.value = true;
  });
 
  onUnmounted(() => {
      // console.error("table unmountedmounted", model.value)
      Instance.setModel({ });
  });

return (_ctx, _cache) => {
  const _component_FormKit = resolveComponent("FormKit");

  return (openBlock(), createElementBlock("div", _hoisted_1$b, [
    (unref(alert) && unref(alert).message)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(`alert w-full text-center ${ unref(alert)?.type || '' }`)
        }, [
          createElementVNode("span", null, toDisplayString(unref(alert).message), 1 /* TEXT */)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (unref(ready))
      ? (openBlock(), createElementBlock("table", {
          key: 1,
          class: normalizeClass(["w-full text-sm text-left text-gray-500 dark:text-gray-400", `${ unref(model).tableClasses || '' }`])
        }, [
          createElementVNode("thead", _hoisted_2$a, [
            createElementVNode("tr", _hoisted_3$8, [
              createElementVNode("th", {
                scope: "col",
                colspan: unref(totalCols),
                class: "py-2"
              }, [
                createElementVNode("div", _hoisted_5$3, [
                  createElementVNode("div", _hoisted_6$3, [
                    (unref(selected).length)
                      ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          class: "px-4 flex items-center whitespace-nowrap",
                          type: "button",
                          onClick: deleteSelected
                        }, [
                          createVNode(unref(script$q), { class: "h-5" }),
                          createTextVNode(" " + toDisplayString(unref(selected).length) + " Selected ", 1 /* TEXT */)
                        ]))
                      : createCommentVNode("v-if", true),
                    createElementVNode("button", {
                      class: "px-4",
                      type: "button",
                      onClick: getDatasource
                    }, [
                      createVNode(unref(script$r), { class: "h-5" })
                    ]),
                    (unref(can)(unref(model), 'canCreate'))
                      ? (openBlock(), createElementBlock("button", {
                          key: 1,
                          class: "px-4",
                          type: "button",
                          onClick: _cache[0] || (_cache[0] = () => emit('create', {target: 'create', row: {}}))
                        }, [
                          createVNode(unref(script$s), { class: "h-5" })
                        ]))
                      : createCommentVNode("v-if", true),
                    renderSlot(_ctx.$slots, "toolbar-left")
                  ]),
                  createElementVNode("div", _hoisted_7$1, [
                    renderSlot(_ctx.$slots, "toolbar-center")
                  ]),
                  createElementVNode("div", _hoisted_8$1, [
                    renderSlot(_ctx.$slots, "toolbar-right")
                  ])
                ])
              ], 8 /* PROPS */, _hoisted_4$7)
            ]),
            createElementVNode("tr", null, [
              createElementVNode("th", _hoisted_9, [
                createElementVNode("input", {
                  type: "checkbox",
                  checked: (unref(selected).length == unref(table).length),
                  onChange: selectAll
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_10),
                createTextVNode(" All ")
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(schema), (col) => {
                return (openBlock(), createElementBlock("th", {
                  scope: "col",
                  class: "px-2 py-1",
                  key: col.key,
                  onClick: () => toggleSort(col)
                }, [
                  createElementVNode("div", _hoisted_12, [
                    createTextVNode(toDisplayString(col.label) + " ", 1 /* TEXT */),
                    (col.sorter && unref(Instance).isIt('sorter') == col.key)
                      ? (openBlock(), createElementBlock("span", _hoisted_13, [
                          (col._order)
                            ? (openBlock(), createBlock(unref(script$u), {
                                key: 0,
                                class: "h-4"
                              }))
                            : (openBlock(), createBlock(unref(script$v), {
                                key: 1,
                                class: "h-4"
                              }))
                        ]))
                      : createCommentVNode("v-if", true)
                  ])
                ], 8 /* PROPS */, _hoisted_11))
              }), 128 /* KEYED_FRAGMENT */)),
              _hoisted_14
            ]),
            (unref(can)(unref(model), 'api.pagination.limitField', false) && unref(can)(unref(model), 'api.pagination.filterExp', false))
              ? (openBlock(), createElementBlock("tr", _hoisted_15, [
                  _hoisted_16,
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(schema), (col) => {
                    return (openBlock(), createElementBlock("th", {
                      scope: "col",
                      class: "px-2",
                      key: col.key
                    }, [
                      (unref(can)(unref(model), 'api.pagination.filterExp', false) && col.filter)
                        ? (openBlock(), createBlock(_component_FormKit, {
                            key: 0,
                            type: unref(gete)(col, 'filter.type', 'search'),
                            delay: 500,
                            "outer-class": "m-0 p-0",
                            "input-class": "w-full p-1",
                            model: unref(gete)(col, 'model', {}),
                            overwrite: unref(gete)(col, 'overwrite', {}),
                            options: unref(gete)(col, 'options', []),
                            onInput: e => setFilter(col, e)
                          }, null, 8 /* PROPS */, ["type", "model", "overwrite", "options", "onInput"]))
                        : createCommentVNode("v-if", true),
                      renderSlot(_ctx.$slots, "header-scope", normalizeProps(guardReactiveProps({col, filters: unref(filters)})))
                    ]))
                  }), 128 /* KEYED_FRAGMENT */)),
                  createElementVNode("th", _hoisted_17, [
                    renderSlot(_ctx.$slots, "header-actions", normalizeProps(guardReactiveProps({schema: unref(schema), filters: unref(filters)}))),
                    (unref(can)(unref(model), 'api.pagination.limitField', false))
                      ? (openBlock(), createElementBlock("span", _hoisted_18, [
                          _hoisted_19,
                          createVNode(_component_FormKit, {
                            "outer-class": "m-0 p-0 pl-2",
                            "input-class": "text-xs",
                            type: "select",
                            modelValue: unref(perPage),
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (isRef(perPage) ? (perPage).value = $event : perPage = $event)),
                            options: [1,5,15,25,50,100,500],
                            onInput: changeLimit
                          }, null, 8 /* PROPS */, ["modelValue"])
                        ]))
                      : createCommentVNode("v-if", true)
                  ])
                ]))
              : createCommentVNode("v-if", true)
          ]),
          createElementVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(table), (row, index) => {
              return (openBlock(), createElementBlock("tr", {
                class: "pd-rows bg-white border-b dark:bg-gray-800 dark:border-gray-700",
                key: index
              }, [
                createElementVNode("td", _hoisted_20, [
                  createElementVNode("input", {
                    type: "checkbox",
                    value: false,
                    checked: unref(isSelected)(unref(selected), row),
                    onChange: $event => (unref(selectionChange)(unref(selected), row))
                  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_21)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(schema), (col) => {
                  return (openBlock(), createElementBlock("td", {
                    class: "px-2 py-2",
                    key: col.key
                  }, [
                    renderSlot(_ctx.$slots, "row-scope", normalizeProps(guardReactiveProps({col, row, index})), () => [
                      createVNode(script$f, {
                        cell: col,
                        data: row
                      }, null, 8 /* PROPS */, ["cell", "data"])
                    ])
                  ]))
                }), 128 /* KEYED_FRAGMENT */)),
                createElementVNode("td", _hoisted_22, [
                  renderSlot(_ctx.$slots, "row-actions", normalizeProps(guardReactiveProps({row, index}))),
                  (unref(can)(unref(model), 'canEdit'))
                    ? (openBlock(), createElementBlock("a", {
                        key: 0,
                        class: "cursor-pointer mr-3",
                        onClick: () => emit('edit', { target: 'edit', row})
                      }, [
                        createVNode(unref(script$t), { class: "h-5" })
                      ], 8 /* PROPS */, _hoisted_23))
                    : createCommentVNode("v-if", true),
                  (unref(can)(unref(model), 'canDelete'))
                    ? (openBlock(), createElementBlock("a", {
                        key: 1,
                        class: "cursor-pointer",
                        onClick: () => deleteEmit(row)
                      }, [
                        createVNode(unref(script$q), { class: "h-5" })
                      ], 8 /* PROPS */, _hoisted_24))
                    : createCommentVNode("v-if", true)
                ])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          createElementVNode("tfoot", null, [
            (unref(can)(unref(model), 'canFooter', false))
              ? (openBlock(), createElementBlock("tr", _hoisted_25, [
                  _hoisted_26,
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(schema), (col) => {
                    return (openBlock(), createElementBlock("td", {
                      class: "px-4 py-2",
                      key: col.key
                    }, [
                      renderSlot(_ctx.$slots, "footer-scope", normalizeProps(guardReactiveProps({col, table: unref(table), filters: unref(filters)})))
                    ]))
                  }), 128 /* KEYED_FRAGMENT */)),
                  createElementVNode("td", _hoisted_27, [
                    renderSlot(_ctx.$slots, "footer-actions", normalizeProps(guardReactiveProps({table: unref(table), filters: unref(filters)})))
                  ])
                ]))
              : createCommentVNode("v-if", true),
            createElementVNode("tr", _hoisted_28, [
              createElementVNode("td", {
                colspan: unref(totalCols),
                class: "w-full pt-4"
              }, [
                renderSlot(_ctx.$slots, "pagination", normalizeProps(guardReactiveProps({totalPages: unref(totalPages), actual:1, changePage: changePage})), () => [
                  (unref(can)(unref(model), 'api.pagination.pageField', false) || unref(can)(unref(model), 'api.pagination.local', false))
                    ? (openBlock(), createBlock(script$n, {
                        key: 0,
                        pages: unref(totalPages),
                        actual: 1,
                        onChange: changePage
                      }, null, 8 /* PROPS */, ["pages"]))
                    : createCommentVNode("v-if", true)
                ])
              ], 8 /* PROPS */, _hoisted_29)
            ])
          ])
        ], 2 /* CLASS */))
      : (openBlock(), createElementBlock("div", _hoisted_30, [
          createVNode(script$e)
        ]))
  ]))
}
}

};

script$d.__file = "src/components/Table.vue";

const _hoisted_1$a = {
  key: 0,
  class: "form"
};
const _hoisted_2$9 = {
  key: 0,
  class: "text-red"
};
const _hoisted_3$7 = { key: 2 };
const _hoisted_4$6 = { key: 3 };

  // let { $axios, $bus, $message } = useNuxtApp() 
  
var script$c = {
  __name: 'Form',
  props: {
    model: {
      type: Object,
      default: () => ({ properties: [] })
    }, 
    data: {
      type: Object,
      default: () => ({})
    },
    resource:{
      type: Object,
      default: () => ({})
    },
  },
  emits: ['saved'],
  setup(__props, { emit }) {

const { model, data, resource } = __props;

  let Instance = ResourceClass({ $axios: axios });
  
  // const App = useAppContext()
  // const Auth = useAuth()
  const schema = ref$1([]); 

  
 
  const save = (payload) => {
    Instance.setModel(JSON.parse(JSON.stringify(model)));
    payload = Object.assign(resource, payload);

    console.debug('Save', payload);
    let exclude = Object.keys(payload).filter(i => i.includes('__'));
    Instance.saveData(_.omit(payload, exclude)).then((rs) => {
      // $message("Saved ")
      res.value = rs;
      emit('saved', rs);

      // $bus.emit('form:created', payload)
    }).catch(err => res.value = _.get(err, 'response.data', err) );
  };

  let row = ref$1(data);
  let res = ref$1({});
  let ready = ref$1(false);
 
  const getDatasource = async (payload={}, config={}) => {
    try { 
      console.debug("chamou to formDatasource", model);  
      let api = filterParams({ ..._.get(model, 'api', {}) }, { data: payload }); 

      Instance.setModel({ ...model, api });

      row.value = await Instance.getDataObject(payload, config);
        
      console.debug("concluiu  getDatasource", api);
    } catch (error) {
      console.error('error formDatarousce', error);
      alert("Error to getData");
    }
  };

  watch(model, (newVal) => {
    console.debug('form wathc', newVal);
    Instance.setModel(JSON.parse(JSON.stringify(newVal))); 
  });
  
  const modifyInput = async (input) => {
    if( input.model && typeof input.model == 'string' ) 
      input.model = await App.loadModel(input.model);
    
    // if( Auth?.session?.request )
    // 	input.model = mergeDeep((input.model || {}), { api:Auth?.session?.request })

    return input
  };
 
  onBeforeMount(async () => {
    try {  
      Instance.setModel(JSON.parse(JSON.stringify(model)));
      // row.value = await Instance.getData(row.value)
 
      // Instance.setModel(model.value)
      // resource.value = await Instance.getData() 

      for(let row of model.properties){ 
        schema.value.push( await normalizeInput(row, modifyInput) );
      } 
    } catch (error) {
      console.error("onmounted", error);
    }
  });

  onMounted(async () => {
    if( model.type == 'form' && Instance.can('getDataById') )
        await getDatasource(resource);
    
    ready.value = true;
  });

  onUnmounted(() => { 
    console.debug("onmounted");
  });

return (_ctx, _cache) => {
  const _component_FormKitSchema = resolveComponent("FormKitSchema");
  const _component_FormKit = resolveComponent("FormKit");

  return (!!unref(row))
    ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
        (unref(res).message)
          ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
              renderSlot(_ctx.$slots, "alert", normalizeProps(guardReactiveProps({ row: unref(row), res: unref(res), model: __props.model })), () => [
                createTextVNode(toDisplayString(unref(res).message), 1 /* TEXT */)
              ])
            ]))
          : createCommentVNode("v-if", true),
        (unref(ready) && schema.value)
          ? (openBlock(), createBlock(_component_FormKit, {
              key: 1,
              type: "form",
              method: "post",
              "submit-label": "Submit",
              "form-class": `w-full ${ __props.model?.formClasses || '' }`,
              actions: unref(can)(__props.model, 'submit'),
              modelValue: unref(row),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (isRef(row) ? (row).value = $event : row = $event)),
              onSubmit: save
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "prefix", normalizeProps(guardReactiveProps({ row: unref(row), res: unref(res), model: __props.model }))),
                createVNode(_component_FormKitSchema, {
                  schema: schema.value,
                  class: "py-2"
                }, null, 8 /* PROPS */, ["schema"]),
                renderSlot(_ctx.$slots, "suffix", normalizeProps(guardReactiveProps({ row: unref(row), res: unref(res), model: __props.model })))
              ]),
              _: 3 /* FORWARDED */
            }, 8 /* PROPS */, ["form-class", "actions", "modelValue"]))
          : (!unref(ready))
            ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
                createVNode(script$e)
              ]))
            : (openBlock(), createElementBlock("div", _hoisted_4$6, [
                renderSlot(_ctx.$slots, "error", normalizeProps(guardReactiveProps({ row: unref(row), res: unref(res), model: __props.model })), () => [
                  createTextVNode(" Schema not found ")
                ])
              ]))
      ]))
    : createCommentVNode("v-if", true)
}
}

};

script$c.__file = "src/components/Form.vue";

const _hoisted_1$9 = {
  key: 0,
  class: "modal fixed w-full h-full bg-black/20 left-0 top-0"
};
const _hoisted_2$8 = { class: "absolute w-1/2 -translate-x-1/2 left-1/2 bg-white p-4 rounded-lg my-2 max-h-[95vh] overflow-y-auto" };


var script$b = {
  __name: 'Flow',
  props: ['schema'],
  setup(__props) {

const { schema } = __props;

 
ref$1(schema); 
const data =  ref$1();

function setData (newVal) {
  data.value = null;
  nextTick(() => {
    data.value = newVal;
  });
}

function doEvent(e){
  // console.log( 'Event received', JSON.stringify(e, null, 2))
  if( e.target == 'create' )
    setData(e.row);
  if( e.target == 'edit' )
    setData(e.row); 
}

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("main", {
    class: normalizeClass(`w-full relative ${ _ctx.$attrs.class || ''}`)
  }, [
    createVNode(script$d, {
      model: __props.schema,
      onCreate: doEvent,
      onEdit: doEvent,
      onDelete: doEvent,
      onSelected: doEvent,
      onRefresh: doEvent
    }, null, 8 /* PROPS */, ["model"]),
    (data.value)
      ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
          createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = e => setData(null)),
            class: "absolute right-0"
          }, "✖"),
          createElementVNode("div", _hoisted_2$8, [
            createVNode(script$c, {
              model: __props.schema,
              data: data.value,
              onSaved: _cache[1] || (_cache[1] = $event => (setData(null)))
            }, null, 8 /* PROPS */, ["model", "data"])
          ])
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}
}

};

script$b.__file = "src/components/Flow.vue";

function render(_ctx, _cache) {
  return renderSlot(_ctx.$slots, "default")
}

const script$a = {};


script$a.render = render;
script$a.__file = "src/components/common/Fragment.vue";

const _hoisted_1$8 = { key: 0 };
const _hoisted_2$7 = {
  key: 1,
  class: "auth-form w-1/3 mx-auto"
};
const _hoisted_3$6 = {
  key: 0,
  class: "text-center"
};
const _hoisted_4$5 = /*#__PURE__*/createElementVNode("h4", { class: "text-center py-4" }, "Project Authentication", -1 /* HOISTED */);
const _hoisted_5$2 = { class: "action-buttons mt-3 flex gap-4" };
const _hoisted_6$2 = ["disabled"];

  
var script$9 = {
  __name: 'Auth',
  props: ['schema', 'config'],
  emits: ['auth:failed','auth:logged','update:schema'],
  setup(__props, { emit }) {

const { schema, config = {} } = __props;
 
  const Instance = ResourceClass({ $axios: axios });
  
  

  let loading = ref$1(false);
  let form = ref$1({});
  let login = ref$1(false);
  let session = ref$1({});
  Instance.setModel(schema);  
  Instance.setConfig(config);  
 
  let hasAuth = computed(() => {
    return _.has(config, 'auth')
  }); 
  
  const doAuth = async (form) => {
    try{
      loading.value = true;
      let res = await Instance.authenticate(form);
      
      return await Instance.checkAuth(true).then(success).catch(error)
    }catch(e){
      console.error( getErrorMessage(e) ); 
      loading.value = false;
    }
  };

  const success = function(res){ 
    console.debug("called success", res);
    session.value = res;

    if( !_.has(session.value, 'token') ) {
      loading.value = false;
      return emit('auth:failed', {message: 'token not found', ...res })
    } 
     
    emit(
      'update:schema', 
      mergeDeep(schema, { api: _.get(session.value, 'request', {}) })
    );
    emit('auth:logged', _.pick(session.value, ['token','user','logged']));

    nextTick(() => {
      loading.value = false;
      login.value = true;
    });
  };
  
  const error = function({ response, message, ...data }){
    // app.message( getErrorMessage({ response, message, ...data }) )
    console.log('Auth Error', message, response, data);
    loading.value = false;
    login.value = false;
    
    emit('auth:failed', {message});
  };

  const logout = () => {
    console.debug("called auth logout");
    loading.value = true;
    return Instance.logout().then(() => {
      loading.value = false;
      login.value = false;
      console.debug("finish auth logout");
    })
  };  
      
  onMounted(async () => {
    try{  
      if( !hasAuth.value || !Instance.isIt('logged') ) {
        console.debug('bypassed auth', hasAuth.value, Instance.isIt('logged') );
        return login.value = true  
      }

      console.debug('auth process start');
      let token = Instance.getToken();
      session.value = Instance.getSession(); 

      loading.value = true;
      if( token && _.get(session.value, 'logged', false) ){
        // emit('auth:logged', session.value)  
        success(session.value);
      }else if( token ){
        await Instance.checkAuth().then(success);
      }else { 
        login.value = false;
        console.debug('show login form'); 
      } 
    }catch(e){
      login.value = false;
      emit('auth:failed', e);
      console.debug('erro mounted auth', e);
      console.error( getErrorMessage(e) );
    } finally {
      loading.value = false; 
    }
  }); 

return (_ctx, _cache) => {
  const _component_FormKit = resolveComponent("FormKit");

  return (openBlock(), createBlock(script$a, null, {
    default: withCtx(() => [
      (unref(login))
        ? (openBlock(), createElementBlock("section", _hoisted_1$8, [
            renderSlot(_ctx.$slots, "default", {
              schema: __props.schema,
              methods: { logout: logout },
              session: unref(session)
            }, () => [
              createTextVNode(" vazio ")
            ])
          ]))
        : (openBlock(), createElementBlock("section", _hoisted_2$7, [
            (unref(loading))
              ? (openBlock(), createElementBlock("h3", _hoisted_3$6, [
                  createVNode(script$e, null, {
                    default: withCtx(() => [
                      createTextVNode(">Authenticating...")
                    ]),
                    _: 1 /* STABLE */
                  })
                ]))
              : (openBlock(), createBlock(_component_FormKit, {
                  key: 1,
                  type: "form",
                  "form-class": "flex flex-col gap-4",
                  method: "post",
                  modelValue: unref(form),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (isRef(form) ? (form).value = $event : form = $event)),
                  onSubmit: doAuth,
                  actions: false
                }, {
                  default: withCtx(({ hasErrors }) => [
                    _hoisted_4$5,
                    createVNode(_component_FormKit, {
                      type: "text",
                      name: "username",
                      placeholder: "Username",
                      validation: "required"
                    }),
                    createVNode(_component_FormKit, {
                      type: "password",
                      name: "secret",
                      placeholder: "Password",
                      validation: "required"
                    }),
                    createVNode(_component_FormKit, {
                      type: "checkbox",
                      name: "remember",
                      label: "Keep logged",
                      wrapperClass: "flex gap-2",
                      innerClass: "w-6"
                    }),
                    createElementVNode("div", _hoisted_5$2, [
                      createElementVNode("button", {
                        type: "button",
                        color: "danger",
                        class: "py-2 px-4 border bg-red-800 text-white rounded hover:text-gray-400",
                        onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('close', { refresh: false })))
                      }, " Cancel "),
                      createElementVNode("button", {
                        type: "submit",
                        color: "success",
                        class: "py-2 px-4 border bg-green-800 text-white rounded hover:text-gray-400",
                        disabled: hasErrors
                      }, " Send ", 8 /* PROPS */, _hoisted_6$2)
                    ])
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["modelValue"]))
          ]))
    ]),
    _: 3 /* FORWARDED */
  }))
}
}

};

script$9.__file = "src/components/Auth.vue";

const _hoisted_1$7 = { class: "tabs" };
const _hoisted_2$6 = { class: "flex my-2 w-full border-b" };
const _hoisted_3$5 = ["onClick"];

  
var script$8 = {
  __name: 'Tabs',
  props: ['tab', 'tabs'],
  setup(__props) {

const { tabs:tabes , tab } = __props;
  
    
  const tabs = ref$1(tabes); 
  const active = ref$1(''); 
  let styleTag = reactive(); 
		
  function changeTab(tb){
    if( tabs.value?.length === 0 ) return ;

    active.value = tb.name;

    if( styleTag ) styleTag.remove();

    const css = `
      ${ tabs.value.map(i => i.name).join(',') }{
        display: none;
      } 
      ${tb.name}{
        ${ tb.enabledStyle ? `${ tb.enabledStyle } ${ tb.enabledStyle.includes('important') ?'':'!important' }` : 'display: flex; flex-direction: column;' }
      }
    `;
    styleTag = document.createElement('style');
    styleTag.appendChild(document.createTextNode(css));
    document.head.appendChild(styleTag);
  }  
  
  onMounted(() => {
		if( tabs.value?.length === 0 ) return ;

		changeTab(tabs.value[0]);
		active.value = tabs.value[0].name;
  });

  onBeforeUnmount(() => {
    styleTag.remove();
  }); 

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("section", _hoisted_1$7, [
    createElementVNode("ul", _hoisted_2$6, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tb, ky) => {
        return (openBlock(), createElementBlock("li", {
          class: "mr-2 -mb-px",
          key: ky
        }, [
          createElementVNode("a", {
            onClick: $event => (changeTab(tb)),
            href: "#",
            class: normalizeClass([{'active': active.value == tb.name }, "inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"])
          }, toDisplayString(tb.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_3$5)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}
}

};

script$8.__file = "src/components/common/Tabs.vue";

var script$7 = {
  __name: 'Section',
  props: ['model','resource'],
  setup(__props) {

const { model, resource:res = [] } = __props;
  
  let Instance = ResourceClass({ $axios:axios });

  
  const ready = ref$1(false);
  const schema = ref$1([{'$el':'h1', 'children':'Hello World'}]);
  let resource = reactive(res);
  
  async function loadData () { 
    let res = await Instance.getData().catch(console.error);
    resource = JSON.parse(JSON.stringify(res));
  }

  onBeforeMount(async () => { 
    try{
      if( typeof model === 'string' ){
        let data = await Instance.loadModel(model); 
        if( data.api?.rootApi )
          await loadData();
        schema.value = data; 
      }else {
        Instance.setModel(model);
        if( model?.api?.rootApi )
          await loadData();
        schema.value = model;
      } 
      ready.value = true;
    } catch(e) {
      console.error('before mont', e);
    }
  });
 
  onMounted(async () => { 
    console.log('mounted section', typeof model); 
  });

return (_ctx, _cache) => {
  const _component_FormKitSchema = resolveComponent("FormKitSchema");

  return (ready.value)
    ? (openBlock(), createBlock(script$a, { key: 0 }, {
        default: withCtx(() => [
          createVNode(_component_FormKitSchema, {
            schema: schema.value?.properties || schema.value,
            data: unref(resource)
          }, null, 8 /* PROPS */, ["schema", "data"])
        ]),
        _: 1 /* STABLE */
      }))
    : createCommentVNode("v-if", true)
}
}

};

script$7.__file = "src/components/layouts/Section.vue";

const _hoisted_1$6 = { key: 1 };
  
  
var script$6 = {
  __name: 'Forms',
  props: ['model','resource'],
  setup(__props) {

const { model, resource:res = {} } = __props;
   
   

  const ready = ref$1(false);
  let schema = ref$1({ });
  let resource = reactive(res);
  let Instance = ResourceClass({ $axios:axios });
  
  onBeforeMount(async () => { 
    try{
      if( typeof model === 'string' ){
        let data = await Instance.loadModel(model);  
        schema.value = data; 
      }else {
        Instance.setModel(model); 
        schema.value = model;
      } 
      ready.value = true;
    } catch(e) {
      console.error('before mont', e);
    }
  });
 
 
  onMounted(async () => { 
    // ready.value = true
  });

return (_ctx, _cache) => {
  const _component_CrudForm = resolveComponent("CrudForm");

  return (ready.value)
    ? (openBlock(), createBlock(script$a, { key: 0 }, {
        default: withCtx(() => [
          (unref(schema).properties)
            ? (openBlock(), createBlock(_component_CrudForm, {
                key: 0,
                model: unref(schema),
                data: unref(resource),
                onSaved: _cache[0] || (_cache[0] = e =>_ctx.$emit('saved', e))
              }, null, 8 /* PROPS */, ["model", "data"]))
            : (openBlock(), createElementBlock("span", _hoisted_1$6, "Properties required"))
        ]),
        _: 1 /* STABLE */
      }))
    : createCommentVNode("v-if", true)
}
}

};

script$6.__file = "src/components/layouts/Forms.vue";

var components = {
  Table: script$d,
  Form: script$c,
  Flow: script$b,
  Tabs: script$8,
  Auth: script$9,
  Section: script$7,
  Forms: script$6,
};

const _hoisted_1$5 = ["data-type"];
const _hoisted_2$5 = { class: "flex flex-col py-2" };
const _hoisted_3$4 = { class: "py-2" };
const _hoisted_4$4 = /*#__PURE__*/createElementVNode("hr", null, null, -1 /* HOISTED */);
 
  
var script$5 = {
  __name: 'grid',
  props: ['context'],
  emits: ['create'],
  setup(__props, { emit }) {

const { context } = __props;

   
   
  const props = computed(() => context.node?.props || {});  

  const model = ref$1({
    ..._.get(props.value, 'model', {}),
    canCreate: _.get(props.value, 'model.canEdit', false),
    canEdit: _.get(props.value, 'model.canEdit', false),
    canDelete: _.get(props.value, 'model.canEdit', false),
  }); 
  const selected = ref$1([]); 
  
  function changed({rows}) { 
    console.log('change', rows);
    selected.value = rows;
    context.node.input(rows);
  }

  function hook({ target, ...data }){ 
    if( target == 'create' && context.attrs.onCreate )
      context.attrs.onCreate({ target, ...data });
    if( target == 'edit' && context.attrs.onEdit )
      context.attrs.onEdit({ target, ...data });
    if( target == 'delete' && context.attrs.onDelete )
      context.attrs.onDelete({ target, ...data });
    if( target == 'refresh' && context.attrs.onRefresh )
      context.attrs.onRefresh({ target, ...data });
  }

  onMounted(() => {
    console.log('grid', context.attrs.onCreate);
    
  });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    "data-type": __props.context.type,
    class: normalizeClass([props.value.outerClass ?? ''])
  }, [
    createElementVNode("div", _hoisted_2$5, [
      createVNode(script$d, {
        resource: [],
        model: model.value,
        onSelected: changed,
        onCreate: hook,
        onEdit: hook,
        onDelete: hook,
        onRefresh: hook
      }, null, 8 /* PROPS */, ["model"]),
      createElementVNode("p", _hoisted_3$4, "Selected: " + toDisplayString(selected.value.length), 1 /* TEXT */)
    ]),
    _hoisted_4$4
  ], 10 /* CLASS, PROPS */, _hoisted_1$5))
}
}

};

script$5.__file = "src/components/inputs/grid.vue";

const _hoisted_1$4 = ["data-type"];
const _hoisted_2$4 = { class: "flex flex-col py-2" };
const _hoisted_3$3 = { class: "py-2" };
const _hoisted_4$3 = /*#__PURE__*/createElementVNode("hr", null, null, -1 /* HOISTED */);
  
  
var script$4 = {
  __name: 'form',
  props: ['context'],
  setup(__props) {

const { context } = __props;

   
  const props = computed(() => context.node?.props || {});  

  const model = ref$1( props.value?.model ); 
  const selected = ref$1([]); 
  
  function changed(rows) { 
    selected.value = rows;
    context.node.input(rows);
  }

  onMounted(() => { 
    
  });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    "data-type": __props.context.type,
    class: normalizeClass([props.value.outerClass ?? ''])
  }, [
    createElementVNode("div", _hoisted_2$4, [
      createVNode(script$c, {
        resource: { [__props.context.node.name]: __props.context.value },
        model: model.value,
        onSaved: changed
      }, null, 8 /* PROPS */, ["resource", "model"]),
      createElementVNode("p", _hoisted_3$3, "Selected: " + toDisplayString(selected.value.length), 1 /* TEXT */)
    ]),
    _hoisted_4$3
  ], 10 /* CLASS, PROPS */, _hoisted_1$4))
}
}

};

script$4.__file = "src/components/inputs/form.vue";

const _hoisted_1$3 = ["data-type"];
const _hoisted_2$3 = /*#__PURE__*/createElementVNode("span", { class: "font-semibold text-xs mr-1" }, " Off ", -1 /* HOISTED */);
const _hoisted_3$2 = /*#__PURE__*/createElementVNode("span", { class: "font-semibold text-xs ml-1" }, " On ", -1 /* HOISTED */);
const _hoisted_4$2 = {
  key: 2,
  class: "formkit-messages"
};
  
var script$3 = {
  __name: 'toggle',
  props: ['context'],
  setup(__props) {

const { context } = __props;
 
   
  const props = computed(() => context.node?.props || {});
  const model = ref$1(context.value ?? false);

  function setValue (value) { 
    if( context.attrs?.readonly ) return;

    model.value = !model.value;
    context.node.input(model.value);
  } 

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["formkit-outer", [props.value.outerClass ?? '']]),
    "data-type": __props.context.type
  }, [
    (__props.context.label)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["formkit-label", [props.value.labelClass ?? '']])
        }, toDisplayString(__props.context.label), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true),
    createElementVNode("div", {
      class: normalizeClass(["formkit-wrapper flex items-center cursor-pointer py-2", [props.value.wrapperClass ?? '', __props.context.attrs?.readonly ? 'cursor-not-allowed':'']]),
      onClick: setValue
    }, [
      _hoisted_2$3,
      createElementVNode("div", {
        class: normalizeClass(["rounded-full w-10 h-6 p-0.5 bg-gray-300", {'bg-red-500': !model.value,'bg-green-500': model.value}])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["rounded-full w-5 h-5 bg-white transform mx-auto duration-300 ease-in-out", {'-translate-x-2': !model.value,'translate-x-2': model.value}])
        }, null, 2 /* CLASS */)
      ], 2 /* CLASS */),
      _hoisted_3$2
    ], 2 /* CLASS */),
    (__props.context.help)
      ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(["formkit-help", [props.value.helpClass ?? '']])
        }, toDisplayString(__props.context.help), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.hasMessages)
      ? (openBlock(), createElementBlock("ul", _hoisted_4$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.context.messages, (msg) => {
            return (openBlock(), createElementBlock("li", {
              class: "formkit-message",
              key: msg.key
            }, toDisplayString(msg.value), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1$3))
}
}

};

script$3.__file = "src/components/inputs/toggle.vue";

const _hoisted_1$2 = ["data-type"];
const _hoisted_2$2 = {
  key: 0,
  class: "tag-input"
};
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = ["onKeydown"];
const _hoisted_5$1 = { key: 1 };
const _hoisted_6$1 = {
  key: 2,
  class: "formkit-messages"
};
  
var script$2 = {
  __name: 'tags',
  props: ['context'],
  setup(__props) {

const { context } = __props;
 
   
  const props = computed(() => context.node?.props || {});
  const valid = ref$1(true);
  const model = ref$1([]);
  
  function checkFormat(data){
    if( data === null || data === undefined ) {
      model.value = [];  
      valid.value = true;
    } else if( typeof data == 'string' ) {
        try {
          console.log('chec', typeof data);
            model.value = JSON.parse(data);
            valid.value = true;
        } catch (e) {
            valid.value = false;
        }
    } else {
        valid.value = false;
    }
  }
  function addTag (event) {
      event.preventDefault();
      var val = event.target.value.trim();
      if (val.length > 0) {
        model.value.push(val);
        event.target.value = '';
        changeData(model.value);
      }
  }
  function removeTag (index) {
      model.value.splice(index, 1);
      changeData(model.value);
  }
  function removeLastTag(event) {
      if (event.target.value.length === 0) {
        removeTag(model.value.length - 1);
        
        changeData(model.value);
      }
  }
  function changeData(data){ 
    if( context.output && context.output == 'json')
      context.node.input(JSON.stringify(data));
    else
      context.node.input(data); 
  }

  onMounted(() => {
    checkFormat(context.value);
  });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["formkit-outer", [props.value.outerClass ?? '']]),
    "data-type": __props.context.type
  }, [
    (__props.context.label)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["formkit-label", [props.value.labelClass ?? '']])
        }, toDisplayString(__props.context.label), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true),
    createElementVNode("section", {
      class: normalizeClass(["formkit-wrapper", [props.value.wrapperClass ?? '']])
    }, [
      (valid.value)
        ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(model.value, (tag, index) => {
              return (openBlock(), createElementBlock("div", {
                key: index,
                class: "tag-input__tag"
              }, [
                createElementVNode("span", {
                  onClick: $event => (removeTag(index))
                }, "x", 8 /* PROPS */, _hoisted_3$1),
                createTextVNode(" " + toDisplayString(tag), 1 /* TEXT */)
              ]))
            }), 128 /* KEYED_FRAGMENT */)),
            createElementVNode("input", mergeProps({ type: "text" }, __props.context.attributes, {
              placeholder: "Type + Enter",
              class: "tag-input__text",
              onKeydown: [
                withKeys(addTag, ["enter"]),
                withKeys(addTag, ["188"]),
                withKeys(removeLastTag, ["delete"])
              ]
            }), null, 16 /* FULL_PROPS */, _hoisted_4$1)
          ]))
        : createCommentVNode("v-if", true),
      (!valid.value)
        ? (openBlock(), createElementBlock("p", _hoisted_5$1, "Invalid data"))
        : createCommentVNode("v-if", true)
    ], 2 /* CLASS */),
    (__props.context.help)
      ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(["formkit-help", [props.value.helpClass ?? '']])
        }, toDisplayString(__props.context.help), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.hasMessages)
      ? (openBlock(), createElementBlock("ul", _hoisted_6$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.context.messages, (msg) => {
            return (openBlock(), createElementBlock("li", {
              class: "formkit-message",
              key: msg.key
            }, toDisplayString(msg.value), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1$2))
}
}

};

script$2.__scopeId = "data-v-342edb1f";
script$2.__file = "src/components/inputs/tags.vue";

const _hoisted_1$1 = ["data-type"];
const _hoisted_2$1 = {
  key: 0,
  class: "relative"
};
const _hoisted_3 = { class: "flex py-2 gap-2" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = /*#__PURE__*/createElementVNode("hr", null, null, -1 /* HOISTED */);
const _hoisted_6 = {
  key: 1,
  class: "relative"
};
const _hoisted_7 = { key: 2 };
const _hoisted_8 = {
  key: 2,
  class: "formkit-messages"
};
  
var script$1 = {
  __name: 'repeater',
  props: ['context'],
  setup(__props) {

const { context = {} } = __props;
  
   
  const props = computed(() => context.node?.props || {});
  ref$1(true);
  const schema = ref$1([]);
  const model = ref$1([]); 
  const rendered = ref$1(false);
  const schemaObj = computed(() => {
    if( props.value.inline ) return []
    else
      return model.value.map((i, k) => {
        return {
          "$formkit": "group",
          "name": k,  
          "children": [
            {
              "$el": "div",
              "attrs": {"class":"flex py-2 gap-2"},
              "children":[
                {
                  "$el": "div",
                  "attrs": {"class":"w-full"},
                  "children": schema.value
                },
                {
                  "$el":'button',
                  "attrs":{ "type":"button", "class":"p-2", "onclick":() => removeTag(k) },
                  "children": [
                    {
                      "$cmp": script$p,
                      "props": { "class": "h-5", "title":"Remove item" }
                    } 
                  ]
                },
              ]
            },
            {
              "$el": "hr",
              "attrs": {"class":"w-full p-1"},
              "children":""
            }
          ]
        }
      })
  });  
  
  function addTag (event) { 
    var val = props.value.inline === true ? "":({ }); 
    // model.value.push(val)  
    context.node.input([...context.value, val]);  
    model.value = [...context.value, val];
  }

  function removeTag (index) {  
    let data = JSON.parse(JSON.stringify(model.value));
    data = data.filter((i, k) => k != index);
    context.node.input(data);  
    model.value = data;
  }
 
  onMounted(async () => {  
    model.value = [...context.value];
    for(let row of (props.value.schema || []) ){ 
      schema.value.push( await normalizeInput(row) );
    } 
    rendered.value = true;
  });

return (_ctx, _cache) => {
  const _component_FormKit = resolveComponent("FormKit");
  const _component_FormKitSchema = resolveComponent("FormKitSchema");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["formkit-outer", [props.value.outerClass ?? '']]),
    "data-type": __props.context.type
  }, [
    (__props.context.label)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["formkit-label", [props.value.labelClass ?? '']])
        }, toDisplayString(__props.context.label), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true),
    createElementVNode("section", {
      class: normalizeClass(["formkit-wrapper", [props.value.wrapperClass ?? '']])
    }, [
      (schema.value && rendered.value && props.value.inline === true)
        ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.context.value, (row, i) => {
              return (openBlock(), createElementBlock(Fragment, { key: i }, [
                createElementVNode("div", _hoisted_3, [
                  (![null,undefined].includes(model.value[i]))
                    ? (openBlock(), createBlock(_component_FormKit, mergeProps({ key: 0 }, unref(_).omit(schema.value[0], ['$formkit']), {
                        modelValue: model.value[i],
                        "onUpdate:modelValue": $event => ((model.value[i]) = $event)
                      }), null, 16 /* FULL_PROPS */, ["modelValue", "onUpdate:modelValue"]))
                    : createCommentVNode("v-if", true),
                  createElementVNode("button", {
                    type: "button",
                    class: "flex justify-between items-center gap-2 p-2",
                    onClick: $event => (removeTag(i)),
                    title: "Remove item"
                  }, [
                    createVNode(unref(script$p), { class: "h-5" })
                  ], 8 /* PROPS */, _hoisted_4)
                ]),
                _hoisted_5
              ], 64 /* STABLE_FRAGMENT */))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : (schema.value && rendered.value && !props.value.inline)
          ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createVNode(_component_FormKitSchema, { schema: schemaObj.value }, null, 8 /* PROPS */, ["schema"])
            ]))
          : (openBlock(), createElementBlock("span", _hoisted_7, "error"))
    ], 2 /* CLASS */),
    createElementVNode("button", {
      type: "button",
      class: "flex justify-start items-center gap-2 py-2",
      onClick: addTag,
      title: "Add new item"
    }, [
      createVNode(unref(script$o), { class: "h-5" }),
      createTextVNode(" Add ")
    ]),
    (__props.context.help)
      ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(["formkit-help", [props.value.helpClass ?? '']])
        }, toDisplayString(__props.context.help), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.hasMessages)
      ? (openBlock(), createElementBlock("ul", _hoisted_8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.context.messages, (msg) => {
            return (openBlock(), createElementBlock("li", {
              class: "formkit-message",
              key: msg.key
            }, toDisplayString(msg.value), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1$1))
}
}

};

script$1.__file = "src/components/inputs/repeater.vue";

const _hoisted_1 = ["data-type"];
const _hoisted_2 = {
  key: 2,
  class: "formkit-messages"
};
  
var script = {
  __name: 'currency',
  props: ['context'],
  setup(__props) {

const { context, slots } = __props;
 
   
  const props = computed(() => context.node?.props || {});
  const field = ref$1();
  ref$1([]);
  
  const formataMoedaInput = () => {
    field.value = formatarMoeda(field.value);
    
    context.node.input( unformat(field.value) );
  };
  
  const formatarMoeda = (valor) => {
    valor = valor + '';
    valor = parseInt( valor.replace(/[\D]+/g, '') );
    valor = valor + '';
    valor = valor.replace(/[\D]+/g, '');
    valor = valor.replace(/([0-9]{2})$/g, ',$1');
    
    if (valor.length === 3) valor = '0'+valor;
    else if (valor.length === 1) valor = '0,0'+valor;
    
    if( valor.length > 6 )
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    if( valor.length > 10 )
      valor = valor.replace(/([0-9]{3}),([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");
    if( valor.length > 14 )
      valor = valor.replace(/([0-9]{3}),([0-9]{3}),([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3,$4"); 
    if( valor == 'NaN' ) return ''
    
    return valor
  };
  
  const unformat = (valor) => {
    valor = valor + '';
    valor = valor.replace(/[^0-9,]+/g, ''); 
    valor = valor.replace(',', '.'); 
    return (valor === NaN || valor == 'NaN') ? '' : +valor
  };
  
  const parseNumber = (valor = '0') => {
    const splitValor = (valor + '').split('.');
    
    if( !splitValor[1] ) ;
    else if (splitValor[1].length === 1) valor += '0';
    
    return valor+''.replace(/\D/g, '') || 0
  };
  
  watch(() => context.value, (newVal, oldVal) => {
     if( newVal && unformat(field.value) !== newVal ){
       field.value = parseNumber(newVal);
       field.value = formatarMoeda(field.value);
     }
  });
  
  onMounted(() => {
    field.value = parseNumber(context.value);

    console.log(slots);
  });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["formkit-outer", [props.value.outerClass ?? '']]),
    "data-type": __props.context.type
  }, [
    (__props.context.label)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["formkit-label", [props.value.labelClass ?? '']])
        }, toDisplayString(__props.context.label), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true),
    createElementVNode("div", {
      class: normalizeClass(["formkit-wrapper flex items-center", [props.value.wrapperClass ?? '']])
    }, [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.prefix))),
      withDirectives(createElementVNode("input", mergeProps({ type: "text" }, __props.context.attributes, {
        class: "formkit-input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((field).value = $event)),
        onKeyup: formataMoedaInput,
        onBlur: _cache[1] || (_cache[1] = (...args) => (__props.context.blur && __props.context.blur(...args))),
        autocomplete: "off",
        maxlength: "16"
      }), null, 16 /* FULL_PROPS */), [
        [vModelText, field.value]
      ]),
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.suffix)))
    ], 2 /* CLASS */),
    (__props.context.help)
      ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(["formkit-help", [props.value.helpClass ?? '']])
        }, [
          createTextVNode(toDisplayString(__props.context.help) + " ", 1 /* TEXT */),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.help)))
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.hasMessages)
      ? (openBlock(), createElementBlock("ul", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.context.messages, (msg) => {
            return (openBlock(), createElementBlock("li", {
              class: "formkit-message",
              key: msg.key
            }, toDisplayString(msg.value), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1))
}
}

};

script.__file = "src/components/inputs/currency.vue";

let arrOptions = [];
const searchFeature = async (node) => {
  // const { $axios } = useNuxtApp()
  // const schemaModel = inject('model')
  const $axios = axios; 
  const Instance = ResourceClass({ $axios });   

  const getOptions = async ({ rootApi, fieldLabel, fieldValue, ...data }) => {
    try{   
      if( rootApi ){ 
        rootApi = interpolate(rootApi, { data: node.value });
        Instance.setModel({ api:{ ...data,  rootApi, resource:{} } });

        let { rows } = await Instance.getData({ data: node.value}); 

        arrOptions = rows && rows.map((i, k) => ({ 
            label: _.get(i, fieldLabel, i.toString()), 
            value: _.get(i, fieldValue, k)
          }) 
        );  
      }
    }catch(e){
        alert('Erro to get data from '+ rootApi);
        console.log('Erro select input', e);
    }
  };

  const init = async () => { 
    console.log('pre init', node.props);
    if( !node.props?.model ) return 'DISMISSED';
    node.props.options = node.props.options ?? [];

    let { model = {}, overwrite = {} } = node.props;
    model = mergeDeep(model, overwrite);
    if( model && typeof model  == 'string' ) 
      return console.error('model string not loaded')
    
    await getOptions(model.api);
  };
 
  node.on('created', async () => {
    await init();
    // Ensure our matches prop starts as an array.
    node.props.matches = [];
    node.props.selection = '';
    node.props.active = ''; 
    node.props.allOptions = [...arrOptions, ...node.props.options].map((i, k) => {
      if( typeof i == 'string' )
         i = { value:k, label:i };
      return i
    });  

    if( node.value ){
      let preSelected = node.props.allOptions.find(i => i.value == node.value);
      node.props.active = preSelected?.label ?? '??';
    }
    // When we actually have an value to set:
    const setValue = async (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      let selected = node.props.selection;
      let modelFound = node.props.allOptions.find(
        i => {
          return i.label === selected
        }
      );
      
      node.input( modelFound?.value );
      node.props.active = modelFound?.label ?? selected;
      node.props.selection = '';
      node.props.searchValue = '';

      await new Promise((r) => setTimeout(r, 50)); // "next tick"

      if ( document.querySelector('input#' + node.props.id) ) {
        document.querySelector('input#' + node.props.id).focus();
      }
    };

    // Perform a soft selection, this is shown as a highlight in the dropdown
    const select = (delta) => { 
      const available = node.props.matches;
      let idx = available.indexOf(node.props.selection) + delta;
      if (idx >= available.length) {
        idx = 0;
      } else if (idx < 0) {
        idx = available.length - 1;
      }
      node.props.selection = available[idx];
    };

    // Add some new "handlers" for our autocomplete. The handlers object is
    // just a conventionally good place to put event handlers. Auto complete
    // inputs always have to deal with lots of keyboard events, so that logic
    // is registered here.
    Object.assign(node.context.handlers, {
      setValue,
      selection: (e) => {
        // This handler is called when entering data into the search input.
        switch (e.key) {
          case 'Enter':
            return setValue()
          case 'ArrowDown':
            e.preventDefault();
            return select(1)
          case 'ArrowUp':
            e.preventDefault();
            return select(-1)
        }
      },
      search(e) {
        node.props.searchValue = e.target.value;
      },
      hover: (e) => {
        node.props.selection = e.target.textContent;
      },
      unhover: (e) => {
        if (e.target.textContent === node.props.selection) {
          node.props.selection = '';
        }
      },
    });
 
  });

  // Perform filtering when the search value changes
  node.on('prop:searchValue', ({ payload: value }) => {
    const results = node.props.allOptions.filter((option) => { 
      return option.label.toLowerCase().startsWith(value.toLowerCase())
    });
    if (!results.length) results.push({ label:'No matches' });
    node.props.matches = results;
  });
};

const schema$3 = [ 
  {
    if: "$value && $active",
    then: [
      {
        $el: 'a',
        attrs: {
          id: '$id',
          href: '#',
          class: 'block border-2 border-black p-2',
          onClick: '$handlers.setValue',
          title: 'Click to change'
        },
        children: '$active',
      },
    ],
    else: [
      {
        $el: 'input',
        bind: '$attrs',
        attrs: {
          id: '$id',
          class: '$classes.input',
          onKeydown: '$handlers.selection',
          onInput: '$handlers.search',
          value: '$searchValue',
        },
      },
      {
        $el: 'ul',
        if: '$matches.length < $allOptions.length',
        attrs: {
          class: '$classes.dropdown',
        },
        children: [
          {
            $el: 'li',
            for: ['match', '$matches'],
            attrs: {
              'data-selected': {
                if: '$selection === $match.value',
                then: 'true',
                else: 'false',
              },
              class: 'formkit-dropdown-item border-b border-2 cursor-pointer p-1',
              onClick: '$handlers.setValue',
              onMouseenter: '$handlers.hover',
              onMouseleave: '$handlers.unhover',
            },
            children: '$match.label',
          },
        ],
      },
    ],
  }, 
];

const autocomplete = createInput(schema$3, {
  props: ['options', 'allOptions', 'matches', 'selection', 'searchValue', 'active', 'overwrite', 'model'],
  features: [searchFeature],
});

const features$2 = (node) => {
  const $axios = axios;
  // const { $axios } = useNuxtApp()
  inject('model');
  const Instance = ResourceClass({ $axios });
   
  // We wait for our node to be fully  "created" before we start to add our
  // handlers to ensure the core Vue plugin has added its context object:
  node.on('created', () => {  
    // Ensure our matches prop starts as an array.
    const upload = async (e) => { 
      console.debug('upload change');
      let file = e.target.files[0];
      let { model = {}, overwrite = {} } = node.props;
      
      const formData = new FormData();
      formData.append('file', file);

      // model = URL.createObjectURL(file);
      model = mergeDeep(model, overwrite);
      Instance.setModel(model);
 
      return await Instance.saveData( 
        formData
      )
      .then(({data}) => {
        if( data )
          node.input( _.get(data, _.get(model, 'api.wrapData', '[0].src'), JSON.stringify(data)) ); 
        else {
            alert('Erro ao fazer upload');
            console.error(data);
        }
      })
      .catch((err) => {
        alert(err.message || err);
        console.error(err); 
      })
    }; 

    const selectFile = (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      
      console.debug('Select file clicked');
      var input = document.createElement('input');
      input.type = 'file';
      input.name = 'upload';
      input.onchange = e => upload(e);
      input.click();
    };
    // Add some new "handlers" for our autocomplete. The handlers object is
    // just a conventionally good place to put event handlers. Auto complete
    // inputs always have to deal with lots of keyboard events, so that logic
    // is registered here.
    Object.assign(node.context.handlers, {
      'selectFile': selectFile, 
      hover: (e) => {
        node.props.selection = e.target.textContent;
      },
      unhover: (e) => {
        if (e.target.textContent === node.props.selection) {
          node.props.selection = '';
        }
      },
    });
 
  });

};

const schema$2 = [ 
  {
    $el: 'div',
    attrs: {  
      class: 'flex justify-between items-center gap-2 border-y border-1 ',  
    },
    children: [ 
      {
        if: '$value',
        then: [
          {
            if: '$baseUrl',
            then:[
              {
                $el: 'img',
                attrs: {
                  id: '$id',
                  src: '$baseUrl + $value',
                  class: 'w-12',
                },
                children: ''
              }
            ],
            else:{
                $el: 'img',
                attrs: {
                  id: '$id',
                  src: '$value',
                  class: 'w-14',
                },
                children: '',
            } 
          }
        ],
      }, 
      {   
        $el: 'input',
        attrs: {
          name: 'imageUrl',
          onInput: '$handlers.DOMInput',
          onBlur: '$handlers.blur',
          value: '$_value',
          class: 'formkit-input'
        },
      }, 
      {
        $el: 'a',
        attrs: {
          id: 'upload',
          href: '#',
          class: 'p-2',
          onClick: '$handlers.selectFile',
          title: 'Upload new'
        },
        children: [
          {
            $el:'svg',
            attrs:{
              xmlns:"http://www.w3.org/2000/svg",
              viewBox:"0 0 512 512",
              class: 'w-4'
            },
            children:[
              {
                $el: 'path',
                attrs:{
                  d:"M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"
                }
              }
            ]
          }
        ]
      }, 
    ]
  }
];
 
const image = createInput(schema$2, {
  props: ['overwrite', 'model', 'baseUrl'],
  features: [features$2],
});

const features$1 = (node) => {
  let loading = false; 
  const $axios = axios; 
  // const schemaModel = inject('model')
  const Instance = ResourceClass({ $axios }); 
  node.props.arrOptions = [];

  const getOptions = async ({ rootApi, fieldLabel, fieldValue, ...data }) => {
    try{  
      console.log('getOptions', { rootApi, fieldLabel, fieldValue, ...data });
      if( rootApi ){
        loading = true;
        rootApi = interpolate(rootApi, { data: node.value });
        Instance.setModel({ api:{ ...data,  rootApi, resource:{} } });

        let { rows } = await Instance.getData({ data: node.value}); 

        node.props.arrOptions = rows && rows.map((i, k) => ({ 
            label: _.get(i, fieldLabel, i.toString()), 
            value: _.get(i, fieldValue, k)
          }) 
        ); 

        loading = false; 
      }
    }catch(e){
        alert('Erro to get data from '+ rootApi);
        console.log('Erro select input', e);
    }
  };

  const init = async () => { 
    let { model = {}, overwrite = {} } = node.props.attrs;
    model = mergeDeep(model, overwrite);
    if( model && typeof model  == 'string' ) return console.error('model string not loaded')
    
    getOptions(model.api);
  };
  
  init(); 
  // We wait for our node to be fully  "created" before we start to add our
  // handlers to ensure the core Vue plugin has added its context object:
  node.on('created', () => {  
    node.props.arrOptions = node.props.options;

    Object.assign(node.context.handlers, { 
      setValue: e => {
        node.input(e); 
      }, 
      refresh: () => { 
        let { model = {}, overwrite = {} } = node.props;
        model = mergeDeep(model, overwrite);
        if( model && typeof model  == 'string' ) return console.error('model string not loaded')
        
        getOptions(model.api);
      },  
    });
 
  });
};
 
const schema$1 = [  
  { 
    $el: 'div',
    attrs: {    
      class: 'formkit-inner flex border-2 border-black',
    },
    children:[
      {   
        $el: 'select',
        attrs: { 
          name: '$context.name',
          id: '$context.id',
          oninput: '$handlers.DOMInput', 
          value: '$_value',
          class: 'formkit-input border-0',
        },
        children:[
          {
            $el: 'option',
            for: ['item', '$arrOptions'],
            attrs:{
              value: '$item.value'
            },
            children: '$item.label'
          }
        ]
      }, 
      {
        $el: 'button', 
        attrs:{
          type: 'button',
          onClick: '$handlers.refresh',
          title: "Refresh list"
        },
        children: [
          {
            $el:'svg',
            attrs:{
              xmlns:"http://www.w3.org/2000/svg",
              viewBox:"0 0 512 512",
              class: 'w-4 m-2'
            },
            children:[
              {
                $el: 'path',
                attrs:{
                  d:"M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
                }
              }
            ]
          }
        ] 
      }
    ]
  } 
]; 

const dynamic = createInput(schema$1, {
  props: ['overwrite', 'model', 'options', 'arrOptions'],
  features: [features$1],
});

const features = (node) => {
  let loading = false; 
  const $axios = axios;
  // const { $axios } = useNuxtApp()
  // const schemaModel = inject('model')
  const Instance = ResourceClass({ $axios }); 
  node.props.arrOptions = [];
  node.props.arrFiltered = [];

  if(!Array.isArray(node.value))
    node.input([]);

  const getOptions = async ({ rootApi, fieldLabel, fieldValue, ...data }) => {
    try{  
      console.debug('getOptions', { rootApi, fieldLabel, fieldValue, ...data });
      if( rootApi ){
        loading = true;
        rootApi = interpolate(rootApi, { data: node.value });
        Instance.setModel({ api:{ ...data,  rootApi, resource:{} } });

        let { rows } = await Instance.getData({ data: node.value }); 

        node.props.arrOptions = rows && rows.map((i, k) => ({ 
            label: _.get(i, fieldLabel, i.toString()), 
            value: _.get(i, fieldValue, k)
          }) 
        ); 

        node.props.arrFiltered = node.props.arrOptions;
        loading = false; 
      }
    }catch(e){
        alert('Erro to get data from '+ rootApi);
        console.log('Erro select input', e);
    }
  };

  const init = async () => { 
    let { model = {}, overwrite = {} } = node.props.attrs;
    model = mergeDeep(model, overwrite);
    if( model && typeof model  == 'string' ) return console.error('model string not loaded')
    
    getOptions(model.api);
  };
  
  init(); 
  // We wait for our node to be fully  "created" before we start to add our
  // handlers to ensure the core Vue plugin has added its context object:
  node.on('created', () => {  
    node.props.arrOptions = node.props.options ?? [];

    Object.assign(node.context.handlers, { 
      setValue: e => {
        node.input(e); 
      }, 
      checked: e => {
        let item = e?.target?.value;
        let exists = node.value.findIndex(i => i == item);
        if( exists >= 0 ){
          node.input( node.value.splice(exists, 1) ); 
        }else {
          node.input([...node.value, item]);
        } 
      },
      isChecked: e => {  
        return node.value.some(i => e == i)
      },
      filter: e => {
        let busca = e.target?.value;
        if( busca )
          node.props.arrFiltered = node.props.arrOptions.filter(
            i => i.label?.toLowerCase().startsWith(busca?.toLowerCase())
          );
        else
          node.props.arrFiltered = node.props.arrOptions;
      },
      refresh: () => { 
        let { model = {}, overwrite = {} } = node.props;
        model = mergeDeep(model, overwrite);
        if( model && typeof model  == 'string' ) return console.error('model string not loaded')
        
        getOptions(model.api);
      },  
    });
 
  });
};
 
const schema = [  
  {
    $el: 'div',
    attrs: {
      class: 'w-full'
    },
    children:[
      {   
        $el: 'input',
        attrs: { 
          type: 'search',
          name: '$context.name',
          id: '$context.id',
          oninput: '$handlers.filter',  
          class: 'formkit-input w-full',
          placeholder: 'filter'
        }, 
      },
      {
        $el: 'div', 
        attrs: {
          class: 'grid grid-cols-3 py-2 gap-2 w-full max-h-28 overflow-y-auto overflow-x-hidden'
        },
        children:[
          {
            $el: 'label',
            for: ['item', '$arrFiltered'],
            attrs:{
              for: '#$item.value', 
              value: '$item.value',
              class: 'flex items-center gap-2 p-2',
            },
            children: [ 
              {
                $el: 'input', 
                attrs: {
                  type: 'checkbox',
                  class: 'flex flex-col',
                  value: '$item.value',
                  onclick: '$handlers.checked',
                  checked: '$handlers.isChecked($item.value)'
                },
              },
              {
                $el: 'p',  
                attrs: {
                  class: 'whitespace-nowrap', 
                },
                children: '$item.label'
              }
            ]
          }
        ]
      } 
    ]
  }
]; 

const multiple = createInput(schema, {
  props: ['overwrite', 'model', 'options', 'arrOptions', 'arrFiltered'],
  features: [features],
});

// Custom inputs
// import CodeInput from './code.vue'
// import JsonInput from './json.vue'
// import EditorInput from './editor.vue'

var inputs = {
  // CodeInput, 
  // EditorInput,
  ToggleInput: script$3,
  TagsInput: script$2,
  RepeaterInput: script$1,
  // DateRangeInput: DateRange,
  CurrencyInput: script,
  GridInput: script$5,
  FormInput: script$4,
  AutocompleteInput: autocomplete,
  ImageInput: image,
  DynamicInput: dynamic,
  MultipleInput: multiple,
};

const inputByComponent = (comp, type = 'input', props = []) => { 
  return {
    // Node type: input, group, or list.
    type: type,
    // Schema to render (schema object or function that returns an object)
    schema: [],
    // A Vue component to render (use schema _OR_ component, but not both)
    component: comp,
    // (optional) Input specific props the <FormKit> component should accept.
    // should be an array of camelCase strings
    props: props,
    // (optional) Array of functions that receive the node.
    features: []
  }
};

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        console.log(`Crud${component.__name}`);
        Vue.component(`Crud${component.__name}`, component);
      }
    }
  }
};

const {
  CodeInput,
  JsonInput,
  // EditorInput,
  GridInput,
  FormInput,
  ToggleInput,
  TagsInput,
  RepeaterInput,
  DateRangeInput,
  CurrencyInput,
  AutocompleteInput,
  ImageInput,
  DynamicInput,
  MultipleInput,
} = inputs; 

const CustomInputs = {
  // 'link': inputByComponent(LinkComponent),
  // 'code': inputByComponent(CodeInput, 'input'),
  // 'json': inputByComponent(JsonInput, 'input'),
  // 'editor': inputByComponent(EditorInput, 'input'),
  'autocomplete': AutocompleteInput,
  'toggle': inputByComponent(ToggleInput, 'input', ['boolean']),
  'tags': inputByComponent(TagsInput, 'input', ['output']),
  'hasMany': inputByComponent(RepeaterInput, 'list', ['schema','inline']),
  'grid': inputByComponent(GridInput, 'input', ['model','overwrite']), 
  'subform': inputByComponent(FormInput, 'input', ['model','overwrite','resource']), 
  'daterange': inputByComponent(DateRangeInput, 'input', ['format']), 
  'currency': inputByComponent(CurrencyInput, 'input',), 
  'image': ImageInput,
  'dynamic': DynamicInput,
  'multiple': MultipleInput,
};

const Pluggable = plugin;

export { CustomInputs, Pluggable };
