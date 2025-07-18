document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageForm');
    const resultDiv = document.getElementById('result');
    const currentTimeEl = document.getElementById('currentTime');
    const nama = "Mario Amriansyah";

    const el = document.getElementById("welcomeText");
    el.innerText = `Hi ${nama}, Welcome to Website`;

    function updateTime() {
        const now = new Date();
        currentTimeEl.textContent = now.toString();
    }

    updateTime();

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const pesan = document.getElementById('pesan').value;
        const gender = form.querySelector('input[name="gender"]:checked').value;

        updateTime();

        resultDiv.innerHTML = `
      <p><strong>Name</strong> : ${name}</p>
      <p><strong>Date of Birth</strong> : ${dob}</p>
      <p><strong>Gender</strong> : ${gender}</p>
      <p><strong>Message</strong> : ${pesan}</p>
    `;
    });
});
