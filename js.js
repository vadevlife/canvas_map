! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MAP_HORIZONTAL_INTERVAL = 40, t.MAP_VERTICAL_INTERVAL = 20, t.MAP_NODE_STYLES = {
        root: {
            fontSize: 28,
            fontFamily: "Arial",
            fontWeight: "300",
            fontStyle: "normal",
            color: "#fff",
            background: "blue",
            borderWidth: 4,
            borderColor: "blue",
            borderRadius: 6,
            padding: 12,
            draggingColor: "rgba(255,255,255,0.6)",
            draggingBackground: "rgba(102,102,102,0.6)",
            draggingBorderColor: "rgba(0,0,0,0.6)"
        },
        primary: {
            fontSize: 18,
            fontFamily: "Arial",
            fontWeight: "normal",
            fontStyle: "normal",
            color: "#000",
            background: "#fff",
            borderWidth: 2,
            borderColor: "blue",
            borderRadius: 4,
            padding: 8,
            draggingColor: "rgba(0,0,0,0.6)",
            draggingBackground: "rgba(255,255,255,0.6)",
            draggingBorderColor: "rgba(0,0,0,0.6)"
        },
        secondary: {
            fontSize: 14,
            fontFamily: "Arial",
            fontWeight: "normal",
            fontStyle: "normal",
            color: "#000",
            background: "transparent",
            borderWidth: 0,
            borderColor: "#000",
            borderRadius: 0,
            padding: 4,
            draggingColor: "rgba(0,0,0,0.6)",
            draggingBackground: "transparent",
            draggingBorderColor: "rgba(0,0,0,0.6)"
        }
    }, t.MAP_LINK_STYLE = {
        lineWidth: 1,
        lineColor: "#000",
        cp1Ratio: .2,
        cp2Ratio: .2
    }, t.MAP_SELECTION_STYLE = {
        padding: 1,
        outlineColor: "#5bc2e7",
        outlineWidth: 4
    }, t.MAP_INSERT_MARK_STYLE = {
        width: 100,
        height: 10,
        background: "#5bc2e7"
    }
}, function(e, t, n) {
    "use strict";
    var i, o = this && this.__extends || (i = function(e, t) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = r(n(7)),
        s = n(0),
        a = function(e) {
            function t(t, n, i, o, r) {
                var d = this;
                return o = o || "New", (d = e.call(this, t, o, r) || this).parent = null, d.children = [], d._type = n, d.depth = i, d._size = {
                    w: 0,
                    h: 0
                }, d._updateSize(), d._treeSpace = Object.assign({}, d._size), d._position = {
                    x: 0,
                    y: 0
                }, d
            }
            return o(t, e), t.prototype.text = function(e) {
                return void 0 !== e && e !== this._text && (this._text = e, this._updateSize()), this._text
            }, t.prototype.comment = function(e) {
                return void 0 !== e && e !== this._comment && (this._comment = e, this._updateSize()), this._comment
            }, t.prototype.type = function(e) {
                return void 0 !== e && e !== this._type && (this._type = e, this._updateSize()), this._type
            }, t.prototype.treeSpace = function(e) {
                return void 0 === e || e.w === this._treeSpace.w && e.h === this._treeSpace.h || (this._treeSpace = Object.assign({}, e)), Object.assign({}, this._treeSpace)
            }, t.prototype.position = function(e) {
                return void 0 === e || e.x === this._position.x && e.y === this._position.y || (this._position = Object.assign({}, e)), Object.assign({}, this._position)
            }, t.prototype.size = function(e) {
                return void 0 === e || e.w === this._size.w && e.h === this._size.h || (this._size = Object.assign({}, e)), Object.assign({}, this._size)
            }, t.prototype.clone = function() {
                var e = new t(this.id, this._type, this.depth, this._text, this._comment);
                return e.children = [], e.parent = null, this.children.forEach((function(t) {
                    var n = t.clone();
                    n.parent = e, e.children.push(n)
                })), e
            }, t.prototype.traverse = function(e) {
                for (var t = [this]; t.length > 0;) {
                    var n = t.shift();
                    e && e(n), n.children.forEach((function(e) {
                        t.push(e)
                    }))
                }
            }, t.prototype.isDescendentOf = function(e) {
                for (var t = this, n = !1; t;) {
                    if (t.id === e.id) {
                        n = !0;
                        break
                    }
                    t = t.parent
                }
                return n
            }, t.prototype._updateSize = function() {
                var e = s.MAP_NODE_STYLES[this._type],
                    t = document.createElement("canvas").getContext("2d");
                if (!t) throw new Error("Failed to get rulerCanvas context 2d.");
                t.font = e.fontStyle + " normal " + e.fontWeight + " " + e.fontSize + "px " + e.fontFamily;
                var n = t.measureText(this._text).width,
                    i = 1.4 * e.fontSize,
                    o = 2 * e.padding + 2 * e.borderWidth,
                    r = n + o,
                    d = i + o;
                this._size = {
                    w: r,
                    h: d
                }
            }, t
        }(d.default);
    t.default = a
}, function(e, t, n) {
    "use strict";
    var i = this && this.__assign || function() {
        return (i = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0);
    var r = {
        getChildNodeType: function(e) {
            return "root" === e ? "primary" : "secondary"
        },
        getScaledNodeStyle: function(e, t) {
            var n = o.MAP_NODE_STYLES[e];
            return i(i({}, n), {
                fontSize: n.fontSize * t,
                borderWidth: n.borderWidth * t,
                borderRadius: n.borderRadius * t,
                padding: n.padding * t
            })
        },
        getScaledLinkStyle: function(e) {
            return i(i({}, o.MAP_LINK_STYLE), {
                lineWidth: o.MAP_LINK_STYLE.lineWidth * e
            })
        },
        getScaledSelectionStyle: function(e) {
            return i(i({}, o.MAP_SELECTION_STYLE), {
                padding: o.MAP_SELECTION_STYLE.padding * e,
                outlineWidth: o.MAP_SELECTION_STYLE.outlineWidth * e
            })
        },
        getScaledInsertMarkStyle: function(e) {
            return i(i({}, o.MAP_INSERT_MARK_STYLE), {
                width: o.MAP_INSERT_MARK_STYLE.width * e,
                height: o.MAP_INSERT_MARK_STYLE.height * e
            })
        }
    };
    t.default = r
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = i(n(4)),
        r = document.getElementById("app");
    if (r) {
        var d = new o.default.MindMap(r);
        d.render();
        var s = d.rootId,
            a = d.addNode(s, "group1");
        d.addNode(a, "child1"), d.addNode(a, "child2"), d.addNode(a, "child3");
        var h = d.addNode(s, "group2");
        d.addNode(h, "child1"), d.addNode(h, "child2");
        var c = d.addNode(h, "group2-1");
        d.addNode(c, "child1"), d.addNode(c, "child2"), d.addNode(c, "child3")
    }
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = {
        MindMap: i(n(5)).default
    };
    t.default = o
}, function(e, t, n) {
    "use strict";
    var i, o = this && this.__extends || (i = function(e, t) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = r(n(6)),
        s = r(n(1)),
        a = r(n(2)),
        h = n(0),
        c = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n._handleWheel = function(e) {
                    if (e.preventDefault(), e.ctrlKey || e.metaKey) {
                        var t = e.deltaY > 0 ? -.05 : .05,
                            i = n._scale + t;
                        i = (i = i > 4 ? 4 : i) < .5 ? .5 : i, n.scale(i)
                    } else {
                        var o = n._translate;
                        n.translate({
                            x: o.x,
                            y: o.y - 5 * e.deltaY
                        })
                    }
                }, n._handleMouseDown = function(e) {
                    if (0 === e.button) {
                        n._mouseLeftStartPos = {
                            x: e.offsetX,
                            y: e.offsetY
                        };
                        var t = n.domToCanvas(n._mouseLeftStartPos),
                            i = n._getNodeAtPosition(t);
                        i ? (n._draggingNodeId = i.id, n.selectedNode(n._draggingNodeId)) : n.selectedNode(-1), n._mouseLeftDragging = !0
                    } else 2 === e.button && (n._mouseRightStartPos = {
                        x: e.offsetX,
                        y: e.offsetY
                    }, n._mouseRightDragging = !0)
                }, n._handleMouseMove = function(e) {
                    if (n._mouseLeftDragging)
                        if (n._draggingNodeId >= 0) {
                            var t = n._nodeIndices[n._draggingNodeId];
                            if (t) {
                                var i = new s.default(t.id, t.type(), t.depth, t.text(), t.comment()),
                                    o = n.canvasToDom(t.position());
                                o = n.domToCanvas({
                                    x: o.x + e.offsetX - n._mouseLeftStartPos.x,
                                    y: o.y + e.offsetY - n._mouseLeftStartPos.y
                                }), i.position(o);
                                var r = a.default.getScaledNodeStyle(i.type(), n._scale);
                                r.color = r.draggingColor, r.background = r.draggingBackground, r.borderColor = r.draggingBorderColor, requestAnimationFrame((function() {
                                    return n._renderNode(i, r)
                                }));
                                var d = n.domToCanvas({
                                        x: e.offsetX,
                                        y: e.offsetY
                                    }),
                                    h = n._getNodeAtPosition(d);
                                h && h.parent && !h.isDescendentOf(i) && (n._targetNodeId = h.id, requestAnimationFrame((function() {
                                    return n._renderInsertMark(h)
                                }))), n._needsRerender = !0
                            }
                        } else {
                            var c = {
                                    x: e.movementX,
                                    y: e.movementY
                                },
                                l = n._translate;
                            n.translate({
                                x: l.x + c.x,
                                y: l.y + c.y
                            })
                        }
                    else n._mouseRightDragging
                }, n._handleMouseUp = function(e) {
                    if (0 === e.button) {
                        if (n._draggingNodeId >= 0) {
                            var t = n._nodeIndices[n._draggingNodeId];
                            if (t && n._targetNodeId >= 0) {
                                var i = n._nodeIndices[n._targetNodeId];
                                if (i && i.parent) {
                                    n.deleteNode(t.id);
                                    var o = i.parent.children.findIndex((function(e) {
                                        return e.id === i.id
                                    }));
                                    n.addExistingNode(i.parent.id, t, o), n.selectedNode(t.id), n._targetNodeId = -1
                                }
                            }
                            n._draggingNodeId = -1, n._needsRerender = !0
                        }
                        n._mouseLeftStartPos = {
                            x: 0,
                            y: 0
                        }, n._mouseLeftDragging = !1
                    } else 2 === e.button && (n._mouseRightStartPos = {
                        x: 0,
                        y: 0
                    }, n._mouseRightDragging = !1)
                }, n._handleMouseLeave = function() {
                    n._draggingNodeId = -1, n._mouseLeftDragging = !1, n._mouseRightDragging = !1
                }, n._handleDoubleClick = function(e) {
                    if (0 === e.button) {
                        var t = n.domToCanvas({
                                x: e.offsetX,
                                y: e.offsetY
                            }),
                            i = n._getNodeAtPosition(t);
                        if (!i) return;
                        n._renderInput(i)
                    }
                }, n._handleKeyUp = function(e) {
                    var t = n.selectedNode();
                    if (t) switch (e.key) {
                        case "ArrowDown":
                        case "ArrowUp":
                        case "ArrowLeft":
                        case "ArrowRight":
                            break;
                        case "Enter":
                            var i = -1;
                            if (e.ctrlKey || e.metaKey) i = n.addNode(t.id);
                            else {
                                var o = t.parent;
                                if (o) {
                                    var r = o.children.findIndex((function(e) {
                                        return e.id === t.id
                                    }));
                                    i = n.addNode(o.id, void 0, r >= 0 ? r + 1 : void 0)
                                }
                            }
                            var d = n.selectedNode(i);
                            requestAnimationFrame((function() {
                                return n._renderInput(d)
                            }));
                            break;
                        case "Delete":
                            n.deleteNode(t.id);
                            break;
                        case "Escape":
                            n.selectedNode(-1);
                            break;
                        case "c":
                            (e.ctrlKey || e.metaKey) && n.copyNode(t.id);
                            break;
                        case "x":
                            (e.ctrlKey || e.metaKey) && n.cutNode(t.id);
                            break;
                        case "v":
                            (e.ctrlKey || e.metaKey) && n.pasteNode(t.id);
                            break;
                        default:
                            return
                    }
                }, n._handleContextMenu = function(e) {
                    e.preventDefault()
                }, n._mouseLeftDragging = !1, n._mouseLeftStartPos = {
                    x: 0,
                    y: 0
                }, n._mouseRightDragging = !1, n._mouseRightStartPos = {
                    x: 0,
                    y: 0
                }, n._draggingNodeId = -1, n._targetNodeId = -1, n._registerInteractions(), n
            }
            return o(t, e), t.prototype.dispose = function() {
                this._unregisterInteractions(), e.prototype.dispose.call(this)
            }, t.prototype._registerInteractions = function() {
                var e = this._canvas;
                e.addEventListener("wheel", this._handleWheel), e.addEventListener("mousedown", this._handleMouseDown), e.addEventListener("mouseup", this._handleMouseUp), e.addEventListener("mouseleave", this._handleMouseLeave), e.addEventListener("mousemove", this._handleMouseMove), e.addEventListener("dblclick", this._handleDoubleClick), e.addEventListener("contextmenu", this._handleContextMenu), window.addEventListener("keyup", this._handleKeyUp)
            }, t.prototype._unregisterInteractions = function() {
                var e = this._canvas;
                e.removeEventListener("wheel", this._handleWheel), e.removeEventListener("mousedown", this._handleMouseDown), e.removeEventListener("mouseup", this._handleMouseUp), e.removeEventListener("mouseleave", this._handleMouseLeave), e.removeEventListener("mousemove", this._handleMouseMove), e.removeEventListener("dblclick", this._handleDoubleClick), e.removeEventListener("contextmenu", this._handleContextMenu), window.removeEventListener("keyup", this._handleKeyUp)
            }, t.prototype._getNodeAtPosition = function(e) {
                for (var t in this._nodeIndices) {
                    var n = this._nodeIndices[t],
                        i = n.position(),
                        o = {
                            x: i.x + n.size().w,
                            y: i.y + n.size().h
                        };
                    if (e.x >= i.x && e.x <= o.x && e.y >= i.y && e.y <= o.y) return n
                }
                return null
            }, t.prototype._renderInput = function(e) {
                var t = this;
                if (e) {
                    var n = h.MAP_NODE_STYLES[e.type()].borderWidth,
                        i = this.canvasToDom({
                            x: e.position().x + n,
                            y: e.position().y + n
                        }),
                        o = (e.size().w - 2 * n) * this._scale,
                        r = (e.size().h - 2 * n) * this._scale,
                        d = a.default.getScaledNodeStyle(e.type(), this._scale),
                        s = document.createElement("input");
                    s.value = e.text(), s.style.font = d.fontStyle + " normal " + d.fontWeight + " " + d.fontSize + "px " + d.fontFamily, s.style.position = "absolute", s.style.left = i.x + "px", s.style.top = i.y + "px", s.style.width = o + "px", s.style.minWidth = "40px", s.style.height = r + "px", s.addEventListener("blur", (function(n) {
                        n.stopPropagation();
                        var i = n.target;
                        i.value && i.value !== e.text() && t.updateNode(e.id, i.value), i.remove()
                    })), s.addEventListener("keyup", (function(e) {
                        (e.stopPropagation(), "Enter" === e.key || "Escape" === e.key) && e.target.blur()
                    })), this._dom.appendChild(s), s.focus(), s.select()
                }
            }, t.prototype._renderInsertMark = function(e) {
                if (e && e.parent) {
                    var t = a.default.getScaledInsertMarkStyle(this._scale),
                        n = a.default.getScaledLinkStyle(this._scale);
                    n.lineColor = t.background;
                    var i = e.clone();
                    i.position({
                        x: e.position().x,
                        y: e.position().y - h.MAP_VERTICAL_INTERVAL / 2 - t.height / 2
                    }), i.size({
                        w: h.MAP_INSERT_MARK_STYLE.width,
                        h: h.MAP_INSERT_MARK_STYLE.height
                    });
                    var o = {
                        x: i.position().x * this._scale,
                        y: i.position().y * this._scale,
                        w: t.width,
                        h: t.height
                    };
                    this._renderLink(e.parent, i, n);
                    var r = this._ctx;
                    r.beginPath(), r.fillStyle = t.background, r.fillRect(o.x, o.y, o.w, o.h)
                }
            }, t
        }(d.default);
    t.default = c
}, function(e, t, n) {
    "use strict";
    var i = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            var i = Array(e),
                o = 0;
            for (t = 0; t < n; t++)
                for (var r = arguments[t], d = 0, s = r.length; d < s; d++, o++) i[o] = r[d];
            return i
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = o(n(1)),
        d = o(n(2)),
        s = n(0),
        a = function() {
            function e(e) {
                var t, n = this;
                this.render = function() {
                    n._renderLoop && (n._innerRender(), requestAnimationFrame(n.render))
                }, this._parentDom = e, this._nextNodeId = 0, this._root = new r.default(this._nextNodeId++, "root", 0, "Element"), this._nodeIndices = ((t = {})[this._root.id] = this._root, t);
                var i = document.createElement("canvas");
                i.width = this._parentDom.clientWidth, i.height = this._parentDom.clientHeight;
                var o = document.createElement("div");
                o.id = "mind-graph-map", o.style.width = "100%", o.style.height = "100%", o.style.position = "relative", o.appendChild(i), this._dom = o, this._parentDom.appendChild(o), this._canvas = i, this._center = {
                    x: this._canvas.width / 2,
                    y: this._canvas.height / 2
                };
                var d = this._canvas.getContext("2d");
                if (!d) throw new Error("Failed to get canvas context 2d.");
                this._ctx = d, this._scale = 1, this._translate = {
                    x: 0,
                    y: 0
                }, this._needsRerender = !0, this._needsReposition = !0, this._renderLoop = !0, this._selectedNodeId = -1, this._copiedNode = null
            }
            return e.prototype.scale = function(e) {
                return void 0 !== e && e !== this._scale && (this._scale = e, this._needsRerender = !0), this._scale
            }, e.prototype.translate = function(e) {
                return void 0 === e || e.x === this._translate.x && e.y === this._translate.y || (this._translate = Object.assign({}, e), this._needsRerender = !0), Object.assign({}, this._translate)
            }, Object.defineProperty(e.prototype, "rootId", {
                get: function() {
                    return this._root.id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.selectedNode = function(e) {
                return void 0 !== e && e !== this._selectedNodeId && (this._selectedNodeId = e, this._needsRerender = !0), this._selectedNodeId < 0 ? null : this._nodeIndices[this._selectedNodeId]
            }, e.prototype.addNode = function(e, t, n) {
                var i = this._nodeIndices[e];
                if (!i) throw new Error('"addNode" failed, parent node not found.');
                var o = d.default.getChildNodeType(i.type()),
                    s = new r.default(this._nextNodeId++, o, i.depth + 1, t);
                return "number" == typeof n && n >= 0 && n <= i.children.length ? i.children.splice(n, 0, s) : i.children.push(s), s.parent = i, this._traceBackUpdateSpaces(i), this._nodeIndices[s.id] = s, this._needsRerender = !0, this._needsReposition = !0, s.id
            }, e.prototype.addExistingNode = function(e, t, n) {
                var i = this,
                    o = this._nodeIndices[e];
                if (!o) throw new Error('"addExistingNode" failed, parent node not found.');
                return "number" == typeof n && n >= 0 && n <= o.children.length ? o.children.splice(n, 0, t) : o.children.push(t), t.parent = o, this._traceBackUpdateSpaces(o), t.traverse((function(e) {
                    return i._nodeIndices[e.id] = e
                })), this._needsRerender = !0, this._needsReposition = !0, t.id
            }, e.prototype.deleteNode = function(e) {
                var t = this,
                    n = this._nodeIndices[e];
                if (!n || !n.parent) return -1;
                var i = n.parent.children.findIndex((function(t) {
                    return t.id === e
                }));
                if (n.parent.children.splice(i, 1), this._traceBackUpdateSpaces(n.parent), n.traverse((function(e) {
                        return delete t._nodeIndices[e.id]
                    })), this._selectedNodeId === e)
                    if (n.parent.children.length > 0) {
                        var o = i;
                        i >= n.parent.children.length && o--, this._selectedNodeId = n.parent.children[o].id
                    } else this._selectedNodeId = n.parent.id;
                return this._needsRerender = !0, this._needsReposition = !0, n.parent.id
            }, e.prototype.updateNode = function(e, t) {
                var n = this._nodeIndices[e];
                if (!n) throw new Error('"updateNode" failed, node not found.');
                n.text(t), this._traceBackUpdateSpaces(n), this._needsRerender = !0, this._needsReposition = !0
            }, e.prototype.copyNode = function(e) {
                var t = this._nodeIndices[e];
                t && (this._copiedNode = t.clone())
            }, e.prototype.cutNode = function(e) {
                this.copyNode(e), this.deleteNode(e)
            }, e.prototype.pasteNode = function(e) {
                var t = this;
                if (this._copiedNode) {
                    var n = {};
                    this._copiedNode.traverse((function(i) {
                        var o = e;
                        i.parent && n.hasOwnProperty(i.parent.id) && (o = n[i.parent.id]);
                        var r = t.addNode(o, i.text());
                        n[i.id] = r
                    }))
                }
            }, e.prototype.dispose = function() {
                this._renderLoop = !1, this._dom.remove()
            }, e.prototype.canvasToDom = function(e) {
                return {
                    x: e.x * this._scale + this._center.x + this._translate.x,
                    y: e.y * this._scale + this._center.y + this._translate.y
                }
            }, e.prototype.domToCanvas = function(e) {
                return {
                    x: (e.x - this._center.x - this._translate.x) / this._scale,
                    y: (e.y - this._center.y - this._translate.y) / this._scale
                }
            }, e.prototype.toJson = function() {
                var e = {
                    rootId: this._root.id
                };
                return this._root.traverse((function(t) {
                    e[t.id] = {
                        id: t.id,
                        text: t.text(),
                        comment: t.comment(),
                        parentId: t.parent ? t.parent.id : -1,
                        childrenId: []
                    }, t.children.forEach((function(n) {
                        e[t.id].childrenId.push(n.id)
                    }))
                })), e
            }, e.prototype.loadJson = function(e) {
                var t, n, o = e[e.rootId];
                if (o) {
                    this._nextNodeId = 0, this._root = new r.default(this._nextNodeId++, "root", 0, o.text, o.comment), this._nodeIndices = ((t = {})[this._root.id] = this._root, t);
                    for (var d = ((n = {})[e.rootId] = this._root.id, n), s = i(o.childrenId); s.length > 0;) {
                        var a = e[s.shift()];
                        if (a) {
                            var h = this.addNode(d[a.parentId], a.text);
                            d[a.id] = h, a.childrenId.forEach((function(e) {
                                return s.push(e)
                            }))
                        }
                    }
                }
            }, e.prototype._innerRender = function() {
                var e = this;
                this._needsRerender && (this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._ctx.translate(this._center.x + this._translate.x, this._center.y + this._translate.y), this._beforGraphRender(), this._needsReposition ? (this._root.position({
                    x: -this._root.size().w / 2,
                    y: -this._root.size().h / 2
                }), this._root.traverse((function(t) {
                    var n = d.default.getScaledNodeStyle(t.type(), e._scale);
                    e._renderNode(t, n);
                    var i = t.position().x + t.size().w + s.MAP_HORIZONTAL_INTERVAL,
                        o = t.position().y + t.size().h / 2 - t.treeSpace().h / 2;
                    t.children.forEach((function(n) {
                        o += n.treeSpace().h / 2 - n.size().h / 2, n.position({
                            x: i,
                            y: o
                        });
                        var r = d.default.getScaledLinkStyle(e._scale);
                        e._renderLink(t, n, r), o += n.size().h / 2 + n.treeSpace().h / 2 + s.MAP_VERTICAL_INTERVAL
                    }))
                }))) : this._root.traverse((function(t) {
                    var n = d.default.getScaledNodeStyle(t.type(), e._scale);
                    e._renderNode(t, n), t.children.forEach((function(n) {
                        var i = d.default.getScaledLinkStyle(e._scale);
                        e._renderLink(t, n, i)
                    }))
                })), this._renderSelection(), this._afterGraphRender(), this._needsRerender = !1, this._needsReposition = !1)
            }, e.prototype._beforGraphRender = function() {}, e.prototype._afterGraphRender = function() {}, e.prototype._renderNode = function(e, t) {
                var n = e.position().x * this._scale,
                    i = e.position().y * this._scale,
                    o = e.size().w * this._scale,
                    r = e.size().h * this._scale,
                    d = this._ctx,
                    s = {
                        x: n + t.borderWidth,
                        y: i + t.borderWidth,
                        w: o - 2 * t.borderWidth,
                        h: r - 2 * t.borderWidth
                    };
                if (d.beginPath(), d.fillStyle = t.background, d.fillRect(s.x, s.y, s.w, s.h), t.borderWidth > 0) {
                    d.beginPath();
                    var a = {
                        x: n + t.borderWidth / 2,
                        y: i + t.borderWidth / 2,
                        w: o - t.borderWidth,
                        h: r - t.borderWidth
                    };
                    d.strokeStyle = t.borderColor, d.lineWidth = t.borderWidth, d.strokeRect(a.x, a.y, a.w, a.h)
                }
                d.beginPath(), d.font = t.fontStyle + " normal " + t.fontWeight + " " + t.fontSize + "px " + t.fontFamily, d.fillStyle = t.color, d.fillText(e.text(), n + t.padding + t.borderWidth, i + t.padding + t.borderWidth + t.fontSize)
            }, e.prototype._renderLink = function(e, t, n) {
                var i = {
                        x: (e.position().x + e.size().w) * this._scale,
                        y: (e.position().y + e.size().h / 2) * this._scale
                    },
                    o = {
                        x: t.position().x * this._scale,
                        y: (t.position().y + t.size().h / 2) * this._scale
                    },
                    r = o.x - i.x,
                    d = this._ctx;
                d.beginPath(), d.moveTo(i.x, i.y), d.quadraticCurveTo(i.x + n.cp2Ratio * r, o.y, o.x, o.y), d.lineWidth = n.lineWidth, d.strokeStyle = n.lineColor, d.stroke()
            }, e.prototype._renderSelection = function() {
                if (!(this._selectedNodeId < 0)) {
                    var e = this._nodeIndices[this._selectedNodeId],
                        t = e.position().x * this._scale,
                        n = e.position().y * this._scale,
                        i = e.size().w * this._scale,
                        o = e.size().h * this._scale,
                        r = d.default.getScaledSelectionStyle(this._scale),
                        s = {
                            x: t - r.padding - r.outlineWidth / 2,
                            y: n - r.padding - r.outlineWidth / 2
                        },
                        a = {
                            w: i + 2 * r.padding + r.outlineWidth,
                            h: o + 2 * r.padding + r.outlineWidth
                        },
                        h = this._ctx;
                    h.beginPath(), h.strokeStyle = r.outlineColor, h.lineWidth = r.outlineWidth, h.strokeRect(s.x, s.y, a.w, a.h)
                }
            }, e.prototype._traceBackUpdateSpaces = function(e) {
                var t = e.treeSpace(),
                    n = -1 / 0,
                    i = e.children.reduce((function(e, t) {
                        return t.size().w > n && (n = t.size().w), e + t.treeSpace().h
                    }), 0);
                (i += (e.children.length - 1) * s.MAP_VERTICAL_INTERVAL) < e.size().h && (i = e.size().h);
                var o = n - (t.w - e.size().w - s.MAP_HORIZONTAL_INTERVAL),
                    r = i - t.h;
                if (0 !== o || 0 !== r)
                    for (var d = e; d;) d.treeSpace({
                        w: d.treeSpace().w + o,
                        h: d.treeSpace().h + r
                    }), d = d.parent
            }, e
        }();
    t.default = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e, t, n) {
        this.id = e, this._text = t || "", this._comment = n || ""
    };
    t.default = i
}]);