Vue.component("modal",{
	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-content">
				<p>
					sdiogerniobneraobineiobenrioghberiogberigbreigberiubgjgbrebgerigb
				</p>
			</div>
			<button class="modal-close" @click="$emit('close')">close</button>
		</div>
	` //$emit(STRING) lanca um evento do tipo que eu quiser
})

Vue.component("cupon",{
	template: `<input type="text" placeholder="entre qualquer coisa" @blur="inputFocusOut" v-model="input_text" />`,
	methods: {
		inputFocusOut(){
			if(this.input_text.length>0)
				this.$emit('preenchido')
		}
	},
	data(){
		return {
			input_text: ''
		}
	}
})

window.Event = new Vue()

Vue.component("cupon2",{
	template: `<input type="text" placeholder="entre qualquer coisa" @blur="inputFocusOut" v-model="input_text" />`,
	methods: {
		inputFocusOut(){
			if(this.input_text.length>0)
				Event.$emit('evento2')
		}
	},
	data(){
		return {
			input_text: ''
		}
	}
})


new Vue({
	el: "#root",
	data: {
		show_modal: false, //var global usada no html
		cuponApplied: false
	},
	created(){
		//dá um listen no evento, se qualquer um lancar ele essa classe pega
		Event.$on("evento2", () => alert("alguem (qualquer um) lancou um evento do tipo evento2"))
	},
	methods: {
		onCuponApplied(){
			alert("cupom aplicado")
			this.cuponApplied = true
		}
	}
})

