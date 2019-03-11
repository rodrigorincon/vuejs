Vue.component("task-list",{
	template: `
		<div>
			<task v-for="task in tasks">{{task.description}}</task>
		</div>
	`, // precisa por a div pois o for nao pode ser executado na tag raiz, precisa está encapsulado em outra tag (pode der div, p, ul, só nao pode ser na raiz)

	//O data do componente precisa ser uma function pra retornar um valor diferente pra cada tag 
	data() {
		return {
			tasks: [
				{description: "tarefa 1", complete: true},
				{description: "tarefa 2", complete: false},
				{description: "tarefa 3", complete: false},
				{description: "tarefa 4", complete: false}
			]
		}
	}

})

Vue.component("task",{
	template: "<li> <slot></slot> </li>"
})

Vue.component("message",{
	props: ["title", "body"],//informa quais os atributos ele conhece
	template: `
		<article class="message">
			<div class="message-header">
				{{title}}
				<button type="button" @click="hideModal">x</button>
			</div>
			<div class="message-body" v-show="is_visible">
				{{body}}
			</div>
		</article>
	`,
	data(){
		return {
			is_visible: true
		}
	},
	methods: {
		hideModal(){
			this.is_visible = !this.is_visible
		}
	}
})

new Vue({
	el: "#root"
})

new Vue({
	el: "#comp"
})