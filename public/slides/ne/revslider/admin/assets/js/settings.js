var RevSliderSettings=new function(){var a={},c=this;this.getSettingsObject=function(a){for(var d,e,f,g,b=new Object,c=document.getElementById(a),h=c.elements.length,i=0;i<h;i++){var j=c.elements[i];if("##NAME##[]"!=j.name&&!jQuery(j).hasClass("rs-ingore-save")){switch(d=j.name,e=j.value,f=j.type,jQuery(j).hasClass("wp-editor-area")&&(f="editor"),g=!0,f){case"checkbox":if(void 0!==c.elements[i].getAttribute("data-useval")&&null!==c.elements[i].getAttribute("data-useval")){if(!c.elements[i].checked)continue;e=c.elements[i].value}else e=void 0!==c.elements[i].getAttribute("data-unchecked")&&null!==c.elements[i].getAttribute("data-unchecked")?c.elements[i].checked?e:c.elements[i].getAttribute("data-unchecked"):c.elements[i].checked;break;case"radio":0==c.elements[i].checked&&(g=!1);break;case"editor":"undefined"!=typeof tiynMCE&&null!=tinyMCE.get(d)&&(e=tinyMCE.get(d).getContent());break;case"select-multiple":e=jQuery(j).val(),e&&(e=e.toString())}1==g&&void 0!=d&&(d.indexOf("[]")>-1?(d=d.replace("[]",""),"object"!=typeof b[d]&&(b[d]=[]),b[d][Object.keys(b[d]).length]=e):b[d]=e)}}return b};var d=function(){if("undefined"!=typeof g_settingsObj)for(key in g_settingsObj){var b=g_settingsObj[key];for(controlKey in b.controls)a[controlKey]=b.controls[controlKey]}},e=function(a){jQuery("#"+a+" .unite-postbox .inside").slideUp("fast"),jQuery("#"+a+" .unite-postbox h3").addClass("box_closed")};c.initAccordion=function(a){var b="box_closed";jQuery("#"+a+" .unite-postbox h3").click(function(){var c=jQuery(this);c.hasClass(b)?(e(a),c.removeClass(b).siblings(".inside").slideDown("fast")):c.addClass(b).siblings(".inside").slideUp("fast")})};var f=function(){jQuery(".button-image-select").click(function(){var a=this.id.replace("_button","");UniteAdminRev.openAddImageDialog("Choose Image",function(b,c){jQuery("#"+a).val(b);var d=UniteAdminRev.getUrlShowImage(c,100,70,!0);if(jQuery("#"+a+"_button_preview").html("<div style=\"width:100px;height:70px;background:url('"+d+"'); background-position:center center; background-size:cover;\"></div>"),jQuery(".show_on_thumbnail_exist").show(),"checked"==jQuery("#thumb_for_admin").attr("checked")){var e=jQuery("#slide_thumb_button_preview div").css("background-image");jQuery("#slide_selector .list_slide_links li.selected .slide-media-container").css({"background-image":e,backgroundSize:"cover",backgroundPosition:"center center"})}})}),jQuery(".button-image-remove").click(function(){var a=this.id.replace("_button_remove","");jQuery("#"+a).val(""),jQuery("#"+a+"_button_preview").html(""),jQuery(".show_on_thumbnail_exist").hide()}),jQuery(".button-image-select-video").click(function(){UniteAdminRev.openAddImageDialog("Choose Image",function(a,b){jQuery("#input_video_preview").val(a);var c=UniteAdminRev.getUrlShowImage(b,200,150,!0);jQuery("#video-thumbnail-preview").css({backgroundImage:"url("+c+")"})})}),jQuery(".button-image-remove-video").click(function(){jQuery("#input_video_preview").val(""),"none"!=jQuery("#video_block_vimeo").css("display")&&jQuery("#button_vimeo_search").trigger("click"),"none"!=jQuery("#video_block_youtube").css("display")&&jQuery("#button_youtube_search").trigger("click")}),jQuery(".button-image-select-html5-video").click(function(){UniteAdminRev.openAddImageDialog("Choose Image",function(a,b){jQuery("#html5_url_poster").val(a)})})},g=function(){jQuery(".list_settings li .setting_text").tipsy({gravity:"e",delayIn:70}),jQuery(".tipsy_enabled_top").tipsy({gravity:"s",delayIn:70}),jQuery(".tipsy_enabled_top_left").tipsy({gravity:"se",delayIn:70}),jQuery(".button-primary").tipsy({gravity:"s",delayIn:70}),jQuery('input[type="checkbox"]').change(function(){RevSliderSettings.onoffStatus(jQuery(this))}),d(),f(),jQuery("body").on("click",".rs-close-preview",function(){var a=jQuery("#rs-preview-form");a.action=g_urlAjaxActions,jQuery("#preview-slide-data").val("empty_output"),jQuery("#preview_sliderid").val("empty_output"),jQuery("#rs-preview-wrapper").hide(),a.submit()}),jQuery(document).keyup(function(a){27==a.keyCode&&jQuery(".rs-close-preview").click()}),jQuery(window).resize(function(){jQuery(".rs-preview-width").text(jQuery(".rs-frame-preview-wrapper").width()),jQuery(".rs-preview-height").text(jQuery(".rs-frame-preview-wrapper").height())})};c.createModernOnOff=function(){jQuery(".tp-moderncheckbox").each(function(){var a=jQuery(this);a.wrap('<div class="tp-onoffbutton"><span class="tp-onoff-onstate">On</span><span class="tp-onoff-offstate">Off</span></div>'),a.change(function(){var a=jQuery(this);a.hasClass("changedbyclick")||c.onoffStatus(a)})}),jQuery(".tp-modernonoffboxes").each(function(){var a=jQuery(this);a.wrap('<div class="tp-onoffbutton tp-onoffbasedontwo"><span class="tp-onoff-onstate">On</span><span class="tp-onoff-offstate">Off</span></div>');var b=a.find('input[value="on"]'),d=a.find('input[value="off"]');b.change(function(){b.hasClass("changedbyclick")||c.onoffStatusBasedOnTwo(b,d)}),d.change(function(){b.hasClass("changedbyclick")||c.onoffStatusBasedOnTwo(b,d)}),c.onoffStatusBasedOnTwo(b,d)}),jQuery(".tp-onoffbutton").each(function(){jQuery(this).click(function(){var a=jQuery(this);if(a.hasClass("tp-onoffbasedontwo")){var b=a.find('input[value="on"]'),d=a.find('input[value="off"]');b.addClass("changedbyclick"),setTimeout(function(){b.removeClass("changedbyclick")},200),void 0===b.attr("checked")||0==b.attr("checked")||""==b.attr("checked")?(b.attr("checked","checked"),d.attr("checked",!1)):(b.attr("checked",!1),d.attr("checked","checked")),b.trigger("change"),d.trigger("change"),c.onoffStatusBasedOnTwo(b,d)}else inp=a.find("input"),inp.addClass("changedbyclick"),setTimeout(function(){inp.removeClass("changedbyclick")},200),void 0===inp.attr("checked")||0==inp.attr("checked")||""==inp.attr("checked")?inp.attr("checked","checked"):inp.attr("checked",!1),inp.trigger("change"),c.onoffStatus(inp)})})},c.onoffStatus=function(a){var b=a.closest(".tp-onoffbutton"),c=b.find(".tp-onoff-onstate"),d=b.find(".tp-onoff-offstate");void 0===a.attr("checked")||0==a.attr("checked")||""==a.attr("checked")?(punchgs.TweenLite.to(c,.2,{left:"50px"}),punchgs.TweenLite.to(d,.2,{left:"0px"})):(punchgs.TweenLite.to(c,.2,{left:"0px"}),punchgs.TweenLite.to(d,.2,{left:"-50px"}))},c.onoffStatusBasedOnTwo=function(a,b){var c=a.closest(".tp-onoffbutton"),d=c.find(".tp-onoff-onstate"),e=c.find(".tp-onoff-offstate");void 0===a.attr("checked")||0==a.attr("checked")||""==a.attr("checked")?(punchgs.TweenLite.to(d,.2,{left:"50px"}),punchgs.TweenLite.to(e,.2,{left:"0px"})):(punchgs.TweenLite.to(d,.2,{left:"0px"}),punchgs.TweenLite.to(e,.2,{left:"-50px"}))},jQuery(document).ready(function(){g()})};