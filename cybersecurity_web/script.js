function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// SCENARIO
function scenario(btn, correct) {
  let result = document.getElementById("scenarioResult");
  if(correct){
    result.innerHTML = "✅ ถูกต้อง!";
  } else {
    result.innerHTML = "❌ ไม่ปลอดภัย!";
  }
}

// QUIZ DATA (20 QUESTIONS)
const quizData = [
  ["Phishing คืออะไร?", ["เกม","หลอกข้อมูล","เพลง","แอป"],1],
  ["OTP ควรให้ไหม?", ["ให้","ไม่ให้","แล้วแต่","แชร์"],1],
  ["รหัสผ่านปลอดภัย?", ["1234","password","T@9Lm#2","abc"],2],
  ["Malware คือ?", ["เพลง","ไวรัส","รูป","เว็บ"],1],
  ["ลิงก์แปลกควร?", ["กด","ไม่กด","แชร์","โหลด"],1],
  ["Antivirus คือ?", ["เกม","ป้องกันไวรัส","หนัง","เว็บ"],1],
  ["ข้อมูลสำคัญคือ?", ["ชื่อ","OTP","สี","เพลง"],1],
  ["Public WiFi เสี่ยง?", ["ใช่","ไม่","ไม่รู้","ปกติ"],0],
  ["2FA คือ?", ["เกม","ยืนยัน 2 ชั้น","เพลง","แอป"],1],
  ["Spam คือ?", ["อาหาร","เมลขยะ","รูป","ข่าว"],1],
  ["Password ควรยาว?", ["ใช่","ไม่","ไม่รู้","สั้น"],0],
  ["Link https ปลอดภัยกว่า?", ["ใช่","ไม่","ไม่รู้","เท่าเดิม"],0],
  ["ดาวน์โหลดไฟล์แปลก?", ["โหลด","ไม่โหลด","แชร์","เปิด"],1],
  ["Social hack คือ?", ["เกม","หลอกคน","เพลง","เว็บ"],1],
  ["ข้อมูลส่วนตัวควร?", ["แชร์","เก็บ","โพสต์","แจก"],1],
  ["อีเมลแปลก?", ["เปิด","ไม่เปิด","ตอบ","ส่ง"],1],
  ["Update software?", ["ควร","ไม่","ไม่รู้","บางที"],0],
  ["Firewall คือ?", ["กำแพงกันเน็ต","ป้องกัน","เพลง","เว็บ"],1],
  ["ไวรัสทำอะไร?", ["ช่วย","ทำลาย","เล่น","เรียน"],1],
  ["Security สำคัญไหม?", ["สำคัญ","ไม่","เฉยๆ","ไม่รู้"],0],
];

const container = document.getElementById("quizContainer");

quizData.forEach((q,i)=>{
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<p>${i+1}. ${q[0]}</p>` +
    q[1].map((opt,idx)=>
      `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label><br>`
    ).join("");
  container.appendChild(div);
});

function submitQuiz(){
  let score = 0;
  quizData.forEach((q,i)=>{
    let ans = document.querySelector(`input[name=q${i}]:checked`);
    if(ans && parseInt(ans.value) === q[2]){
      score++;
    }
  });

  document.getElementById("score").innerHTML =
    "คะแนนของคุณ: " + score + "/20";
}
// ===== SCENARIO DATA =====
const scenarioData = [
  {
    question: "📩 คุณได้รับลิงก์แปลกจากเพื่อน",
    options: ["กดลิงก์ทันที", "ตรวจสอบก่อน"],
    correct: 1
  },
  {
    question: "🔑 มีคนโทรมาขอ OTP โดยอ้างว่าเป็นธนาคาร",
    options: ["ให้ OTP", "ไม่ให้"],
    correct: 1
  },
  {
    question: "💻 มี popup ให้โหลดโปรแกรมฟรี",
    options: ["โหลดทันที", "ไม่โหลด"],
    correct: 1
  },
  {
    question: "🌐 ใช้ WiFi สาธารณะทำธุรกรรม",
    options: ["ทำเลย", "หลีกเลี่ยง"],
    correct: 1
  }
];

// ===== RENDER SCENARIO =====
const scenarioContainer = document.getElementById("scenarioContainer");

scenarioData.forEach((s, i) => {
  let div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <p>${i + 1}. ${s.question}</p>
    ${s.options.map((opt, idx) =>
      `<button onclick="checkScenario(${i}, ${idx})">${opt}</button>`
    ).join("")}
  `;

  scenarioContainer.appendChild(div);
});

// ===== CHECK ANSWER =====
function checkScenario(qIndex, choice) {
  let result = document.getElementById("scenarioResult");

  if (choice === scenarioData[qIndex].correct) {
    result.innerHTML = "✅ คำตอบถูกต้อง!";
  } else {
    result.innerHTML = "❌ คำตอบไม่ถูกต้อง!";
  }
}