/* Sustituye los caracteres dependientes de la fuente por iconos SVG reconocibles. */
(()=>{'use strict';
const paths={
check:'<path d="m20 6-11 11-5-5"/>',
location:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.7 19.7 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5l2.8.7A2 2 0 0 1 22 16.9Z"/>',
crm:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="m7 12 3 3 7-7"/>',
migrate:'<path d="M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4"/>',
pipeline:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 9v11m8-11v11"/>',
automate:'<path d="M4 7h8l3 5h5M4 17h8l3-5h5"/><circle cx="4" cy="7" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="17" r="2"/>',
integrate:'<rect x="2" y="4" width="8" height="7" rx="1"/><rect x="14" y="13" width="8" height="7" rx="1"/><path d="M10 7h4a4 4 0 0 1 4 4v2M14 17h-4a4 4 0 0 1-4-4v-2"/>',
training:'<path d="M12 3 2 8l10 5 10-5-10-5ZM5 10v6c4 4 10 4 14 0v-6M22 8v7"/>',
chart:'<path d="M3 3v18h18M7 16l4-5 3 2 6-7"/>',
whatsapp:'<path d="M16 3.5A12.4 12.4 0 0 0 5.3 22l-1.6 6.2 6.35-1.66A12.4 12.4 0 1 0 16 3.5Zm0 22.5a10.1 10.1 0 0 1-5.16-1.4l-.37-.22-3.77.99 1.01-3.66A10.1 10.1 0 1 1 16 26Zm5.54-7.55c-.3-.15-1.8-.89-2.08-.99-.28-.1-.49-.15-.69.15-.2.3-.8.99-.98 1.19-.18.2-.36.23-.67.08-.3-.15-1.29-.48-2.46-1.52-.91-.81-1.52-1.82-1.7-2.12-.18-.3-.02-.47.14-.62.14-.14.3-.36.46-.54.16-.18.2-.3.31-.51.1-.2.05-.39-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.51-.52-.69-.53h-.6c-.2 0-.54.08-.82.39-.28.3-1.08 1.06-1.08 2.59 0 1.52 1.11 2.99 1.26 3.2.15.2 2.18 3.34 5.29 4.69.74 1.32.51 1.77.65.74.24 1.41.2 1.95.12.6-.09 1.8-.73 2.05-1.45.25-.71.25-1.32.18-1.45-.08-.13-.29-.2-.59-.35Z"/>',
chat:'<path d="M12 2C6.48 2 2 5.94 2 10.8c0 2.33 1.04 4.44 2.73 6.01L4 22l5.03-2.41c.95.27 1.94.41 2.97.41 5.52 0 10-3.94 10-8.8S17.52 2 12 2Zm-5 7h10v1.7H7V9Zm0 3.5h7v1.7H7v-1.7Z"/>',
facebook:'<path d="M14.1 24v-9.1h3.1l.5-3.6h-3.6V9c0-1 .3-1.7 1.8-1.7H18V4.1c-.4-.1-1.7-.1-3-.1-3 0-5 1.8-5 5.2v2.1H7v3.6h3V24z"/>',
instagram:'<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="17.5" cy="6.5" r="1.3"/>',
youtube:'<path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8A27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"/>',
tiktok:'<path d="M16.5 2h-3.2v13.1a3.1 3.1 0 1 1-2.7-3.1V8.7a6.4 6.4 0 1 0 6 6.4V8.4a9 9 0 0 0 5.4 1.7V6.9A5.5 5.5 0 0 1 16.5 2Z"/>',
x:'<path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.5L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"/>',
snapchat:'<path d="M12 2c-3.6 0-5.4 2.5-5.4 5.5v3c-.7-.3-1.8-.8-2.4-.4-.8.5-.3 1.4.5 1.7.6.2 1.5.4 1.8 1.2-.6 2.1-2.4 3.9-4.5 4.4-.4.1-.5.6-.1.8 1 .6 2.1.7 3.3.9.3.5.4 1.2 1 1.3.8.2 1.5-.3 2.2-.3 1.1 0 2.2.9 3.6.9s2.5-.9 3.6-.9c.7 0 1.4.5 2.2.3.6-.1.7-.8 1-1.3 1.2-.2 2.3-.3 3.3-.9.4-.2.3-.7-.1-.8-2.1-.5-3.9-2.3-4.5-4.4.3-.8 1.2-1 1.8-1.2.8-.3 1.3-1.2.5-1.7-.6-.4-1.7.1-2.4.4v-3C17.4 4.5 15.6 2 12 2Z"/>'};
function icon(name){const social=['facebook','instagram','youtube','tiktok','x','snapchat','whatsapp','chat'].includes(name);return '<svg class="crm-icon" viewBox="0 0 '+(name==='whatsapp'?'32 32':'24 24')+'" aria-hidden="true" focusable="false"'+(social?' style="fill:currentColor;stroke:none"':'')+'>'+paths[name]+'</svg>'}
function prefix(el,name,old){if(!el)return;const node=[...el.childNodes].find(n=>n.nodeType===Node.TEXT_NODE&&n.textContent.trim());if(node&&old)node.textContent=node.textContent.replace(old,'').trimStart();el.insertAdjacentHTML('afterbegin',icon(name))}
document.querySelectorAll('.features span').forEach(el=>el.insertAdjacentHTML('afterbegin',icon('check')));
document.querySelectorAll('.info strong').forEach((el,i)=>prefix(el,i?'clock':'location',i?'◷':'⌖'));
[['.actions .whatsapp','whatsapp',null],['.actions .appointment','calendar','▣'],['.actions .telephone','phone','☎']].forEach(([s,n,t])=>prefix(document.querySelector(s),n,t));
const cards=['crm','migrate','pipeline','automate','integrate','training'];document.querySelectorAll('.cards .symbol').forEach((el,i)=>{el.innerHTML=icon(cards[i]||'crm')});
const why=['clock','integrate','check','chart'];document.querySelectorAll('.why-points strong').forEach((el,i)=>{const n=el.firstChild;if(n&&n.nodeType===Node.TEXT_NODE)n.textContent=n.textContent.replace(/^[◷⇄✓↗]\s*/,'');el.insertAdjacentHTML('afterbegin',icon(why[i]||'check'))});
document.querySelectorAll('.social-links a').forEach(el=>{const name=el.getAttribute('aria-label')?.toLowerCase();if(paths[name])el.innerHTML=icon(name)});
const chat=document.querySelector('.crm-chat-entry');if(chat)chat.innerHTML=icon('chat');
const wa=document.querySelector('.float-whatsapp');if(wa)wa.innerHTML=icon('whatsapp');
})();
