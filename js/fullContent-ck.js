(function(e,t,n){function r(n,r){this.element=n,this.$window=e(t),this.options=e.extend({},o,r),this._defaults=o,this._name=i,this.init(),this.configStage()}var i="fullContent",s=t.document,o={stages:"div",idComplement:"page_",stageStart:1,speedTransition:800,mapPosition:""};r.prototype.configStage=function(){var n=this.$window.width(),r=this.$window.height(),i=this.options.stages,s=this.options.mapPosition,o=0;e(this.element).children(i).each(function(t){e(this).css({position:"absolute",width:n,height:r});if(s[t]){var i=s[t];e(this).css({top:r*(i.v-1),left:n*(i.h-1)})}else e(this).css({top:r*o});o++});if(t.location.hash){var u=t.location.hash.replace(/^#\/?/,"");e.scrollTo("#"+this.options.idComplement+u,0)}},r.prototype.init=function(){var n=this,r=this.options.stages,i=this.options.idComplement;e(this.element).children(r).each(function(r){var s=e(this).attr("id");e(this).attr("id",i+s),!t.location.hash&&n.options.stageStart==r+1&&(e.scrollTo(e(this),0),t.location.hash=e(this).attr("id").replace(i,""))}),this.bind()},r.prototype.bind=function(){var n=this,r=this.options.speedTransition,i=this.options.idComplement;this.$window.resize(function(){n.configStage()}),this.$window.bind("hashchange",function(i){var s=t.location.hash.replace(/^#\/?/,"");e.scrollTo("#"+n.options.idComplement+s,r)})},e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new r(this,t))})}})(jQuery,window);