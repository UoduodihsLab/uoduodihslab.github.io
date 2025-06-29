// 获取显示文本的元素
const typingElementAsync = document.getElementById("typer");
// 要显示的文本数组
const textsToType = ["欢迎来到DDS工作室", "网站, 机器人定制开发联系我"];
// 打字速度（毫秒）
const typingSpeed = 100;
// 两段文本间的延迟（毫秒）
const textChangeDelay = 2000;

// 创建一个 sleep 函数，用于等待
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 主要的打字逻辑函数
async function typewriterEffect() {
  // 无限循环
  while (true) {
    for (const text of textsToType) {
      // 逐字打印
      for (let i = 0; i < text.length; i++) {
        typingElementAsync.textContent += text.charAt(i);
        await sleep(typingSpeed);
      }
      // 打印完一段后等待
      await sleep(textChangeDelay);
      
      // 逐字删除（可选）
      for (let i = text.length; i > 0; i--) {
        typingElementAsync.textContent = typingElementAsync.textContent.slice(0, -1);
        await sleep(typingSpeed / 2); // 删除时速度可以快一些
      }
      // 删除完后等待
      await sleep(textChangeDelay / 2);
    }
  }
}

// 页面加载后启动
document.addEventListener("DOMContentLoaded", typewriterEffect);