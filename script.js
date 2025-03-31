document.addEventListener("DOMContentLoaded", function () {
  const skillData = {
    courses: [
      "😺彈吉他",
      "😺做甜點",
      "😺做娃娃"
    ],
    skills: [
      { name: "I", level: 75 },
      { name: "S", level: 65 },
      { name: "T", level: 70 },
      { name: "P", level: 85 } // 新增的技能條
    ]
  };

  // 定義原始的圖片 URL
  let imageUrls = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHF4NWN6MGx4NW00c3huMzkxNHZlZndxbHdiYW1sa3NwbWkzcjEzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ndAvMC5LFPNMCzq7m/giphy.gif",
    "https://media.giphy.com/media/2Qs2hKWMvEzdu/giphy.gif?cid=82a1493b7h4alq58d1m0otrzihscasthebkus8as8sihtngd&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/oF5oUYTOhvFnO/giphy.gif?cid=82a1493b610wa8b7v0jg6uoeod0m8c1u46uwcknotro49aht&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
  ];

  // 取得 #courses 和 #skills
  const coursesSection = document.getElementById("courses");
  const skillsSection = document.getElementById("skills");

  // 生成「興趣」HTML
  coursesSection.innerHTML = `
      <h4>興趣</h4>
      <ul>
        ${skillData.courses.map((course) => `<li>${course}</li>`).join("")}
      </ul>
    `;

  // 生成「技能條」HTML
  skillsSection.innerHTML = `
      <h4>MBTI</h4>
      ${skillData.skills
        .map(
          (skill) => `
        <div class="skill-bar">
          <label>${skill.name}</label>
          <div class="bar">
            <div class="level" style="width: ${skill.level}%;"></div>
          </div>
        </div>
      `
        )
        .join("")}
    `;
  
  // 取得 .square-image
  const squareImages = document.querySelectorAll(".square-image");
  
  // 初始化圖片背景
  function initializeImages() {
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${imageUrls[index]}')`;
    });
  }
  
  // 初始化圖片
  initializeImages();
  
  // 隨機排列圖片背景
  function shuffleImages() {
    let shuffledUrls = [...imageUrls].sort(() => Math.random() - 0.5);
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${shuffledUrls[index]}')`;
    });
  }
  
  // 綁定點擊事件
  document.querySelector(".square-images").addEventListener("click", shuffleImages);

  // 監聽滑鼠移動事件來創建清晰區域
  document.addEventListener("mousemove", function(event) {
    const overlay = document.querySelector('.overlay');
    const x = event.clientX;
    const y = event.clientY;
    overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0) 50px, rgba(255, 255, 255, 0.7) 100px)`;
  });

  // 當滑鼠移出時，保持背景清晰
  document.addEventListener("mouseleave", function() {
    const overlay = document.querySelector('.overlay');
    overlay.style.background = 'rgba(255, 255, 255, 0.7)'; // 保持半透明背景
  });
});