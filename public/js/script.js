function submitMood() {
    const moodText = document.getElementById("moodText").value;
    const intensity = document.getElementById("intensity").value;

    const data = {
        mood: moodText,
        intensity: intensity
    };

    fetch("http://localhost:3000/mood", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        alert("Mood submitted!");
        window.location.href = "insights.html";
    })
    .catch(err => console.error(err));
}
