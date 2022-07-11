extends Node
export (PackedScene) var Gost
var Punteo
func _ready():
	randomize()


func nuevo_juego():
	Punteo=0
	$player.inicio($PosicionDeinicio.position)
	$InicioTimer.start()
	$Interfaz.mostrar_mensaje("Preparate....!!")
	$Interfaz.refresh_punto(Punteo)


func game_over():
	$PunteoTimer.stop()
	$GostTimer.stop()
	$Interfaz.gamer_over()


func _on_InicioTimer_timeout():
	$GostTimer.start()
	$PunteoTimer.start()


func _on_PunteoTimer_timeout():
	Punteo +=1
	$Interfaz.refresh_punto(Punteo)

func _on_GostTimer_timeout():
	$camino/GostPosicion.set_offset(randi())
	var G=Gost.instance()
	add_child(G)
	var dire=$camino/GostPosicion.rotation + PI/2
	G.position=$camino/GostPosicion.position
	
	dire +=rand_range(-PI/4,PI/4)
	G.rotation = dire
	G.set_linear_velocity(Vector2(rand_range(G.vel_min,G.vel_max),0).rotated(dire))
