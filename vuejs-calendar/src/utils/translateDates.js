import moment from 'moment-timezone'

export function weekDayPT(date){
	var weekDayPT = ""
	switch( date.day() ){
		case 0:
			weekDayPT = "Domingo"
			break
		case 1:
			weekDayPT = "Segunda"
			break
		case 2:
			weekDayPT = "Terça"
			break
		case 3:
			weekDayPT = "Quarta"
			break
		case 4:
			weekDayPT = "Quinta"
			break
		case 5:
			weekDayPT = "Sexta"
			break
		case 6:
			weekDayPT = "Sábado"
			break
	}
	return weekDayPT
}

export function monthPT(date){
	var month = ""
	switch( date.month() ){
		case 0:
			month = "Janeiro"
			break
		case 1:
			month = "Fevereiro"
			break
		case 2:
			month = "Março"
			break
		case 3:
			month = "Abril"
			break
		case 4:
			month = "Maio"
			break
		case 5:
			month = "Junho"
			break
		case 6:
			month = "Julho"
			break
		case 7:
			month = "Agosto"
			break
		case 8:
			month = "Setembro"
			break
		case 9:
			month = "Outubro"
			break
		case 10:
			month = "Novembro"
			break
		case 11:
			month = "Dezembro"
			break
	}
	return month
}
