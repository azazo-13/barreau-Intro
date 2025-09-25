  // Navigation simple
  const links = document.querySelectorAll('nav a');
  const views = document.querySelectorAll('.view');
  function navigateTo(id){
    document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
    const link = document.querySelector('nav a[data-target="'+id+'"]');
    if(link) link.classList.add('active');
    views.forEach(v=>v.style.display = v.id === id ? '' : 'none');
    window.location.hash = id;
  }
  links.forEach(a=>a.addEventListener('click', e=>{e.preventDefault();navigateTo(a.dataset.target)}));
  const start = window.location.hash.replace('#','') || 'home';
  navigateTo(start);

  // Tabs
  document.querySelectorAll('.tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('#tab-general,#tab-proc,#tab-sanctions').forEach(el=>el.style.display='none');
      document.getElementById('tab-'+tab.dataset.tab).style.display = '';
    });
  });

  function copyDiscord(){
    navigator.clipboard.writeText('https://discord.gg/TON_INVIT')
      .then(()=>alert('Lien Discord copié !'));
  }

  // Webhook URLs
  const webhookApply = 'https://discord.com/api/webhooks/1420733240616030238/JmXE-RB7jIjSI6SgRRehhwDSuQUcWXBVhLuCvXtX0TwxCwXmhtI6_qC8z_FVhtkQFhdh';
  const webhookContact = 'https://discord.com/api/webhooks/1420733232294527067/Gk6jY6jajutYzjC6UIufKTTteNfUgXzbdDdltaTmkDQgTD1MJbgITFJbHrsA0g8DeOFI';

  async function handleApply(e){
    e.preventDefault();
    const data = new FormData(e.target);

    const embed = {
      embeds: [{
        title: "Nouvelle candidature", // title : titre de l’embed.
        color: 3447003, // Bleu | color : couleur de la bordure de l’embed (valeur décimale).
        fields: [
          { name: "Nom", value: data.get('name'), inline: true },
          { name: "Rôle souhaité", value: data.get('role'), inline: true },
          { name: "Motivation", value: data.get('motivation') }
        ],
        timestamp: new Date() // timestamp : ajoute la date/heure automatiquement.
      }]
    };

    await fetch(webhookApply, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(embed)
    })
    .then(()=>alert('Candidature envoyée avec succès !'))
    .catch(()=>alert('Erreur lors de l\'envoi de la candidature.'));

    e.target.reset();
  }

  async function handleContact(e){
    e.preventDefault();
    const data = new FormData(e.target);

    const embed = {
      embeds: [{
        title: "Nouveau message de contact", // title : titre de l’embed.
        color: 15158332, // Rouge clair | color : couleur de la bordure de l’embed (valeur décimale).
        fields: [
          { name: "Nom / Pseudo", value: data.get('pseudo'), inline: true },
          { name: "Message", value: data.get('message') }
        ],
        timestamp: new Date() // timestamp : ajoute la date/heure automatiquement.
      }]
    };

    await fetch(webhookContact, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(embed)
    })
    .then(()=>alert('Message envoyé avec succès !'))
    .catch(()=>alert('Erreur lors de l\'envoi du message.'));

    e.target.reset();
  }

  // Profile modal
  function openProfile(name){
    document.getElementById('profile-modal').style.display='block';
    document.getElementById('profile-name').textContent=name;
  }
  function closeProfile(){
    document.getElementById('profile-modal').style.display='none';
  }
