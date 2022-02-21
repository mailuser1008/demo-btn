function changeBtn(options) {
  let btns = document.querySelectorAll(".danger_btn");

  if (options.color === "danger_btn") {
    btns.forEach((btn) => {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
      btn.style.border = "none";
      btn.style.padding = "8px 15px";
      btn.style.cursor = "pointer";
    });
  } else if (options.color === "success_btn")
    btns.forEach((btn) => {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
      btn.style.border = "none";
      btn.style.padding = "8px 15px";
      btn.style.cursor = "pointer";
    });

  btns.forEach((btn) => {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "8px 15px";
    btn.style.cursor = "pointer";
  });
}

module.exports.changeBtn = changeBtn;
