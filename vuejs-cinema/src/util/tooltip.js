import {addClass, removeClass} from './helpers';

var insertEventTooltip = function(event){
  var span = event.target.parentNode.getElementsByTagName('SPAN')[0]
  addClass(span, 'tooltip-show')
}
var removeEventTooltip = function(event){
  var span = event.target.parentNode.getElementsByTagName('SPAN')[0]
  removeClass(span, 'tooltip-show')
}

export default{
	install(Vue){
		Vue.directive('tooltip',{
		  bind(el, bindings){
		    //create the html of the tooltip
		    var span = document.createElement('SPAN')
		    var text = document.createTextNode('Assentos disponíveis: '+bindings.value.seats)
		    span.appendChild(text)
		    addClass(span, 'tooltip')
		    el.appendChild(span)
		    //do the mouse events
		    var div = el.getElementsByTagName('DIV')[0]
		    div.addEventListener('mouseover', insertEventTooltip)
		    div.addEventListener('mouseout',  removeEventTooltip)
		    div.addEventListener('touchstart', insertEventTooltip)
		    div.addEventListener('touchend',  removeEventTooltip)
		  },
		  unbind(el){
		    //unbind eh necessario pra quando usa algum filtro, limpar a memoria dos eventos, pois a div eh destruida, mas os eventos nao
		    var div = el.getElementsByTagName('DIV')[0]
		    div.addEventListener('mouseover', insertEventTooltip)
		    div.addEventListener('mouseout',  removeEventTooltip)
		    div.removeEventListener('touchstart', insertEventTooltip)
		    div.removeEventListener('touchend',  removeEventTooltip)
		    el.getElementsByTagName('SPAN')[0].remove()
		  }
		})
	}
}