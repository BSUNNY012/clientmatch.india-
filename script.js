const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNnxvgGwqKF8XTg1YDPh_J1FDaYUbGm_LCueUeHK_O4TIJGWgjJ49xdYicDljx08FKTu1I11MUmu0p/pub?output=csv';

fetch(sheetURL)
  .then(res => res.text())
  .then(data => {
    const rows = data.split('\n').slice(1);
    const container = document.getElementById('cardContainer');

    rows.forEach(row => {
      const [name, role, description, skills, experience, fees, upload showcase/cv , instagram] = row.split(',');

      if (!name || !role) return;

      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h2>${name.trim()}</h2>
        <h4>${role.trim()}</h4>

        <a href="${contact.trim()}" target="_blank">
          <button>Contact</button>
        </a>

        <a href="${instagram.trim()}" target="_blank">
          <button>Instagram</button>
        </a>

        <button onclick="window.location.href='profile.html?name=${encodeURIComponent(name.trim())}'">
          View Full Profile
        </button>
      `;

      container.appendChild(card);
    });
  });

// Search Function
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? 'block' : 'none';
  });
});


