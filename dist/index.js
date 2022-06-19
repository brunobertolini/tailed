"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tailed = exports.tail = void 0;
var React = require("react");
var byProps = function (fragment, props) {
    if (fragment === void 0) { fragment = ''; }
    return (typeof fragment === 'function' ? fragment(props) : fragment) || '';
};
var tail = function (str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (props) {
        return str.reduce(function (memo, current, index) {
            return ("" + memo + current + byProps(args[index], props))
                .trim()
                .replace(/\s{2,}/g, ' ');
        }, '');
    };
};
exports.tail = tail;
var tailed = function (componentName) {
    return function (strs) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return function (_a) {
            var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.as, useAs = _c === void 0 ? componentName : _c, children = _a.children, props = __rest(_a, ["className", "as", "children"]);
            var Component = typeof useAs === 'string' ? "" + useAs : useAs;
            var names = exports.tail.apply(void 0, __spreadArray([strs], args, false))(props);
            return (React.createElement(Component, __assign({}, props, { className: names + " " + className }), children));
        };
    };
};
exports.tailed = tailed;
