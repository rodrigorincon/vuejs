Vue.component("tabs",{
	template: `
		<div>
			<div class="tabs">
				<ul>
					<li v-for="tab in tabs" :class="{ 'is-active': tab.is_active}">
						<a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
					</li>
				</ul>
			</div>
			<div class="tab-details">
				<slot></slot>
			</div>
		</div>
	`,
	data(){
		return {
			tabs: []
		}
	},
	created(){ //alimenta as variaveis do data com os campos preenchidos no html, assim deixa o html no local certo e alimenta as vars do objeto certinho
		this.tabs = this.$children
	},
	methods:{
		selectTab(selected_tab){
			this.tabs.forEach(tab => {
				//tab.selected = tab.name == selected_tab.name NAO PODE ALTERAR O VALOR DE UM ATRIBUTE (PROPS) DIRETAMENTE, O VUE NAO DEIXA. AO INVES DISSO, CRIE UMA VAR Q RECEBE O PROP (AI TEM Q CRIAR UM DATA PRA ELA) E ALTERE ELA
				tab.is_active = tab.name == selected_tab.name
			})
		}
	}
})

Vue.component("tab",{
	template: `
		<div v-show="is_active" role="tab"><slot></slot></div>
	`,
	props: {
		name: {required: true},
		selected: {default: false}
	},
	data(){
		return {
			is_active: this.selected
		}
	},
	computed: {
		href(){
			return "#" + this.name.toLowerCase().replace(/ /g, '-')
		}
	}
})


new Vue({
	el: "#root",

})

