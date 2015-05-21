#pragma strict

function Update () {
	var x : float = Input.GetAxis("Horizontal");
	transform.Translate(x*0.3, 0, 0);
 }