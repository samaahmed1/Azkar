document.getElementById("menu-toggle").onclick = () => {
  document.getElementById("nav-toggle").classList.toggle("open");
};

document.getElementById("toggle").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle").src = "assets/icons/moon.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle").src = "assets/icons/moon-dark.webp";
  }
};

fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let morning = "";
    for (let i = 0; i < data["أذكار الصباح"].length; i++) {
      morning += `
      <li><span>${data["أذكار الصباح"][i].content}</span> <span class= "count">${data["أذكار الصباح"][i].count}</span></li>
      `;
    }
    document.getElementById("morning-list").innerHTML = morning;
    let evening = "";
    for (let i = 0; i < data["أذكار المساء"].length; i++) {
      evening += `
      <li><span>${data["أذكار المساء"][i].content}</span> <span class= "count">${data["أذكار المساء"][i].count}</span></li>
      `;
    }
    document.getElementById("evening-list").innerHTML = evening;
    let afterPrayer = "";
    for (let i = 0; i < data["أذكار بعد السلام من الصلاة المفروضة"].length; i++) {
      afterPrayer += `
  <li><span>${data["أذكار بعد السلام من الصلاة المفروضة"][i].content}</span><span class="count">${data["أذكار بعد السلام من الصلاة المفروضة"][i].count}</span></li>
        `;
    }
    document.getElementById("after-prayer-remembrances").innerHTML = afterPrayer;

    let rosaries = "";
    for (let i = 0; i < data["تسابيح"].length; i++) {
      rosaries += `
          <li><><span>${data["تسابيح"][i].content}</span> <span class="count">${data["تسابيح"][i].count}</span></li>
        `;
    }
    document.getElementById("rosaries-list").innerHTML = rosaries;

    let sleeping = "";
    for (let i = 0; i < data["أذكار النوم"].length; i++) {
      sleeping += `
            <li><span>${data["أذكار النوم"][i].content}</span><span class="count">${data["أذكار النوم"][i].count}</span></li>
        `;
    }
    document.getElementById("sleeping-list").innerHTML = sleeping;

    let wakeUp = "";
    for (let i = 0; i < data["أذكار الاستيقاظ"].length; i++) {
      wakeUp += `
            <li><><span>${data["أذكار الاستيقاظ"][i].content}</span><span class="count">${data["أذكار الاستيقاظ"][i].count}</span></li>
        `;
    }
    document.getElementById("wake-up-list").innerHTML = wakeUp;

    let quranSupplications = "";
    for (let i = 0; i < data["أدعية قرآنية"].length; i++) {
      quranSupplications += `
            <li><span>${data["أدعية قرآنية"][i].content}</span><span class="count">${data["أدعية قرآنية"][i].count}</span></li>
        `;
    }
    document.getElementById("quranic-list").innerHTML = quranSupplications;

    let prophetsSupplications = "";
    for (let i = 0; i < data["أدعية الأنبياء"].length; i++) {
      prophetsSupplications += `
            <li><span>${data["أدعية الأنبياء"][i].content}</span><span class="count">${data["أدعية الأنبياء"][i].count}</span></li>
        `;
    }
    document.getElementById("supplications-list").innerHTML = prophetsSupplications;
  });
