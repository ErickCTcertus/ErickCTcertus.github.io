extends CanvasLayer


signal iniciar_juego

func mostrar_mensaje(texto):
	$Mensaje.text=texto
	$Mensaje.show()
	$MensajeTimer.start()
	
func gamer_over():
	mostrar_mensaje("Game Over")
	
	yield($MensajeTimer,"timeout");
	$Button.show()
	$Mensaje.text="Game Epick v.beta 0.1"
	$Mensaje.show()
	$PunteoLabe.text=str(0)
func refresh_punto(Puntos):
	$PunteoLabe.text=str(Puntos)
	if (Puntos==60):
		mostrar_mensaje("Has Ganado...!!!!")

func _on_MensajeTimer_timeout():
	$Mensaje.hide()


func _on_Button_pressed():
	$Button.hide()
	emit_signal("iniciar_juego")
