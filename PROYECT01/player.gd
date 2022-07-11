extends Area2D

export (int) var velocidad
var Movimiento = Vector2()
var limite
signal golpe
func _ready():
	hide()
	limite= get_viewport_rect().size
	
func _process(delta):
	Movimiento = Vector2()
	if Input.is_action_pressed("ui_left"):
		Movimiento.x -= 1
	if Input.is_action_pressed("ui_right"):
		Movimiento.x += 1
	if Input.is_action_pressed("ui_down"):
		Movimiento.y += 1
	if Input.is_action_pressed("ui_up") || Input.is_action_pressed("ui_accept"):
		Movimiento.y -= 1
	if Movimiento.length() >0:
		Movimiento=Movimiento.normalized()*velocidad
	position +=Movimiento * delta
	position.x = clamp(position.x,0,limite.x)
	position.y = clamp(position.y,0,limite.y)
	if Movimiento.x !=0:
		$AnimatedSprite.animation="correr"
		$AnimatedSprite.flip_h=Movimiento.x <0
	elif Movimiento.y <0:
		$AnimatedSprite.animation="activo"
	elif Movimiento.y >0:
		$AnimatedSprite.animation="quieto"
		


func _on_player_body_entered(body):
	hide()
	emit_signal("golpe")
	$CollisionShape2D.disabled=true
	
func inicio(posi):
	position=posi
	show()
	$CollisionShape2D.disabled=false
