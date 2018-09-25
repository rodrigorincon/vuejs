import Overview from './components/Overview.vue'
import Movie from './components/Movie.vue'
import PageNotFound from './components/PageNotFound.vue'

export default [
	{path: '/', name: 'home', component: Overview},
	{path: '/movie', name: 'movie', component: Movie},
	// default route, when none of the above matches (404 page)
    { path: "*", name: 'notfound', component: PageNotFound }
    // outra forma de fazer a rota pra 404 sem precisar criar um componente pra ela eh fazer ela redirecionar pra home caso digite qq coisa desconhecida
    //{ path: "*", redirect: {name: 'home'} }
]