
var app = new Vue({
	el: "#app",
	data: {
		LIMIT: 10,
		items: [],
		cart:[],
		search: "all",
		lastSearch: "",
		loading: false,
		paginateInfos: {
			init: 0,
			ending: 0,
			total: 0
		}
	},
	mounted: function(){
		this.searchObj()
	},
	methods:{
		addToChart: function(item_id){
			found = false
			this.cart.forEach(item=>{
				if(item.id === item_id){
					found = true
					item.quantity++
					this.cart.splice();
				}
			})
			if(!found){
				my_item = this.items.filter(obj=>obj.id==item_id)[0]
				my_item.quantity = 1
				this.cart.push( my_item )
			}
		},
		mountUrlSearch: function(initial_posix, final_posix, text_search){
			route = "/search/".concat(text_search)
			return route.concat("?init=").concat(initial_posix).concat("&ending=").concat(final_posix)
		},
		paginateSearch: function(initial_posix, text_search){			
			this.items = []
			this.loading = true
			axios.get( this.mountUrlSearch(initial_posix, initial_posix+this.LIMIT, text_search) ).then(response=>{
				this.paginateInfos.init = initial_posix
				this.paginateInfos.ending = initial_posix+response.data.data.length
				this.paginateInfos.total = response.data.total

				this.items = response.data.data
				this.lastSearch = text_search
				this.loading = false
			}).catch(error=>{
				console.log(error)
			})
		},
		searchObj: function(){
			if( this.search.length )
				this.paginateSearch(0, this.search)
		},
		increment: function(item){
			item.quantity++
			this.cart.splice();
		},
		decrement: function(item){
			item.quantity--
			this.cart.splice();
			if(item.quantity <= 0){
				for(var i=0; i<this.cart.length; i++){
					if(this.cart[i].id === item.id){
						this.cart.splice(i,1)
						break
					}
				}
			}
		}
	},
	computed:{
		total(){
			return this.cart.reduce((sum,item)=>{return sum+=item.price*item.quantity},0)
		},
		numberPagesArray(){
			total_pages = Math.ceil(this.paginateInfos.total/this.LIMIT)
			return [...Array(total_pages).keys()];
		}
	},
	filters: {
		formatPrice: function(price){
			return "R$".concat( price.toFixed(2).replace(".",",") )
		}
	}
})