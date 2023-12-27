function startDetection()
{
    navigator.mediaDevices.getUserMedia({ audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0bd8EZJDX/model.json',modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random * 255)+1;
        random_number_g = Math.floor(Math.random * 255)+1;
        random_number_b = Math.floor(Math.random * 255)+1;

        document.getElementById("result_label").innerHTML="I can hear -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Accurancy -" + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+ random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+ random_number_g + "," + random_number_b + ")";

        img = document.getElementById("animalImage");

  if (results[0].label == "cat") {
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24f5tImw6_60lIhFW2iIC_b4BVcd_9IaOx0m8Ps_9gBi39jhZ";
        }

        else {
            img.src = "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg";
    }
}}