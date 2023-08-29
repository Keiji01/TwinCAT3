var TcHmi;!function(TcHmi){!function(Controls){!function(Beckhoff){class TcHmiImage extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__runtimeWidthNeededForHeight=!1,this.__runtimeHeightNeededForWidth=!1,this.__onResizedEventDestroyEvent=null,this.__loadHandler=e=>{this.getIsEnabled()&&("Content"===this.getHeightMode()&&this.__processHeight(),"Content"===this.getWidthMode()&&this.__processWidth(),TcHmi.EventProvider.raise(this.__id+".onLoad",e),TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"OriginalWidth"}),TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"OriginalHeight"}))},this.__errorHandler=e=>{this.getIsEnabled()&&("Content"===this.getHeightMode()&&this.__processHeight(),"Content"===this.getWidthMode()&&this.__processWidth(),TcHmi.EventProvider.raise(this.__id+".onError",e),TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"OriginalWidth"}),TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"OriginalHeight"}))}}__previnit(){if(this.__elementImage=this.__element[0].querySelector(".TcHmi_Controls_Beckhoff_TcHmiImage-template-content"),this.__elementImage||(this.__elementImage=this.__element[0].querySelector(".tchmi-image-template-content")),null===this.__elementImage)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init();const passiveEventOptions={passive:!0,capture:!1};this.__elementImage.addEventListener("load",this.__loadHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),this.__elementImage.addEventListener("error",this.__errorHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions)}__attach(){super.__attach()}__detach(){super.__detach(),null!==this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent(),this.__onResizedEventDestroyEvent=null)}destroy(){if(this.__keepAlive)return;const passiveEventOptions={passive:!0,capture:!1};this.__elementImage.removeEventListener("load",this.__loadHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),this.__elementImage.removeEventListener("error",this.__errorHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&passiveEventOptions),super.destroy()}__onResized(){return(evt,ctrl)=>{this.__asyncWorkData["System.TcHmiImage.resized"]=!0,this.__requestAsyncWork()}}__doAsyncWork(){super.__doAsyncWork(),this.__asyncWorkData["System.TcHmiImage.resized"]&&(this.__asyncWorkData["System.TcHmiImage.resized"]=!1,!0===this.__runtimeHeightNeededForWidth?this.__processWidth():!0===this.__runtimeWidthNeededForHeight&&this.__processHeight())}__processWidth(){if("Content"===this.getWidthMode()){let newWidthStr="";const contentPixelSize=this.__getContentWidth();null!==contentPixelSize&&(newWidthStr=contentPixelSize.toFixed(3)+"px"),TcHmi.StyleProvider.setSimpleElementStyle(this.__element,"width",newWidthStr)}super.__processWidth(),"Content"===this.getHeightMode()&&"Content"!==this.getWidthMode()&&this.__processHeight()}__processHeight(){if("Content"===this.getHeightMode()){this.__intHeight=null;const contentPixelSize=this.__getContentHeight();null!==contentPixelSize&&(this.__intHeight=contentPixelSize.toFixed(3)+"px")}super.__processHeight(),"Content"===this.getWidthMode()&&"Content"!==this.getHeightMode()&&this.__processWidth()}setWidthMode(valueNew){let convertedValue=TcHmi.ValueConverter.toSizeModeWithContent(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("WidthMode")),convertedValue!==this.__widthMode&&(this.__widthMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"WidthMode"}),this.__processWidthMode(),"Content"===convertedValue&&"Content"===this.getHeightMode()&&this.__processHeightMode())}setHeightMode(valueNew){let convertedValue=TcHmi.ValueConverter.toSizeModeWithContent(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("HeightMode")),convertedValue!==this.__heightMode&&(this.__heightMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"HeightMode"}),this.__processHeightMode(),"Content"===convertedValue&&"Content"===this.getWidthMode()&&this.__processWidthMode())}__getContentWidth(){this.__runtimeHeightNeededForWidth=!1;if("Content"!==this.getWidthMode())return super.__getContentWidth();if(!this.__src)return null;const imageElem=this.__elementImage;return 0===imageElem.naturalHeight||0===imageElem.naturalWidth?null:"Content"===this.getHeightMode()?imageElem.naturalWidth:null!==this.__height&&void 0!==this.__height&&"%"!==this.__heightUnit&&"Value"===this.getHeightMode()?this.__height*imageElem.naturalWidth/imageElem.naturalHeight:(this.__runtimeHeightNeededForWidth=!0,null===this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent=TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized())),!1===this.__isAttached?null:this.getRenderedHeight()*imageElem.naturalWidth/imageElem.naturalHeight)}__getContentHeight(){this.__runtimeWidthNeededForHeight=!1;if("Content"!==this.getHeightMode())return super.__getContentHeight();if(!this.__src)return null;const imageElem=this.__elementImage;return 0===imageElem.naturalHeight||0===imageElem.naturalWidth?null:"Content"===this.getWidthMode()?imageElem.naturalHeight:null!==this.__width&&void 0!==this.__width&&"%"!==this.__widthUnit&&"Value"===this.getWidthMode()?this.__width*imageElem.naturalHeight/imageElem.naturalWidth:(this.__runtimeWidthNeededForHeight=!0,null===this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent=TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized())),!1===this.__isAttached?null:this.getRenderedWidth()*imageElem.naturalHeight/imageElem.naturalWidth)}getOriginalWidth(){return this.__elementImage.naturalWidth}getOriginalHeight(){return this.__elementImage.naturalHeight}__processAccessConfig(){super.__processAccessConfig(),this.__processSrc()}__processIsEnabled(){super.__processIsEnabled(),this.__processSrc()}setSrc(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Src")),convertedValue!==this.__src&&(this.__src=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Src"}),this.__processSrc())}getSrc(){return this.__src}__processSrc(){this.__src&&TcHmi.Access.checkAccess(this,"observe")&&this.getIsEnabled()?this.__elementImage.getAttribute("src")!==this.__src&&(this.__elementImage.src=tchmi_path(this.__src)):""!==this.__elementImage.getAttribute("src")&&(this.__elementImage.src="")}setAlt(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Alt")),convertedValue!==this.__alt&&(this.__alt=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Alt"}),this.__processAlt())}getAlt(){return this.__alt}__processAlt(){this.__alt?this.__elementImage.alt=this.__alt:this.__elementImage.alt=""}}Beckhoff.TcHmiImage=TcHmiImage}(Controls.Beckhoff||(Controls.Beckhoff={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiImage","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiImage);