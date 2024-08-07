A5.themes.add('Alpha-Bluegrey',{
	"general": {
		"pageClassName": "page",
		"headingClassName": "heading",
		"text": {
			"className": "",
			"highlightClassName": "highlight"
		},
		"linkClassName": "link",
		"group": {
			"className": "group",
			"labelClassName": "groupLabel"
		},
		"icons": {
			"expand": "svgIcon=#alpha-icon-chevronDown:icon",
			"collapse": "svgIcon=#alpha-icon-chevronUp:icon",
			"help": "svgIcon=#alpha-icon-questionCircle:icon",
			"info": "svgIcon=#alpha-icon-infoCircle:icon",
			"warning": "svgIcon=#alpha-icon-exclamationTriangle:icon",
			"error": "svgIcon=#alpha-icon-exclamationCircle:icon",
			"menu": "svgIcon=#alpha-icon-bars:icon",
			"refresh": "svgIcon=#alpha-icon-refresh:icon",
			"refreshDisabled": "svgIcon=#alpha-icon-refresh:icon iconDisabled",
			"panel": {
				"collapseRight": "svgIcon=#alpha-icon-chevronDblRight:icon",
				"expandRight": "svgIcon=#alpha-icon-chevronDblLeft:icon",
				"collapseLeft": "svgIcon=#alpha-icon-chevronDblLeft:icon",
				"expandLeft": "svgIcon=#alpha-icon-chevronDblRight:icon"
			},
			"list": {
				"navigation": "svgIcon=#alpha-icon-chevronRight:icon",
				"navigationSubtle": "svgIcon=#alpha-icon-chevronRight:icon"
			},
			"edit": {
				"dropdown": "svgIcon=#alpha-icon-chevronDown:icon",
				"date": "svgIcon=#alpha-icon-chevronDown:icon",
				"dateTime": "svgIcon=#alpha-icon-chevronDown:icon",
				"time": "svgIcon=#alpha-icon-chevronDown:icon",
				"lookup": "svgIcon=#alpha-icon-chevronDown:icon"
			}
		},
		"iconSet": {
			"type": "svg",
			"pattern": "icons\\*.svg",
			"prefix": "alpha-icon-",
			"className": "icon",
			"disabledClassName": "iconDisabled"
		}
	},
	"grid": {
		"base": {
			"grid": {
				"className": "grid",
				"headerClassName": "gridHeader",
				"footerClassName": "gridFooter",
				"summaryLabelClassName": "gridSumLabel",
				"summaryDataClassName": "gridSumData",
				"qbeClassName": "gridQBE",
				"separatorClassName": "gridSep",
				"rowHeaderClassName": "gridRowHeader",
				"rowHoverClassName": "gridRowHover",
				"rowSelectedClassName": "gridRowSelected",
				"dataHeaderClassName": "gridDataHeader",
				"dataClassName": "gridData",
				"dataAltClassName": "gridDataAlt",
				"dataErrorClassName": "gridDataError",
				"navClassName": "gridNav"
			},
			"detailView": {
				"className": "gridDetail",
				"labelClassName": "gridRowHeader",
				"dataClassName": "gridData",
				"dataErrorClassName": "gridDataError"
			},
			"icons": {
				"sort": {
					"asc": "svgIcon=#alpha-icon-chevronUp:icon iconButton",
					"ascDisabled": "svgIcon=#alpha-icon-chevronUp:icon iconDisabled iconButton",
					"desc": "svgIcon=#alpha-icon-chevronDown:icon iconButton",
					"descDisabled": "svgIcon=#alpha-icon-chevronDown:icon iconDisabled iconButton"
				},
				"page": {
					"first": "svgIcon=#alpha-icon-chevronDblLeft:icon iconButton",
					"firstDisabled": "svgIcon=#alpha-icon-chevronDblLeft:icon iconDisabled iconButton",
					"prev": "svgIcon=#alpha-icon-chevronLeft:icon iconButton",
					"prevDisabled": "svgIcon=#alpha-icon-chevronLeft:icon iconDisabled iconButton",
					"next": "svgIcon=#alpha-icon-chevronRight:icon iconButton",
					"nextDisabled": "svgIcon=#alpha-icon-chevronRight:icon iconDisabled iconButton",
					"last": "svgIcon=#alpha-icon-chevronDblRight:icon iconButton",
					"lastDisabled": "svgIcon=#alpha-icon-chevronDblRight:icon iconDisabled iconButton"
				},
				"row": {
					"selected": "svgIcon=#alpha-icon-chevronRight:icon iconButton",
					"newRow": "svgIcon=#alpha-icon-doc:icon iconButton",
					"newRowSelected": "svgIcon=#alpha-icon-chevronRight:icon iconButton",
					"expand": "svgIcon=#alpha-icon-chevronRight:icon iconButton",
					"collapse": "svgIcon=#alpha-icon-chevronDown:icon iconButton",
					"error": "svgIcon=#alpha-icon-exclamationCircle:icon iconButton",
					"edit": "svgIcon=#alpha-icon-edit:icon iconButton",
					"editDisabled": "svgIcon=#alpha-icon-edit:icon iconDisabled iconButton",
					"save": "svgIcon=#alpha-icon-save:icon iconButton",
					"saveDisabled": "svgIcon=#alpha-icon-save:icon iconDisabled iconButton",
					"undoEdits": "svgIcon=#alpha-icon-undo:icon iconButton",
					"undoEditsDisabled": "svgIcon=#alpha-icon-undo:icon iconDisabled iconButton",
					"cancelEdits": "svgIcon=#alpha-icon-editCancel:icon iconButton",
					"cancelEditsDisabled": "svgIcon=#alpha-icon-editCancel:icon iconDisabled iconButton",
					"deleteRow": "svgIcon=#alpha-icon-removeCircle:icon iconButton",
					"deleteRowDisabled": "svgIcon=#alpha-icon-removeCircle:icon iconDisabled iconButton"
				},
				"qbe": {
					"menu": "svgIcon=#alpha-icon-filter:icon iconButton",
					"toggle": "svgIcon=#alpha-icon-filter:icon iconButton",
					"selected": "svgIcon=#alpha-icon-check:icon iconButton"
				},
				"search": {
					"search": "svgIcon=#alpha-icon-magGlass:icon iconButton",
					"clear": "svgIcon=#alpha-icon-magGlassX:icon iconButton",
					"toggle": "svgIcon=#alpha-icon-magGlass:icon iconButton",
					"save": "svgIcon=#alpha-icon-save:icon iconButton",
					"load": "svgIcon=#alpha-icon-load:icon iconButton"
				},
				"record": {
					"close": "svgIcon=#alpha-icon-xCircle:icon iconButton",
					"first": "svgIcon=#alpha-icon-chevronDblLeft:icon iconButton",
					"firstDisabled": "svgIcon=#alpha-icon-chevronDblLeft:icon iconDisabled iconButton",
					"prev": "svgIcon=#alpha-icon-chevronLeft:icon iconButton",
					"prevDisabled": "svgIcon=#alpha-icon-chevronLeft:icon iconDisabled iconButton",
					"next": "svgIcon=#alpha-icon-chevronRight:icon iconButton",
					"nextDisabled": "svgIcon=#alpha-icon-chevronRight:icon iconDisabled iconButton",
					"last": "svgIcon=#alpha-icon-chevronDblRight:icon iconButton",
					"lastDisabled": "svgIcon=#alpha-icon-chevronDblRight:icon iconDisabled iconButton",
					"newRecord": "svgIcon=#alpha-icon-docAdd:icon iconButton",
					"save": "svgIcon=#alpha-icon-save:icon iconButton",
					"saveDisabled": "svgIcon=#alpha-icon-save:icon iconDisabled iconButton",
					"saveAndEnter": "svgIcon=#alpha-icon-saveAndEnter:icon iconButton",
					"saveAndEnterDisabled": "svgIcon=#alpha-icon-saveAndEnter:icon iconDisabled iconButton",
					"deleteRecord": "svgIcon=#alpha-icon-docX:icon iconButton",
					"deleteRecordDisabled": "svgIcon=#alpha-icon-docX:icon iconDisabled iconButton",
					"switchToView": "svgIcon=#alpha-icon-x:icon iconButton",
					"switchToEdit": "svgIcon=#alpha-icon-edit:icon iconButton",
					"cancelEdits": "svgIcon=#alpha-icon-editCancel:icon iconButton",
					"cancelEditsDisabled": "svgIcon=#alpha-icon-editCancel:icon iconDisabled iconButton",
					"newCancelEdits": "svgIcon=#alpha-icon-editCancel:icon iconButton"
				}
			}
		}
	},
	"ux": {
		"base": {
			"labelClassName": "label",
			"repeatingSection": {
				"headerClassName": "uxRSHeader",
				"footerClassName": "uxRSFooter",
				"rowClassName": "",
				"rowSelectedClassName": "uxRSRowSelected",
				"rowHoverClassName": "uxRSRowHover",
				"rowErrorClassName": "uxRSRowError",
				"rowSeparatorClassName": "uxRSRowSep"
			},
			"icons": {
				"repeatingSection": {
					"rowSelected": "svgIcon=#alpha-icon-chevronRight:icon",
					"rowError": "svgIcon=#alpha-icon-exclamationCircle:icon",
					"rowAdd": "svgIcon=#alpha-icon-add:icon iconButton",
					"rowDelete": "svgIcon=#alpha-icon-remove:icon iconButton"
				}
			}
		}
	},
	"tabbedUI": {
		"base": {
			"headerClassName": "tabbedUIHeader",
			"footerClassName": "tabbedUIFooter",
			"bodyClassName": "",
			"menu": {
				"left": {
					"className": "tabbedUIMenu",
					"headerClassName": "tabbedUIMenuHeader",
					"collapsedClassName": "tabbedUIMenuCollapsed",
					"collapseIcon": "svgIcon=#alpha-icon-chevronDblLeft:icon iconButton",
					"expandIcon": "svgIcon=#alpha-icon-chevronDblRight:icon iconButton",
					"collapsedSize": "",
					"separatorClassName": "tabbedUISep"
				},
				"right": {
					"className": "tabbedUIMenu",
					"headerClassName": "tabbedUIMenuHeader",
					"collapsedClassName": "tabbedUIMenuCollapsed",
					"collapseIcon": "svgIcon=#alpha-icon-chevronDblRight:icon iconButton",
					"expandIcon": "svgIcon=#alpha-icon-chevronDblLeft:icon iconButton",
					"collapsedSize": "",
					"separatorClassName": "tabbedUISep"
				}
			}
		}
	},
	"panelCard": {
		"base": {
			"className": "panel",
			"header": {
				"className": "panelHeader"
			},
			"body": {
				"className": "panelBody"
			},
			"footer": {
				"className": "panelFooter"
			}
		},
		"alt": {
			"className": "panel",
			"header": {
				"className": "panelHeaderAlt"
			},
			"body": {
				"className": "panelBody"
			},
			"footer": {
				"className": "panelFooterAlt"
			}
		},
		"contrast": {
			"className": "panel",
			"header": {
				"className": "panelHeaderContrast"
			},
			"body": {
				"className": "panelBody"
			},
			"footer": {
				"className": "panelFooterContrast"
			}
		}
	},
	"panelNavigator": {
		"base": {
			"className": "panel",
			"header": {
				"className": "panelHeader"
			},
			"body": {
				"className": "panelNav"
			},
			"footer": {
				"className": "panelFooter"
			},
			"indicator": {
				"className": "",
				"panelClassName": "panelNavInd",
				"panelSelectedClassName": "panelNavIndSel"
			}
		},
		"alt": {
			"className": "panel",
			"header": {
				"className": "panelHeaderAlt"
			},
			"body": {
				"className": "panelNav"
			},
			"footer": {
				"className": "panelFooterAlt"
			},
			"indicator": {
				"className": "",
				"panelClassName": "panelNavInd",
				"panelSelectedClassName": "panelNavIndSel"
			}
		},
		"contrast": {
			"className": "panel",
			"header": {
				"className": "panelHeaderContrast"
			},
			"body": {
				"className": "panelNav"
			},
			"footer": {
				"className": "panelFooterContrast"
			},
			"indicator": {
				"className": "",
				"panelClassName": "panelNavInd",
				"panelSelectedClassName": "panelNavIndSel"
			}
		}
	},
	"panelLayout": {
		"base": {
			"className": "panel",
			"header": {
				"className": "panelHeader"
			},
			"body": {
				"className": "",
				"ltrClassName": "panelLTR",
				"rtlClassName": "panelRTL",
				"ttbClassName": "panelTTB",
				"bttClassName": "panelBTT"
			},
			"footer": {
				"className": "panelFooter"
			},
			"dock": {
				"panel": {
					"beforeClassName": "panelDockBefore",
					"afterClassName": "panelDockAfter"
				},
				"flowLock": {
					"className": "panelDockOverlay"
				}
			},
			"resizers": {
				"indicator": {
					"className": "",
					"topClassName": "",
					"leftClassName": "",
					"rightClassName": "",
					"bottomClassName": "",
					"minClassName": "",
					"maxClassName": ""
				},
				"edge": {
					"className": "",
					"style": "",
					"size": 5
				},
				"grip": {
					"className": "",
					"style": ""
				}
			}
		},
		"alt": {
			"className": "panel",
			"header": {
				"className": "panelHeaderAlt"
			},
			"body": {
				"className": "",
				"ltrClassName": "panelLTR",
				"rtlClassName": "panelRTL",
				"ttbClassName": "panelTTB",
				"bttClassName": "panelBTT"
			},
			"footer": {
				"className": "panelFooterAlt"
			},
			"dock": {
				"panel": {
					"beforeClassName": "panelDockBefore",
					"afterClassName": "panelDockAfter"
				},
				"flowLock": {
					"className": "panelDockOverlay"
				}
			},
			"resizers": {
				"indicator": {
					"className": "",
					"topClassName": "",
					"leftClassName": "",
					"rightClassName": "",
					"bottomClassName": "",
					"minClassName": "",
					"maxClassName": ""
				},
				"edge": {
					"className": "",
					"style": "",
					"size": 5
				},
				"grip": {
					"className": "",
					"style": ""
				}
			}
		},
		"contrast": {
			"className": "panel",
			"header": {
				"className": "panelHeaderContrast"
			},
			"body": {
				"className": "",
				"ltrClassName": "panelLTR",
				"rtlClassName": "panelRTL",
				"ttbClassName": "panelTTB",
				"bttClassName": "panelBTT"
			},
			"footer": {
				"className": "panelFooterContrast"
			},
			"dock": {
				"panel": {
					"beforeClassName": "panelDockBefore",
					"afterClassName": "panelDockAfter"
				},
				"flowLock": {
					"className": "panelDockOverlay"
				}
			},
			"resizers": {
				"indicator": {
					"className": "",
					"topClassName": "",
					"leftClassName": "",
					"rightClassName": "",
					"bottomClassName": "",
					"minClassName": "",
					"maxClassName": ""
				},
				"edge": {
					"className": "",
					"style": "",
					"size": 5
				},
				"grip": {
					"className": "",
					"style": ""
				}
			}
		}
	},
	"accordion": {
		"base": {
			"className": "accordion",
			"titleClassName": "accordionTitle",
			"titleSelectedClassName": "accordionTitleSelected",
			"titleDisabledClassName": "accordionTitleDisabled",
			"paneClassName": "accordionPane"
		},
		"indicator": {
			"className": "accordion accordionInd",
			"titleClassName": "accordionTitle",
			"titleSelectedClassName": "accordionTitleSelected",
			"titleDisabledClassName": "accordionTitleDisabled",
			"paneClassName": "accordionPane"
		}
	},
	"tab": {
		"base": {
			"location": "top",
			"className": "tabTop",
			"tabsClassName": "tabItemBand",
			"tabClassName": "tabItem",
			"tabSelectedClassName": "tabItemSelected",
			"tabDisabledClassName": "tabItemDisabled",
			"panesClassName": "",
			"paneClassName": "tabPane"
		},
		"bottom": {
			"location": "bottom",
			"className": "tabBottom",
			"tabsClassName": "tabItemBand",
			"tabClassName": "tabItem",
			"tabSelectedClassName": "tabItemSelected",
			"tabDisabledClassName": "tabItemDisabled",
			"panesClassName": "",
			"paneClassName": "tabPane"
		},
		"left": {
			"location": "left",
			"className": "tabLeft",
			"tabsClassName": "tabItemBand",
			"tabClassName": "tabItem",
			"tabSelectedClassName": "tabItemSelected",
			"tabDisabledClassName": "tabItemDisabled",
			"panesClassName": "",
			"paneClassName": "tabPane"
		},
		"right": {
			"location": "right",
			"className": "tabRight",
			"tabsClassName": "tabItemBand",
			"tabClassName": "tabItem",
			"tabSelectedClassName": "tabItemSelected",
			"tabDisabledClassName": "tabItemDisabled",
			"panesClassName": "",
			"paneClassName": "tabPane"
		},
		"flared": {
			"location": "top",
			"className": "tabFlared",
			"tabsClassName": "tabFlaredItemBand",
			"tabClassName": "tabFlaredItem",
			"tabSelectedClassName": "tabFlaredItemSelected",
			"tabDisabledClassName": "tabFlaredItemDisabled",
			"panesClassName": "tabFlaredPanes",
			"paneClassName": "tabPane"
		}
	},
	"tabBand": {
		"base": {
			"className": "tabband",
			"separator": {
				"className": ""
			},
			"tab": {
				"className": "tabbandTab",
				"selectedClassName": "tabbandTabSelected",
				"disabledClassName": "tabbandTabDisabled",
				"closeClassName": "",
				"closeIcon": "svgIcon=#alpha-icon-x:icon iconButton",
				"closeHoverIcon": "svgIcon=#alpha-icon-xCircle:icon iconButton iconDeny",
				"closeIconStyle": ""
			},
			"scrollButtons": {
				"overlay": false,
				"fullHeight": true,
				"prevClassName": "tabbandButton",
				"prevDisabledClassName": "tabbandButtonDisabled",
				"prevImage": "svgIcon=#alpha-icon-chevronLeft:icon",
				"prevDisabledImage": "svgIcon=#alpha-icon-chevronLeft:icon",
				"nextClassName": "tabbandButton",
				"nextDisabledClassName": "tabbandButtonDisabled",
				"nextImage": "svgIcon=#alpha-icon-chevronRight:icon",
				"nextDisabledImage": "svgIcon=#alpha-icon-chevronRight:icon"
			}
		},
		"flared": {
			"className": "tabbandFlared tabFlaredItemBand",
			"separator": {
				"className": ""
			},
			"tab": {
				"className": "tabFlaredItem",
				"selectedClassName": "tabFlaredItemSelected",
				"disabledClassName": "tabFlaredItemDisabled",
				"closeClassName": "",
				"closeIcon": "svgIcon=#alpha-icon-x:icon iconButton",
				"closeHoverIcon": "svgIcon=#alpha-icon-xCircle:icon iconButton iconDeny",
				"closeIconStyle": ""
			},
			"scrollButtons": {
				"overlay": false,
				"fullHeight": true,
				"prevClassName": "tabbandButton",
				"prevDisabledClassName": "tabbandButtonDisabled",
				"prevImage": "svgIcon=#alpha-icon-chevronLeft:icon",
				"prevDisabledImage": "svgIcon=#alpha-icon-chevronLeft:icon",
				"nextClassName": "tabbandButton",
				"nextDisabledClassName": "tabbandButtonDisabled",
				"nextImage": "svgIcon=#alpha-icon-chevronRight:icon",
				"nextDisabledImage": "svgIcon=#alpha-icon-chevronRight:icon"
			}
		}
	},
	"menu": {
		"base": {
			"className": "menu",
			"innerClassName": "",
			"iconColumn": {
				"className": "",
				"preventIndentClassName": "",
				"width": ""
			},
			"cascadeOffsetX": 0,
			"cascadeOffsetY": -1,
			"item": {
				"className": "menuItem",
				"labelClassName": "menuItemLabel",
				"iconClassName": "menuIcon",
				"hoverClassName": "menuItemHover",
				"selectedClassName": "menuItemSelected",
				"disabledClassName": "menuItemDisabled",
				"disabledHoverClassName": "",
				"cascadeClassName": "menuItemCascade",
				"separatorClassName": "menuSeparator",
				"titleClassName": "menuTitle",
				"radioImage": "svgIcon=#alpha-icon-checkCircle:icon",
				"checkImage": "svgIcon=#alpha-icon-checkCircle:icon"
			},
			"pointer": {
				"size": 10,
				"upClassName": "pointerUp",
				"leftClassName": "pointerLeft",
				"rightClassName": "pointerRight",
				"downClassName": "pointerDown"
			}
		}
	},
	"menubar": {
		"base": {
			"className": "",
			"layout": "horizontal",
			"item": {
				"className": "menubarItem",
				"hoverClassName": "menubarItemHover",
				"pressedClassName": "menubarItemPressed",
				"disabledClassName": "menubarItemDisabled",
				"cascadeClassName": "menubarItemCas",
				"separatorClassName": "menubarItemSep"
			}
		},
		"vertical": {
			"className": "menubarVertical",
			"layout": "horizontal",
			"item": {
				"className": "menubarItem",
				"hoverClassName": "menubarItemHover",
				"pressedClassName": "menubarItemPressed",
				"disabledClassName": "menubarItemDisabled",
				"cascadeClassName": "menubarItemCas",
				"separatorClassName": "menubarItemSep"
			}
		}
	},
	"window": {
		"base": {
			"className": "window",
			"outerWrapClassName": "",
			"innerWrapClassName": "",
			"activeClassName": "",
			"adjustmentClassName": "",
			"lockUIClassName": "lock",
			"title": {
				"location": "",
				"direction": "",
				"className": "windowTitle",
				"tools": {
					"inset": "0px",
					"verticalInset": "",
					"className": ""
				}
			},
			"header": {
				"className": "windowHeader"
			},
			"tbar": {
				"className": "windowTBar"
			},
			"body": {
				"className": "windowBody"
			},
			"buttons": {
				"className": "windowButtons"
			},
			"bbar": {
				"className": "windowBBar"
			},
			"footer": {
				"className": "windowFooter"
			},
			"resizer": {
				"className": "windowResize",
				"thumbImage": "cssIcon=windowResizeThumb"
			},
			"pointer": {
				"size": 10,
				"upClassName": "pointerUp",
				"leftClassName": "pointerLeft",
				"downClassName": "pointerDown",
				"rightClassName": "pointerRight"
			},
			"_defaultTools": {
				"close": {
					"action": "close",
					"name": "close",
					"image": "svgIcon=#alpha-icon-x:icon iconButton",
					"imageHover": "svgIcon=#alpha-icon-xCircle:icon iconButton iconDeny",
					"imagePressed": "svgIcon=#alpha-icon-xCircle:icon iconButton iconDeny"
				}
			},
			"_buttonDefaults": {
				"className": "button",
				"hoverClassName": "buttonHover",
				"pressedClassName": "buttonPressed",
				"disabledClassName": "buttonDisabled"
			}
		}
	},
	"listbox": {
		"base": {
			"className": "list",
			"disabledClassName": "listDisabled",
			"focusClassName": "listFocus",
			"columnLayout": {
				"header": {
					"className": "listColHeader",
					"item": {
						"className": "listColHeaderItem",
						"hoverClassName": "listColHeaderItemHover",
						"order": {
							"ascendingImage": "svgIcon=#alpha-icon-chevronUp:icon",
							"descendingImage": "svgIcon=#alpha-icon-chevronDown:icon",
							"className": ""
						},
						"resize": {
							"location": "after",
							"className": "listColHeaderItemResize",
							"handle": {
								"className": "",
								"size": "14px"
							}
						}
					}
				},
				"data": {
					"item": {
						"className": "listItemData"
					}
				}
			},
			"view": {
				"navigation": {
					"prev": {
						"className": "listNavButtonPrev",
						"pressedClassName": "listNavButtonPressed"
					},
					"next": {
						"className": "listNavButtonNext",
						"pressedClassName": "listNavButtonPressed"
					}
				}
			},
			"group": {
				"navigator": {
					"location": "right",
					"offset": 4,
					"size": 28,
					"className": "listNav",
					"focusClassName": ""
				}
			},
			"header": {
				"className": "listHeader"
			},
			"footer": {
				"className": "listFooter"
			},
			"lock": {
				"className": ""
			},
			"content": {
				"header": {
					"className": ""
				},
				"footer": {
					"className": ""
				}
			},
			"item": {
				"className": "listItem",
				"hoverClassName": "listItemHover",
				"selectedClassName": "listItemSelected",
				"titleClassName": "listItemTitle",
				"separatorClassName": "listItemSep",
				"parts": {
					"mainClassName": "listItemPartMain",
					"subClassName": "listItemPartSub",
					"contextClassName": "listItemPartContext",
					"detailClassName": "listItemPartDetail",
					"contentClassName": "listItemPartContent",
					"icons": {
						"navigate": "svgIcon=#alpha-icon-chevronRight:icon",
						"navigateSubtle": "svgIcon=#alpha-icon-chevronRight:icon"
					}
				}
			}
		},
		"lined": {
			"className": "list",
			"disabledClassName": "listDisabled",
			"focusClassName": "listFocus",
			"columnLayout": {
				"header": {
					"className": "listColHeader",
					"item": {
						"className": "listColHeaderItem",
						"hoverClassName": "listColHeaderItemHover",
						"order": {
							"ascendingImage": "svgIcon=#alpha-icon-chevronUp:icon",
							"descendingImage": "svgIcon=#alpha-icon-chevronDown:icon",
							"className": ""
						},
						"resize": {
							"location": "after",
							"className": "",
							"handle": {
								"className": "",
								"size": "14px"
							}
						}
					}
				},
				"data": {
					"item": {
						"className": "listItemData"
					}
				}
			},
			"view": {
				"navigation": {
					"prev": {
						"className": "listNavButtonPrev",
						"pressedClassName": "listNavButtonPressed"
					},
					"next": {
						"className": "listNavButtonNext",
						"pressedClassName": "listNavButtonPressed"
					}
				}
			},
			"group": {
				"navigator": {
					"location": "right",
					"offset": 4,
					"size": 28,
					"className": "listNav",
					"focusClassName": ""
				}
			},
			"header": {
				"className": "listHeader"
			},
			"footer": {
				"className": "listFooter"
			},
			"lock": {
				"className": ""
			},
			"content": {
				"header": {
					"className": ""
				},
				"footer": {
					"className": ""
				}
			},
			"item": {
				"className": "listItem listItemLined",
				"hoverClassName": "listItemHover",
				"selectedClassName": "listItemSelected",
				"titleClassName": "listItemTitle",
				"separatorClassName": "listItemSep",
				"parts": {
					"mainClassName": "listItemPartMain",
					"subClassName": "listItemPartSub",
					"contextClassName": "listItemPartContext",
					"detailClassName": "listItemPartDetail",
					"contentClassName": "listItemPartContent",
					"icons": {
						"navigate": "svgIcon=#alpha-icon-chevronRight:icon",
						"navigateSubtle": "svgIcon=#alpha-icon-chevronRight:icon"
					}
				}
			}
		},
		"subtle": {
			"className": "list",
			"disabledClassName": "listDisabled",
			"focusClassName": "listFocus",
			"columnLayout": {
				"header": {
					"className": "listColHeader",
					"item": {
						"className": "listColHeaderItem",
						"hoverClassName": "listColHeaderItemHover",
						"order": {
							"ascendingImage": "svgIcon=#alpha-icon-chevronUp:icon",
							"descendingImage": "svgIcon=#alpha-icon-chevronDown:icon",
							"className": ""
						},
						"resize": {
							"location": "after",
							"className": "",
							"handle": {
								"className": "",
								"size": "14px"
							}
						}
					}
				},
				"data": {
					"item": {
						"className": "listItemData"
					}
				}
			},
			"view": {
				"navigation": {
					"prev": {
						"className": "listNavButtonPrev",
						"pressedClassName": "listNavButtonPressed"
					},
					"next": {
						"className": "listNavButtonNext",
						"pressedClassName": "listNavButtonPressed"
					}
				}
			},
			"group": {
				"navigator": {
					"location": "right",
					"offset": 4,
					"size": 28,
					"className": "listNav",
					"focusClassName": ""
				}
			},
			"header": {
				"className": "listHeader"
			},
			"footer": {
				"className": "listFooter"
			},
			"lock": {
				"className": ""
			},
			"content": {
				"header": {
					"className": ""
				},
				"footer": {
					"className": ""
				}
			},
			"item": {
				"className": "listItem listItemSubtle",
				"hoverClassName": "listItemHover",
				"selectedClassName": "listItemSelected",
				"titleClassName": "listItemTitle",
				"separatorClassName": "listItemSep",
				"parts": {
					"mainClassName": "listItemPartMain",
					"subClassName": "listItemPartSub",
					"contextClassName": "listItemPartContext",
					"detailClassName": "listItemPartDetail",
					"contentClassName": "listItemPartContent",
					"icons": {
						"navigate": "svgIcon=#alpha-icon-chevronRight:icon",
						"navigateSubtle": "svgIcon=#alpha-icon-chevronRight:icon"
					}
				}
			}
		},
		"subtleLined": {
			"className": "list",
			"disabledClassName": "listDisabled",
			"focusClassName": "listFocus",
			"columnLayout": {
				"header": {
					"className": "listColHeader",
					"item": {
						"className": "listColHeaderItem",
						"hoverClassName": "listColHeaderItemHover",
						"order": {
							"ascendingImage": "svgIcon=#alpha-icon-chevronUp:icon",
							"descendingImage": "svgIcon=#alpha-icon-chevronDown:icon",
							"className": ""
						},
						"resize": {
							"location": "after",
							"className": "",
							"handle": {
								"className": "",
								"size": "14px"
							}
						}
					}
				},
				"data": {
					"item": {
						"className": "listItemData"
					}
				}
			},
			"view": {
				"navigation": {
					"prev": {
						"className": "listNavButtonPrev",
						"pressedClassName": "listNavButtonPressed"
					},
					"next": {
						"className": "listNavButtonNext",
						"pressedClassName": "listNavButtonPressed"
					}
				}
			},
			"group": {
				"navigator": {
					"location": "right",
					"offset": 4,
					"size": 28,
					"className": "listNav",
					"focusClassName": ""
				}
			},
			"header": {
				"className": "listHeader"
			},
			"footer": {
				"className": "listFooter"
			},
			"lock": {
				"className": ""
			},
			"content": {
				"header": {
					"className": ""
				},
				"footer": {
					"className": ""
				}
			},
			"item": {
				"className": "listItem listItemSubtle listItemLined",
				"hoverClassName": "listItemHover",
				"selectedClassName": "listItemSelected",
				"titleClassName": "listItemTitle",
				"separatorClassName": "listItemSep",
				"parts": {
					"mainClassName": "listItemPartMain",
					"subClassName": "listItemPartSub",
					"contextClassName": "listItemPartContext",
					"detailClassName": "listItemPartDetail",
					"contentClassName": "listItemPartContent",
					"icons": {
						"navigate": "svgIcon=#alpha-icon-chevronRight:icon",
						"navigateSubtle": "svgIcon=#alpha-icon-chevronRight:icon"
					}
				}
			}
		}
	},
	"tree": {
		"base": {
			"className": "tree",
			"disabledClassName": "treeDisabled",
			"focusClassName": "treeFocus",
			"node": {
				"className": "treeItem",
				"hoverClassName": "treeItemHover",
				"selectedClassName": "treeItemSelected",
				"labelClassName": "treeItemLabel",
				"leaf": {
					"firstImage": "",
					"image": "",
					"lastImage": ""
				},
				"branch": {
					"firstExpandedImage": "",
					"firstCollapsedImage": "",
					"firstExpandedHoverImage": "",
					"firstCollapsedHoverImage": "",
					"expandedImage": "svgIcon=#alpha-icon-chevronDown:icon iconButton",
					"collapsedImage": "svgIcon=#alpha-icon-chevronRight:icon iconButton",
					"expandedHoverImage": "",
					"collapsedHoverImage": "",
					"lastExpandedImage": "",
					"lastCollapsedImage": "",
					"lastExpandedHoverImage": "",
					"lastCollapsedHoverImage": ""
				}
			},
			"branch": {
				"className": "",
				"lineImage": "",
				"nullImage": "svgIcon=:icon iconButton"
			}
		}
	},
	"datePicker": {
		"base": {
			"className": "datePicker",
			"disabledClassName": "datePickerDisabled",
			"calendar": {
				"daysOfWeek": {
					"className": "datePickerDOW"
				},
				"weeksOfYear": {
					"className": "datePickerWOY",
					"headerClassName": ""
				},
				"date": {
					"className": "datePickerDate",
					"weekendClassName": "datePickerDate",
					"todayClassName": "datePickerDateToday",
					"item": {
						"className": "datePickerItem",
						"hoverClassName": "datePickerItemHover",
						"selectedClassName": "datePickerItemSelected",
						"disabledClassName": "datePickerItemDisabled",
						"outOfRangeClassName": "datePickerItemOOR"
					}
				}
			},
			"navigator": {
				"header": {
					"className": "",
					"prevIcon": "svgIcon=#alpha-icon-chevronLeft:icon iconButton",
					"nextIcon": "svgIcon=#alpha-icon-chevronRight:icon  iconButton",
					"prevIconHover": "",
					"nextIconHover": "",
					"todayButton": {
						"location": "right",
						"html": "Today",
						"tip": "Select today's date"
					},
					"item": {
						"className": "datePickerHeaderItem",
						"hoverClassName": "datePickerHeaderItemHover",
						"selectedClassName": "datePickerHeaderItemSelected"
					}
				},
				"panel": {
					"className": "",
					"edit": {
						"className": "edit"
					},
					"item": {
						"className": "datePickerItem",
						"hoverClassName": "datePickerItemHover",
						"selectedClassName": "datePickerItemSelected",
						"disabledClassName": "datePickerItemDisabled"
					}
				}
			}
		}
	},
	"timePicker": {
		"base": {
			"className": "",
			"disabledClassName": "timePickerDisabled",
			"edit": {
				"className": "edit",
				"buttonClassName": "timePickerButton",
				"buttonImage": ""
			},
			"meridianClassName": "timePickerMeridian"
		}
	},
	"edit": {
		"base": {
			"className": "edit",
			"errorClassName": "editError",
			"watermark": {
				"className": "editWatermark"
			}
		},
		"primary": {
			"className": "editPrimary",
			"errorClassName": "editError",
			"watermark": {
				"className": "editWatermark"
			}
		}
	},
	"editButtonGroup": {
		"base": {
			"watermark": {
				"className": "editWatermark editBGWatermark"
			},
			"container": {
				"className": "editBG",
				"hoverClassName": "editBGHover",
				"focusClassName": "editBGFocus",
				"errorClassName": "editBGError",
				"separatorClassName": "",
				"editClassName": "editBGEdit",
				"button": {
					"html": "&rsaquo;",
					"className": "editBGButton",
					"hoverClassName": "editBGButtonHover",
					"pressedClassName": "editBGButtonPressed"
				}
			},
			"window": {
				"pointer": {
					"show": false
				}
			}
		},
		"primary": {
			"watermark": {
				"className": "editWatermark editBGWatermark"
			},
			"container": {
				"className": "editBGPrimary",
				"hoverClassName": "editBGHover",
				"focusClassName": "editBGFocus",
				"errorClassName": "editBGError",
				"separatorClassName": "",
				"editClassName": "editBGEdit",
				"button": {
					"html": "&rsaquo;",
					"className": "editBGButton",
					"hoverClassName": "editBGButtonHover",
					"pressedClassName": "editBGButtonPressed"
				}
			},
			"window": {
				"pointer": {
					"show": false
				}
			}
		}
	},
	"button": {
		"base": {
			"className": "button",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"confirm": {
			"className": "button buttonConfirm",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"deny": {
			"className": "button buttonDeny",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"left": {
			"className": "button buttonLeft",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"right": {
			"className": "button buttonRight",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"primary": {
			"className": "button buttonPrimary",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"secondary": {
			"className": "button buttonSecondary",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"raised": {
			"className": "button buttonPrimary buttonRaised",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"subtle": {
			"className": "button buttonSubtle",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"icon": {
			"className": "buttonIcon",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"iconText": {
			"className": "buttonIcon buttonIconText",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"iconRaised": {
			"className": "buttonIcon buttonPrimary buttonRaised",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"capsule": {
			"className": "buttonIcon buttonRounded",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"capsuleRaised": {
			"className": "buttonIcon buttonRaised buttonRounded",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"capsuleSubtle": {
			"className": "buttonIcon buttonRounded buttonSubtle",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"capsuleSubtleRaised": {
			"className": "buttonIcon buttonRaised buttonRounded buttonSubtle",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"circle": {
			"className": "buttonIcon buttonRounded buttonCircle",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"circleRaised": {
			"className": "buttonIcon buttonRaised buttonRounded  buttonCircle",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"circleSubtle": {
			"className": "buttonIcon buttonRounded  buttonCircle buttonSubtle",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"circleSubtleRaised": {
			"className": "buttonIcon buttonRaised buttonRounded  buttonCircle buttonSubtle",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"outline": {
			"className": "button buttonOutline",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"outlineRaised": {
			"className": "button buttonOutline buttonRaised",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"outlineCapsule": {
			"className": "buttonIcon buttonOutline buttonRounded",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"outlineCapsuleRaised": {
			"className": "buttonIcon buttonOutline buttonRounded buttonRaised",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"outlineConfirm": {
			"className": "button buttonConfirm buttonOutline",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		},
		"outlineDeny": {
			"className": "button buttonDeny buttonOutline",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled"
		}
	},
	"buttonDropdown": {
		"base": {
			"className": "buttonDD",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled",
			"contentClassName": "buttonContent",
			"dropdown": {
				"location": "right",
				"className": "buttonDDArrow",
				"html": "",
				"icon": ""
			}
		}
	},
	"buttonSplit": {
		"base": {
			"className": "buttonSplit",
			"hoverClassName": "buttonHover",
			"pressedClassName": "buttonPressed",
			"disabledClassName": "buttonDisabled",
			"contentClassName": "buttonContent",
			"dropdown": {
				"location": "right",
				"className": "buttonSplitArrow",
				"hoverClassName": "buttonSplitArrowHover",
				"html": "",
				"icon": ""
			}
		}
	},
	"buttonList": {
		"base": {
			"className": "",
			"button": {
				"className": "button",
				"firstClassName": "buttonGroupFirst",
				"lastClassName": "buttonGroupLast",
				"middleClassName": "buttonGroupMid",
				"hoverClassName": "buttonHover",
				"pressedClassName": "buttonPressed",
				"disabledClassName": "buttonDisabled"
			}
		},
		"vertical": {
			"className": "",
			"button": {
				"className": "button",
				"firstClassName": "buttonGroupVFirst",
				"lastClassName": "buttonGroupVLast",
				"middleClassName": "buttonGroupVMid",
				"hoverClassName": "buttonHover",
				"pressedClassName": "buttonPressed",
				"disabledClassName": "buttonDisabled"
			}
		},
		"primary": {
			"className": "",
			"button": {
				"className": "button buttonListPrimary",
				"firstClassName": "buttonGroupFirst",
				"lastClassName": "buttonGroupLast",
				"middleClassName": "buttonGroupMid",
				"hoverClassName": "buttonHover",
				"pressedClassName": "buttonPressed",
				"disabledClassName": "buttonDisabled"
			}
		},
		"primaryVertical": {
			"className": "",
			"button": {
				"className": "button buttonListPrimary",
				"firstClassName": "buttonGroupVFirst",
				"lastClassName": "buttonGroupVLast",
				"middleClassName": "buttonGroupVMid",
				"hoverClassName": "buttonHover",
				"pressedClassName": "buttonPressed",
				"disabledClassName": "buttonDisabled"
			}
		},
		"iconText": {
			"className": "",
			"button": {
				"className": "buttonIcon buttonIconText",
				"firstClassName": "buttonGroupFirst",
				"lastClassName": "buttonGroupLast",
				"middleClassName": "buttonGroupMid",
				"hoverClassName": "buttonHover",
				"pressedClassName": "buttonPressed",
				"disabledClassName": "buttonDisabled"
			}
		},
		"raised": {
			"className": "buttonRaised",
			"button": {
				"className": "button buttonListPrimary",
				"firstClassName": "buttonGroupFirst",
				"lastClassName": "buttonGroupLast",
				"middleClassName": "buttonGroupMid",
				"hoverClassName": "buttonHover",
				"pressedClassName": "buttonPressed",
				"disabledClassName": "buttonDisabled"
			}
		},
		"raisedVertical": {
			"className": "buttonRaised",
			"button": {
				"className": "button buttonListPrimary",
				"firstClassName": "buttonGroupVFirst",
				"lastClassName": "buttonGroupVLast",
				"middleClassName": "buttonGroupVMid",
				"hoverClassName": "buttonHover",
				"pressedClassName": "buttonPressed",
				"disabledClassName": "buttonDisabled"
			}
		}
	},
	"slider": {
		"base": {
			"className": "slider",
			"disabledClassName": "sliderDisabled",
			"innerClassName": "sliderInner",
			"handle": {
				"className": "sliderHandle",
				"hoverClassName": "sliderHandleHover",
				"selectedClassName": "sliderHandleSelected",
				"minClassName": "",
				"maxClassName": ""
			},
			"range": {
				"className": "sliderRange",
				"hoverClassName": "sliderRangeHover",
				"selectedClassName": "sliderRangeSelected"
			}
		}
	},
	"switch": {
		"base": {
			"flow": "ltr",
			"className": "switch",
			"disabledClassName": "switchDisabled",
			"onClassName": "switchOn",
			"offClassName": "",
			"innerClassName": "switchInner",
			"rightClassName": "switchRight",
			"leftClassName": "switchLeft",
			"buttonClassName": "switchButton"
		}
	},
	"scroll": {
		"base": {
			"indicator": {
				"h": {
					"className": "scrollIndH",
					"barClassName": "scrollIndHBar",
					"location": "bottom",
					"offset": "2px",
					"left": "0px",
					"right": "0px"
				},
				"v": {
					"className": "scrollIndV",
					"barClassName": "scrollIndVBar",
					"location": "right",
					"offset": "2px",
					"top": "0px",
					"bottom": "0px"
				}
			}
		}
	},
	"scroller": {
		"base": {
			"flow": "ttb",
			"location": "after",
			"className": "scroller",
			"focusClassName": "scrollerActive",
			"dialClassName": "scrollerDialActive",
			"offset": {
				"top": "0px",
				"bottom": "0px",
				"left": "0px",
				"right": "6px"
			},
			"slider": {
				"className": "scrollerSlider",
				"innerClassName": "scrollerSliderInner",
				"handle": {
					"className": "scrollerSliderHandle"
				},
				"shadow": {
					"className": "scrollerSliderShadow"
				},
				"message": {
					"className": "scrollerSliderMsg",
					"topClassName": "scrollerSliderMsgT",
					"bottomClassName": "scrollerSliderMsgB",
					"leftClassName": "scrollerSliderMsgL",
					"rightClassName": "scrollerSliderMsgR"
				}
			},
			"dial": {
				"invertDrag": false,
				"className": "scrollerDial",
				"message": {
					"location": "center",
					"className": "scrollerDialMsg",
					"mainClassName": "scrollerDialMsgMain"
				}
			},
			"leftClassName": "scrollerLeft",
			"rightClassName": "scrollerRight",
			"topClassName": "scrollerTop",
			"bottomClassName": "scrollerBottom"
		}
	},
	"ink": {
		"base": {
			"className": "ink",
			"view": {
				"className": "inkArea",
				"zoomBox": {
					"className": "inkZoomBox",
					"navigateClassName": "inkZoomBox",
					"scale": {
						"className": "inkZoomBoxScale"
					}
				},
				"page": {
					"className": "inkPage",
					"offset": 1
				}
			},
			"editor": {
				"className": "inkArea",
				"page": {
					"className": "inkPage",
					"offset": 1
				}
			},
			"split": {
				"bar": {
					"show": false,
					"size": "1px",
					"className": "inkSplitBar",
					"verticalClassName": "",
					"horizontalClassName": ""
				}
			},
			"tools": {
				"pen": {
					"activeClassName": "",
					"preview": {
						"size": 38,
						"width": {
							"show": "never"
						},
						"clip": {
							"shape": "circle"
						}
					}
				},
				"eraser": {
					"activeClassName": "",
					"areaClassName": "inkEraser"
				},
				"pan": {
					"activeClassName": ""
				}
			},
			"ui": {
				"popup": {
					"lockClassName": "inkPopupLock",
					"className": "inkPopup",
					"group": {
						"className": "inkPopupGroup"
					},
					"swatch": {
						"className": "inkPopupSwatch",
						"selectedClassName": "inkPopupSwatchSelected"
					},
					"button": {
						"className": "inkPopupButton"
					}
				},
				"button": {
					"className": "inkButton",
					"selectedClassName": "inkButtonSelected"
				},
				"bar": {
					"topClassName": "inkBarTop",
					"bottomClassName": "inkBarBottom",
					"leftClassName": "inkBarLeft",
					"rightClassName": "inkBarRight"
				},
				"group": {
					"topClassName": "inkGroupTop",
					"bottomClassName": "inkGroupBottom",
					"leftClassName": "inkGroupLeft",
					"rightClassName": "inkGroupRight"
				},
				"statusClassName": "inkStatus",
				"icons": {
					"left": "svgIcon=#alpha-icon-chevronLeft:icon",
					"right": "svgIcon=#alpha-icon-chevronRight:icon",
					"newLineLTR": "svgIcon=#alpha-icon-returnLeft:icon",
					"newLineRTL": "svgIcon=#alpha-icon-returnRight:icon",
					"eraser": "svgIcon=#alpha-icon-eraser:icon",
					"undo": "svgIcon=#alpha-icon-undo:icon",
					"redo": "svgIcon=#alpha-icon-redo:icon",
					"expand": "svgIcon=#alpha-icon-expand:icon",
					"collapse": "svgIcon=#alpha-icon-compress:icon",
					"pan": "svgIcon=#alpha-icon-arrows:icon",
					"in": "svgIcon=#alpha-icon-magGlassIn:icon",
					"out": "svgIcon=#alpha-icon-magGlassOut:icon",
					"fit": "svgIcon=#alpha-icon-magGlassX:icon"
				}
			}
		}
	},
	"controlBar": {
		"base": {
			"disclosure": {
				"animation": {
					"duration": 300
				},
				"coverClassName": "",
				"cover": {
					"rightClassName": "",
					"leftClassName": "",
					"topClassName": "",
					"bottomClassName": ""
				},
				"extend": {
					"rightClassName": "",
					"leftClassName": "",
					"topClassName": "ctrlBarDisExtendT",
					"bottomClassName": ""
				},
				"expand": {
					"rightClassName": "ctrlBarDisExpandR",
					"leftClassName": "ctrlBarDisExpandL",
					"topClassName": "ctrlBarDisExpandT",
					"bottomClassName": "ctrlBarDisExpandB"
				},
				"defaults": {
					"className": "ctrlBarDis"
				}
			},
			"topClassName": "ctrlBarHorz",
			"bottomClassName": "ctrlBarHorz",
			"leftClassName": "ctrlBarVert",
			"rightClassName": "ctrlBarVert",
			"separator": {
				"horizontalClassName": "ctrlBarSepHorz",
				"verticalClassName": "ctrlBarSepVert"
			}
		},
		"contrast": {
			"disclosure": {
				"animation": {
					"duration": 300
				},
				"coverClassName": "",
				"cover": {
					"rightClassName": "",
					"leftClassName": "",
					"topClassName": "",
					"bottomClassName": ""
				},
				"extend": {
					"rightClassName": "ctrlBarDisExtendR",
					"leftClassName": "ctrlBarDisExtendL",
					"topClassName": "ctrlBarDisExtendT",
					"bottomClassName": "ctrlBarDisExtendB"
				},
				"expand": {
					"rightClassName": "ctrlBarDisExpandR",
					"leftClassName": "ctrlBarDisExpandL",
					"topClassName": "ctrlBarDisExpandT",
					"bottomClassName": "ctrlBarDisExpandB"
				},
				"defaults": {
					"className": "ctrlBarDisContrast"
				}
			},
			"topClassName": "ctrlBarHorz",
			"bottomClassName": "ctrlBarHorz",
			"leftClassName": "ctrlBarVert",
			"rightClassName": "ctrlBarVert",
			"separator": {
				"horizontalClassName": "ctrlBarSepHorz",
				"verticalClassName": "ctrlBarSepVert"
			}
		}
	},
	"spinList": {
		"base": {
			"groupClassName": "spinListGroup",
			"className": "spinList",
			"disabledClassName": "spinListDisabled",
			"item": {
				"className": "spinListItem"
			}
		},
		"primary": {
			"groupClassName": "spinListGroup",
			"className": "spinList spinListPrimary",
			"disabledClassName": "spinListDisabled",
			"item": {
				"className": "spinListItem"
			}
		}
	}
});