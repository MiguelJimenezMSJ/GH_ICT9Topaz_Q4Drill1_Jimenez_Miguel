function electricity_usage(){
    let KWH = document.getElementById("KWH").value;
    let result = "";

    switch (true){
        case (KWH >= 0 && KWH <= 100):
            result = "Lifeline Consumer - Discounted electricity rates";
            break;

        case (KWH >= 101 && KWH <= 200):
            result = "Low Consumption - Normal residential rate";
            break;

        case (KWH >= 201 && KWH <= 300):
            result = "Average Consumption - Typical electricity usage";
            break;

        case (KWH >= 301 && KWH <= 500):
            result = "High Consumption - Higher electricity usage";
            break;

        case (KWH > 500):
            result = "Very High Consumption - Heavy electricity users";
            break;

        default:
            result = "Error please add a valid number";
    }

    document.getElementById("error").innerHTML = result;

    alert(result);
}

    