// I needed stateless live tabs, so Istarted them. Hopefully more neat stuff to come. 
// - Stefan Penner
//
(function($){
  $.fn.liveTabs = function(options){ 
    var config = $.extend(true,{
      style:'plain',
      tabs: this,
      tabCollectionSelector: this.selector
    },options),
      tab = new Tab(config).init();

    return this;
  };

  var Tab = $.fn.liveTabs.Tab = function(options){
    $.extend(this,options);
  };

  Tab.UUID_index = 0;
  Tab.prototype = {
    style: 'plain',
    tabSelector: 'a',
    styles: {
      plain: function(e){
        var a = $(this),
        paneId = a.attr("data-pane");
     
        $(paneId).
          siblings().
            hide().
            end().
          show();
      },

      ajax: function(e){
        var a = $(this),
        href = a.attr('href'),
        paneSelector = a.attr("data-pane");

        $(paneSelector).load(href,function(){
          $(this).trigger('tabLoad');
        });
      }
    },

    afterLoad: function(){
      this.tabs.trigger('afterLoad'); 
    },

    init: function(){
      this.tabs.
        find(this.tabSelector).
          live('click',{liveTabs:this},function(e){

            // can cache this stuff if needed?
            var a      = $(this),
              liveTabs = e.data.liveTabs,
              tabs     = a.closest(liveTabs.tabCollectionSelector),
              historyName  = tabs.attr("data-model"),
              state = {};

              state[historyName] = a.attr("data-id");

              if($.bbq) $.bbq.pushState(state);

              tabs.find(liveTabs.tabSelector).removeClass("current");
              a.addClass("current");

            liveTabs.styles[liveTabs.style].apply(this,e);

            e.preventDefault();
          }).
            first().
            trigger('click');
      return this;
    }
  };
})($);
