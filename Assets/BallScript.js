#pragma strict

function Update () {
	Debug.Log("z:"+transform.position.z);
	transform.position.z -= 0.2;
	if(transform.position.z < 0 ){
		Application.LoadLevel("GameOver");
	}
}
function OnCollisionEnter (){
	Destroy(gameObject);
}