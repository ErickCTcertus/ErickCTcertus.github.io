extends RigidBody2D

export (int) var vel_min
export (int) var vel_max
var tipoGost=["gost","peque"]
func _ready():
	$AnimatedSprite.animation=tipoGost[randi()% tipoGost.size()]
	
	if $AnimatedSprite.animation == "enemigo":
		$CollisionShape2D.scale.x=1.4
		$CollisionShape2D.scale.y=1.4

func _on_VisibilityEnabler2D_screen_exited():
	pass # Replace with function body.
