// Navigation dans l’iframe
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
    link.classList.add('active');
  });
});

// Gestion formulaire candidature et contact
async function sendForm(url, data, successMsg, errorMsg){
  try {
    await fetch(url,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    alert(successMsg);
  } catch {
    alert(errorMsg);
  }
}

// Modal profil (pour membres)
function openProfile(name){
  const modal = document.getElementById('profile-modal');
  if(modal){
    modal.style.display='block';
    modal.querySelector('#profile-name').textContent=name;
  }
}
function closeProfile(){
  const modal = document.getElementById('profile-modal');
  if(modal) modal.style.display='none';
}
