document.addEventListener('DOMContentLoaded', function() {

  // ======= سوئیچ تب‌ها =======
  const tabButtons = document.querySelectorAll('.tab-buttons button');
  const tabs = document.querySelectorAll('.tab');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', function(){
      const target = this.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      document.getElementById(target).classList.add('active');

      tabButtons.forEach(b => b.classList.remove('active-btn'));
      this.classList.add('active-btn');
    });
  });

  // ======= قیمت پکیج سفارشی =======
  const customItems = document.querySelectorAll('.custom-item');
  const customTotal = document.querySelector('.custom-total');

  customItems.forEach((item, index) => {
    item.addEventListener('change', () => {
      if(index === 0 && item.checked) customItems[1].checked = false;
      if(index === 1 && item.checked) customItems[0].checked = false;

      let total = 0;
      customItems.forEach(i => { if(i.checked) total += Number(i.dataset.price); });
      customTotal.textContent = "قیمت کل: " + total.toLocaleString('en') + ".000.000";
    });
  });

  // ======= آکاردئون + توضیحات تجهیزات =======
  const accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if(content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

});