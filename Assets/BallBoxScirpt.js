#pragma strict

var Ball : Transform;

function Update () {
	if (Time.frameCount % 60 == 0){
		Instantiate(Ball, Vector3(Random.Range(-5.0, 5.0),1, 12), Quaternion.identity);
	}
}