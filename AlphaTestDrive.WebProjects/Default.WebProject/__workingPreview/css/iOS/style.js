
A5.themes.add('iOS',{
	panelCard: {
		base: {
			className: 'iOSPanelCard',
			header: {className: 'iOSPanelHeader'},
			body: {className: 'iOSPanelBody'},
			footer: {className: 'iOSPanelFooter'}
		},
		top: {
			className: 'iOSPanelCard',
			header: {className: 'iOSPanelTopHeader'},
			body: {className: 'iOSPanelTopBody'},
			footer: {className: 'iOSPanelTopFooter'}
		}
	},
	panelNavigator: {
		base: {
			header: {className: 'iOSPanelHeader'},
			body: {className: 'iOSPanelBody'},
			footer: {className: 'iOSPanelFooter'},
			indicator: {
				className: 'iOSPanelNavInd',
				panelClassName: 'iOSPanelNavIndButton',
				panelSelectedClassName: 'iOSPanelNavIndButtonSelected'
			}
		},
		top: {
			header: {className: 'iOSPanelTopHeader'},
			body: {className: 'iOSPanelTopBody'},
			footer: {className: 'iOSPanelTopFooter'},
			indicator: {
				className: 'iOSPanelNavInd',
				panelClassName: 'iOSPanelNavIndButton',
				panelSelectedClassName: 'iOSPanelNavIndButtonSelected'
			}
		}
	},
	panelLayout: {
		base: {
			header: {className: 'iOSPanelHeader'},
			body: {className: 'iOSPanelBody'},
			footer: {className: 'iOSPanelFooter'},
			dock: {flowLock: {className: 'iOSPanelOverlay'}}
		},
		top: {
			header: {className: 'iOSPanelTopHeader'},
			body: {className: 'iOSPanelTopBody'},
			footer: {className: 'iOSPanelTopFooter'},
			dock: {flowLock: {className: 'iOSPanelOverlay'}}
		}
	},
	window: {
		base: {
			className: 'iOSWin',
			activeClassName: '',
			adjustmentClassName: '',
			outerWrapClassName: 'iOSWinInner',
			innerWrapClassName: 'iOSWinBodyContainer',
			lockUIClassName: 'iOSUILock',
			title: {className: 'iOSWinTitle'},
			header: {className: 'iOSWinHeader'},
			tbar: {className: 'iOSWinTBar'},
			body: {className: 'iOSWinBody'},
			buttons: {className: 'iOSWinButtons'},
			bbar: {className: 'iOSWinBBar'},
			footer: {className: 'iOSWinFooter'},
			resizer: {
				className: 'iOSWinResizer',
				thumbImage: 'css/iOS/WinResizeThumb.png'
			},
			pointer: {
				size: 15,
				upClassName: 'iOSWinPointerUp',
				leftClassName: 'iOSWinPointerLeft',
				downClassName: 'iOSWinPointerDown',
				rightClassName: 'iOSWinPointerRight'
			},
			_buttonDefaults: {
				className: 'iOSButton',
				hoverClassName: 'iOSButtonHover',
				pressedClassName: 'iOSButtonPressed',
				disabledClassName: 'iOSButtonDisabled'
			},
			_defaultTools: {
				'close': {
					action: 'close',
					name: 'close',
					image: 'css/iOS/WinClose.png'
				}
			}
		},
		dropdown: {
			className: 'iOSDDWin',
			activeClassName: '',
			adjustmentClassName: '',
			outerWrapClassName: 'iOSDDWinInner',
			innerWrapClassName: 'iOSDDWinBodyContainer',
			lockUIClassName: 'iOSUILock',
			title: {className: 'iOSDDWinTitle'},
			header: {className: 'iOSDDWinHeader'},
			tbar: {className: 'iOSDDWinTBar'},
			body: {className: 'iOSDDWinBody'},
			buttons: {className: 'iOSDDWinButtons'},
			bbar: {className: 'iOSDDWinBBar'},
			footer: {className: 'iOSDDWinFooter'},
			resizer: {
				className: 'iOSDDWinResizer',
				thumbImage: 'css/iOS/DDWinResizeThumb.png'
			},
			pointer: {
				size: 15,
				upClassName: 'iOSDDWinPointerUp',
				leftClassName: 'iOSDDWinPointerLeft',
				downClassName: 'iOSDDWinPointerDown',
				rightClassName: 'iOSDDWinPointerRight'
			},
			_buttonDefaults: {
				className: 'iOSButton',
				hoverClassName: 'iOSButtonHover',
				pressedClassName: 'iOSButtonPressed',
				disabledClassName: 'iOSButtonDisabled'
			},
			_defaultTools: {
				'close': {
					action: 'close',
					name: 'close',
					image: 'css/iOS/DDWinClose.png'
				}
			}
		},
		panel: {
			className: 'iOSPanelCard',
			activeClassName: '',
			adjustmentClassName: '',
			outerWrapClassName: '',
			innerWrapClassName: '',
			lockUIClassName: 'iOSUILock',
			title: {className: 'iOSPanelTopHeader'},
			header: {className: 'iOSPanelHeader'},
			tbar: {className: 'iOSPanelHeader'},
			body: {className: 'iOSPanelBody'},
			buttons: {className: 'iOSPanelFooter'},
			bbar: {className: 'iOSPanelFooter'},
			footer: {className: 'iOSPanelFooter'},
			resizer: {
				className: 'iOSDDWinResizer',
				thumbImage: 'css/iOS/DDWinResizeThumb.png'
			},
			_buttonDefaults: {
				className: 'iOSButton',
				hoverClassName: 'iOSButtonHover',
				pressedClassName: 'iOSButtonPressed',
				disabledClassName: 'iOSButtonDisabled'
			},
			_defaultTools: {
				'close': {
					action: 'close',
					name: 'close',
					image: 'css/iOS/WinClose.png'
				}
			}
		}
	},
	menu: {
		base: {
			className: 'iOSMenu',
			innerClassName: 'iOSMenuInner',
			iconColumn: {
				className: '',
				preventIndentClassName: '',
				width: '20px'
			},
			cascadeOffsetX: 0,
			cascadeOffsetY: -2,
			item: {
				className: 'iOSMenuItem',
				labelClassName: '',
				hoverClassName: 'iOSMenuItemHover',
				selectedClassName: 'iOSMenuItemSelected',
				disabledClassName: 'iOSMenuItemDisabled',
				disabledHoverClassName: '',
				cascadeClassName: 'iOSMenuItemCascade',
				separatorClassName: 'iOSMenuSeparator',
				titleClassName: 'iOSMenuTitle',
				radioImage: 'css/iOS/MenuRadio.png',
				checkImage: 'css/iOS/MenuCheck.png'
			},
			pointer: {
				show: true,
				location: 'auto',
				size: 15,
				upClassName: 'iOSMenuPointerUp',
				leftClassName: 'iOSMenuPointerLeft',
				downClassName: 'iOSMenuPointerDown',
				rightClassName: 'iOSMenuPointerRight'
			}
		}
	},
	menubar: {
		base: {
			item: {
				className: 'iOSMenubarHItem',
				hoverClassName: 'iOSMenubarHItemHover',
				pressedClassName: 'iOSMenubarHItemPressed',
				disabledClassName: 'iOSMenubarHItemDisabled',
				cascadeClassName: 'iOSMenubarHItemCascade',
				separatorClassName: 'iOSMenubarHSeparator'
			}
		},
		vertical: {
			item: {
				className: 'iOSMenubarVItem',
				hoverClassName: 'iOSMenubarVItemHover',
				pressedClassName: 'iOSMenubarVItemPressed',
				disabledClassName: 'iOSMenubarVItemDisabled',
				cascadeClassName: 'iOSMenubarVItemCascade',
				separatorClassName: 'iOSMenubarVSeparator'
			}
		}
	},
	listbox: {
		base: {
			className: 'iOSList',
			focusClassName: '',
			item: {
				className: 'iOSListItem',
				hoverClassName: '',
				selectedClassName: 'iOSListItemSelected',
				titleClassName: 'iOSListTitle',
				separatorClassName: 'iOSListSeparator'
			},
			view: {
				navigation: {
					prev: {className: 'iOSListNavPrev', pressedClassName: 'iOSListNavPressed'},
					next: {className: 'iOSListNavNext', pressedClassName: 'iOSListNavPressed'}
				}
			},
			group: {
				navigator: {
					className: 'iOSListGroupNav',
					focusClassName: 'iOSListGroupNavFocus'
				}
			},
			columnLayout: {
				header: {
					className: 'iOSListHeader',
					item: {
						className: 'iOSListHeaderItem',
						hoverClassName: '',
						order: {
							ascendingImage: 'css/iOS/listSortAsc.png',
							descendingImage: 'css/iOS/listSortDesc.png',
							style: 'position: absolute; right: 6px; top: 50%; margin-top: -12px; display: none;'
						}
					}
				}
			}
		}
	},
	spinList: {
		base: {
			className: 'iOSSpinList',
			item: {className: 'iOSSpinListItem'}
		},
		selectionBand: {
			className: 'iOSSpinList iOSSpinListSelectBand',
			item: {className: 'iOSSpinListItem'}
		},
		light: {
			className: 'iOSSpinListLight',
			item: {className: 'iOSSpinListItem'}
		},
		lightSelectionBand: {
			className: 'iOSSpinListLight iOSSpinListLightSelectBand',
			item: {className: 'iOSSpinListItem'}
		}
	},
	tree: {
		base: {
			className: 'iOSTree',
			focusClassName: '',
			node: {
				className: 'iOSTreeNode',
				hoverClassName: '',
				selectedClassName: 'iOSTreeNodeSelected',
				labelClassName: 'iOSTreeNodeLabel',
				leaf: {
					firstImage: '',
					image: 'css/iOS/null.PNG',
					lastImage: ''
				},
				branch: {
					firstExpandedImage: '',
					firstCollapsedImage: '',
					firstExpandedHoverImage: '',
					firstCollapsedHoverImage: '',
					expandedImage: 'css/iOS/TreeBranchCollapse.png',
					collapsedImage: 'css/iOS/TreeBranchExpand.png',
					expandedHoverImage: '',
					collapsedHoverImage: '',
					lastExpandedImage: '',
					lastCollapsedImage: '',
					lastExpandedHoverImage: '',
					lastCollapsedHoverImage: ''
				}
			},
			branch: {
				className: '',
				lineImage: '',
				nullImage: 'css/iOS/TreeNull.PNG'
			}
		}
	},
	datePicker: {
		base: {
			className: 'iOSDP',
			calendar: {
				daysOfWeek: {
					className: 'iOSDPDaysOfWeek'
				},
				weeksOfYear: {
					className: 'iOSDPWeeksOfYear',
					headerClassName: 'iOSDPWeeksOfYearHeader'
				},
				date: {
					className: 'iOSDPDate',
					weekendClassName: 'iOSDPDate',
					todayClassName: 'iOSDPDateToday',
					item: {
						className: 'iOSDPItem',
						hoverClassName: 'iOSDPItemHover',
						selectedClassName: 'iOSDPItemSelected',
						disabledClassName: 'iOSDPItemDisabled',
						outOfRangeClassName: 'iOSDPItemOutOfRange'
					}
				}
			},
			navigator: {
				header: {
					className: 'iOSDPHeader',
					prevIcon: 'css/iOS/DPPrev.PNG',
					nextIcon: 'css/iOS/DPNext.PNG',
					prevIconHover: '',
					nextIconHover: '',
					item: {
						className: 'iOSDPHeaderButton',
						hoverClassName: 'iOSDPHeaderButtonHover',
						selectedClassName: 'iOSDPHeaderButtonSelected'
					}
				},
				panel: {
					className: 'iOSDPPanel',
					edit: {
						className: 'iOSDPEdit'
					},
					item: {
						className: 'iOSDPPanelItem',
						hoverClassName: 'iOSDPPanelItemHover',
						selectedClassName: 'iOSDPPanelItemSelected',
						disabledClassName: 'iOSDPPanelItemDisabled'
					}
				}
			}
		}
	},
	timePicker: {
		base: {
			className: 'iOSTP',
			edit: {
				className: 'iOSEdit',
				buttonClassName: 'iOSTPEditButton',
				buttonImage: 'css/iOS/TPEditDDArrow.PNG'
			},
			meridianClassName: 'iOSTPMeridianButton'
		}
	},
	editButtonGroup: {
		base: {
			watermark: {
				className: 'iOSEditBGWatermark',
				style: ''
			},
			container: {
				className: 'iOSEditBG',
				hoverClassName: 'iOSEditBGHover',
				focusClassName: 'iOSEditBGFocus',
				separatorClassName: 'iOSEditBGSeparator',
				editClassName: 'iOSEditBGEdit',
				button: {
					html: '<img src="CSS/iOS/EditDDArrow.PNG" />',
					className: 'iOSEditBGButton',
					hoverClassName: 'iOSEditBGButtonHover',
					pressedClassName: 'iOSEditBGButtonPressed'
				}
			},
			window: {
				pointer: {
					show: true,
					location: 'auto'
				}
			}
		}
	},
	button: {
		base: {
			className: 'iOSButton',
			pressedClassName: 'iOSButtonPressed',
			disabledClassName: 'iOSButtonDisabled'
		},
		action: {
			className: 'iOSButtonAction',
			pressedClassName: 'iOSButtonActionPressed',
			disabledClassName: 'iOSButtonActionDisabled'
		},
		confirm: {
			className: 'iOSButtonConfirm',
			pressedClassName: 'iOSButtonConfirmPressed',
			disabledClassName: 'iOSButtonConfirmDisabled'
		},
		deny: {
			className: 'iOSButtonDeny',
			pressedClassName: 'iOSButtonDenyPressed',
			disabledClassName: 'iOSButtonDenyDisabled'
		},
		left: {
			className: 'iOSButtonLeft',
			pressedClassName: 'iOSButtonLeftPressed',
			disabledClassName: 'iOSButtonDisabled'
		},
		right: {
			className: 'iOSButtonRight',
			pressedClassName: 'iOSButtonRightPressed',
			disabledClassName: 'iOSButtonDisabled'
		}
	},
	buttonDropdown: {
		base: {
			className: 'iOSButtonDD',
			hoverClassName: '',
			pressedClassName: 'iOSButtonDDPressed',
			disabledClassName: 'iOSButtonDDDisabled',
			contentClassName: 'iOSButtonDDContent',
			dropdown: {
				className: 'iOSButtonDDDropdown',
				icon: ''
			}
		}
	},
	buttonSplit: {
		base: {
			className: 'iOSButtonDD',
			hoverClassName: '',
			pressedClassName: 'iOSButtonDDPressed',
			disabledClassName: 'iOSButtonDDDisabled',
			contentClassName: 'iOSButtonDDSplitContent',
			dropdown: {
				className: 'iOSButtonDDSplitDropdown',
				hoverClassName: '',
				icon: ''
			}
		}
	},
	buttonList: {
		base: {
			button: {
				className: 'iOSButton',
				firstClassName: 'iOSButtonGroupHF',
				lastClassName: 'iOSButtonGroupHL',
				middleClassName: 'iOSButtonGroupHM',
				hoverClassName: '',
				pressedClassName: 'iOSButtonPressed',
				disabledClassName: 'iOSButtonDisabled'
			}
		},
		vertical: {
			button:{
				className: 'iOSButton',
				firstClassName: 'iOSButtonGroupVF',
				lastClassName: 'iOSButtonGroupVL',
				middleClassName: 'iOSButtonGroupVM',
				hoverClassName: '',
				pressedClassName: 'iOSButtonPressed',
				disabledClassName: 'iOSButtonDisabled'
			}
		}
	},
	accordion: {
		base: {
			titleClassName: 'iOSAccordionButton',
			titleSelectedClassName: 'iOSAccordionButtonSelected',
			titleDisabledClassName: 'iOSAccordionButtonDisabled',
			paneClassName: 'iOSAccordionPane'
		},
		icon: {
			titleClassName: 'iOSAccordionIconButton',
			titleSelectedClassName: 'iOSAccordionIconButtonSelected',
			titleDisabledClassName: 'iOSAccordionIconButtonDisabled',
			paneClassName: 'iOSAccordionPane'
		}
	},
	tab: {
		base: {
			tabClassName: 'iOSTabTButton',
			tabSelectedClassName: 'iOSTabTButtonSelected',
			tabDisabledClassName: 'iOSTabTButtonDisabled',
			paneClassName: 'iOSTabTPane'
		},
		bottom: {
			tabClassName: 'iOSTabBButton',
			tabSelectedClassName: 'iOSTabBButtonSelected',
			tabDisabledClassName: 'iOSTabBButtonDisabled',
			paneClassName: 'iOSTabBPane'
		},
		right: {
			tabClassName: 'iOSTabRButton',
			tabSelectedClassName: 'iOSTabRButtonSelected',
			tabDisabledClassName: 'iOSTabRButtonDisabled',
			paneClassName: 'iOSTabRPane'
		},
		left: {
			tabClassName: 'iOSTabLButton',
			tabSelectedClassName: 'iOSTabLButtonSelected',
			tabDisabledClassName: 'iOSTabLButtonDisabled',
			paneClassName: 'iOSTabLPane'
		}
	},
	tabBand: {
		base: {
			location: 'top',
			className: 'iOSTabbandT',
			separator:{
				className: 'iOSTabbandTSeparator',
				show: false
			},
			tab: {
				className: 'iOSTabbandTButton',
				selectedClassName: 'iOSTabbandTButtonSelected',
				disabledClassName: 'iOSTabbandTButtonDisabled',
				closeClassName: 'iOSTabbandTButtonClose',
				closeIcon: 'css/iOS/TabbandClose.PNG',
				closeIconHover: 'css/iOS/TabbandClose.PNG',
				closeIconStyle: 'position: absolute; top: -5px; right: -5px;'
			},
			scrollButtons: {
				overlay: true,
				fullHeight: true,
				prevClassName: 'iOSTabbandTLScroll',
				prevDisabledClassName: 'iOSTabbandTLScrollDisabled',
				prevImage: 'css/iOS/TabbandPrev.PNG',
				prevDisabledImage: 'css/iOS/null.PNG',
				nextClassName: 'iOSTabbandTRScroll',
				nextDisabledClassName: 'iOSTabbandTRScrollDisabled',
				nextImage: 'css/iOS/TabbandNext.PNG',
				nextDisabledImage: 'css/iOS/null.PNG'
			}
		},
		bottom: {
			location: 'bottom',
			className: 'iOSTabbandB',
			separator:{
				className: 'iOSTabbandBSeparator',
				show: false
			},
			tab: {
				className: 'iOSTabbandBButton',
				selectedClassName: 'iOSTabbandBButtonSelected',
				disabledClassName: 'iOSTabbandBButtonDisabled',
				closeClassName: 'iOSTabbandBButtonClose',
				closeIcon: 'css/iOS/TabbandClose.PNG',
				closeIconHover: 'css/iOS/TabbandClose.PNG',
				closeIconStyle: 'position: absolute; top: 2px; right: 2px;'
			},
			scrollButtons: {
				overlay: true,
				fullHeight: true,
				prevClassName: 'iOSTabbandBLScroll',
				prevDisabledClassName: 'iOSTabbandBLScrollDisabled',
				prevImage: 'css/iOS/TabbandPrev.PNG',
				prevDisabledImage: 'css/iOS/null.PNG',
				nextClassName: 'iOSTabbandBRScroll',
				nextDisabledClassName: 'iOSTabbandBRScrollDisabled',
				nextImage: 'css/iOS/TabbandNext.PNG',
				nextDisabledImage: 'css/iOS/null.PNG'
			}
		}
	},
	slider: {
		base: {
			className: 'iOSSlider',
			innerClassName: 'iOSSliderInner',
			handle: {
				className: 'iOSSliderHandle',
				selectedClassName: 'iOSSliderHandleSelected',
				hoverClassName: '',
				minClassName: '',
				maxClassName: ''
			},
			range: {
				className: 'iOSSliderRange',
				selectedClassName: 'iOSSliderRangeSelected',
				hoverClassName: ''
			}
		}
	},
	'switch': {
		base: {
			className: 'iOSSwitch',
			onClassName: 'iOSSwitchOn',
			offClassName: 'iOSSwitchOff',
			innerClassName: 'iOSSwitchInner',
			rightClassName: 'iOSSwitchRight',
			leftClassName: 'iOSSwitchLeft',
			buttonClassName: 'iOSSwitchButton'
		}
	},
	scroller: {
		base: {
			className: 'iOSScrollerR',
			focusClassName: 'iOSScrollerRFocus',
			dialClassName: 'iOSScrollerRDialExpanded',
			dial: {className: 'iOSScrollerRDial'},
			slider: {
				className: 'iOSScrollerRSlider',
				handle: {
					className: 'iOSScrollerRSliderHandle'
				},
				shadow: {
					className: 'iOSScrollerRSliderShadow'
				},
				message: {
					className: 'iOSScrollerRSliderMsg',
					bottomClassName: 'iOSScrollerRSliderMsgB',
					topClassName: 'iOSScrollerRSliderMsgT',
					rightClassName: '',
					leftClassName: ''
				}
			}
		}
	},
	scroll: {
		base: {
			indicator: {
				h: {className: 'iOSScrollIndH', barClassName: 'iOSScrollIndHBar'},
				v: {className: 'iOSScrollIndV', barClassName: 'iOSScrollIndVBar'}
			}
		}
	}
});
