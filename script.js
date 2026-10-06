const characters={
  luffy:{name:'มังกี้ ดี. ลูฟี่',role:'01 / กัปตัน',image:'images/luffy01.svg',text:'เด็กหนุ่มที่กินผลปีศาจและตั้งเป้าหมายว่าจะเป็นราชาโจรสลัด จุดเด่นของเขาคือความมั่นใจ ความจริงใจกับพวกพ้อง และการไม่ยอมแพ้ต่อสิ่งที่ตัวเองเชื่อ',quote:'“ฉันจะเป็นราชาโจรสลัดให้ได้!”'},
  zoro:{name:'โรโรโนอา โซโล',role:'02 / นักดาบ',image:'images/zoro01.svg',text:'นักล่าโจรสลัดฝีมือดีที่มีความฝันจะเป็นนักดาบที่เก่งที่สุด การพบกับลูฟี่ทำให้เส้นทางของเขาเริ่มเชื่อมกับการผจญภัยครั้งใหญ่',quote:'“ฉันมีเป้าหมายของฉัน… และฉันจะไม่แพ้มัน”'},
  nami:{name:'นามิ',role:'03 / นักเดินเรือ',image:'images/nami01.svg',text:'ตัวละครที่ปรากฏช่วงท้ายเล่มและทำให้เรื่องราวมีคำถามใหม่ ๆ เกี่ยวกับการเดินทางต่อจากนี้ เธอช่วยทำให้โลกของเรื่องดูใหญ่ขึ้นอีก',quote:'“เรื่องนี้ยังมีอะไรให้ค้นหาอีกเยอะเลย”'}
};
const mangaData={
  intro:{title:'ยินดีต้อนรับสู่ MANGA MODE!',text:'เว็บไซต์นี้ตั้งใจทำให้การแนะนำหนังสือไม่เหมือนการอ่านข้อมูลบนเว็บธรรมดา แต่ให้ความรู้สึกเหมือนกำลังเปิดหน้ามังงะไปทีละช่อง ลองกดตัวละครหรือช่องภาพต่าง ๆ ได้เลย',quote:'“พลิกหน้าต่อไป… แล้วออกผจญภัยกัน!”'},
  dream:{title:'ความฝันของลูฟี่',text:'สิ่งที่ทำให้ลูฟี่น่าสนใจตั้งแต่เล่มแรกคือ เขาไม่ได้เริ่มจากการเป็นคนที่เก่งที่สุด แต่เริ่มจากการมีความฝันที่ชัดเจนและเชื่อมั่นว่าตัวเองจะทำให้สำเร็จ',quote:'“ความฝันของฉันไม่ใช่เรื่องที่ใครจะมาห้ามได้!”'},
  zoro:{title:'แล้วนักดาบคนนี้คือใคร?',text:'การพบโซโลเป็นหนึ่งในช่วงสำคัญของเล่ม เพราะทำให้เห็นว่าการเดินทางของลูฟี่กำลังเปลี่ยนจาก “ความฝันของคนคนเดียว” ไปสู่การมีคนร่วมทาง',quote:'“คนที่มีความฝันของตัวเอง… ก็สามารถเดินไปด้วยกันได้”'},
  crew:{title:'การผจญภัยไม่ได้มีแค่คนเดียว',text:'เสน่ห์ของ ONE PIECE อยู่ตรงที่ตัวละครแต่ละคนมีความฝันและเหตุผลของตัวเอง การรวมกลุ่มจึงไม่ได้เป็นแค่การเพิ่มจำนวนคน แต่ทำให้เรื่องมีความสัมพันธ์และอารมณ์มากขึ้น',quote:'“เรื่องสนุกกำลังจะเริ่มจริง ๆ แล้ว!”'},
  vol2:{title:'ทีเซอร์ — เล่ม 02',text:'ถ้าเล่มแรกคือการเปิดประตูสู่โลกของลูฟี่ เล่มต่อไปก็คือการพาเราออกไปไกลกว่าเดิม พบผู้คนและเหตุการณ์ใหม่ ๆ และทำให้เราเริ่มเห็นภาพของการเดินทางที่ใหญ่ขึ้น',quote:'“เรือพร้อมแล้ว… ไปต่อกันเถอะ!”'}
};
function showModal(id,data){
  const modal=new bootstrap.Modal(document.getElementById(id));modal.show();return modal;
}
function openCharacter(key){const c=characters[key];document.getElementById('modalCharacterImage').src=c.image;document.getElementById('modalCharacterImage').alt=c.name;document.getElementById('modalCharacterRole').textContent=c.role;document.getElementById('modalCharacterName').textContent=c.name;document.getElementById('modalCharacterText').textContent=c.text;document.getElementById('modalCharacterQuote').textContent=c.quote;showModal('characterModal',c)}
function openMangaModal(key){const d=mangaData[key]||mangaData.intro;document.getElementById('mangaModalTitle').textContent=d.title;document.getElementById('mangaModalText').textContent=d.text;document.getElementById('mangaModalQuote').textContent=d.quote;showModal('mangaModal',d)}
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal-on-scroll').forEach(el=>observer.observe(el));

document.querySelectorAll('.character-card,.manga-panel,.manga-btn').forEach(el=>{el.addEventListener('click',()=>{el.animate([{transform:'scale(1)'},{transform:'scale(.97)'},{transform:'scale(1)'}],{duration:180})})});
