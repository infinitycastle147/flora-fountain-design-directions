const allowed=['reference','evolved','editorial'];
const chosen=new URLSearchParams(location.search).get('option') || localStorage.getItem('flora-design-option') || 'reference';
function choose(option){if(!allowed.includes(option))return;document.body.dataset.theme=option;localStorage.setItem('flora-design-option',option);document.querySelectorAll('.option-button').forEach(button=>{const selected=button.dataset.option===option;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});}
choose(chosen);
document.querySelectorAll('.option-button').forEach(button=>button.addEventListener('click',()=>{choose(button.dataset.option);const url=new URL(location);url.searchParams.set('option',button.dataset.option);history.replaceState({},'',url);}));
const toggle=document.getElementById('menuToggle');
function setMenuOpen(open){toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');document.getElementById('primaryNav').classList.toggle('open',open);}
toggle.addEventListener('click',()=>setMenuOpen(toggle.getAttribute('aria-expanded')!=='true'));
document.querySelectorAll('.primary-nav a').forEach(link=>link.addEventListener('click',()=>setMenuOpen(false)));
const form=document.getElementById('contactForm');
if(form)form.addEventListener('submit',event=>{event.preventDefault();const d=Object.fromEntries(new FormData(form));const subject=`Flora Fountain enquiry — ${d.service}`;const body=`Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nService: ${d.service}\n\n${d.message}`;location.href=`mailto:hello@florafountain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});
