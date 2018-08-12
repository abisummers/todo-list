function makeInteractive(container) {
  //make it work for the button done
  container.querySelector(".btn-done").addEventListener("click", evt => {
    //change the value of the check box to true
    container.querySelector(".checkbox").checked = true;
  });
  container.querySelector(".btn-undone").addEventListener("click", evt => {
    container.querySelector(".checkbox").checked = false;
  });
}

document.querySelectorAll(".container").forEach(makeInteractive);

//listing items in make summary
document.querySelector("#btn-summary").addEventListener("click", () => {
  console.log("click");

  var ul = document.querySelector("#summary");
  ul.textContent = "";

  document.querySelectorAll(".container").forEach(function(container) {
    if (container.querySelector(".checkbox").checked) {
      var li = document.createElement("li");
      li.innerText = container.querySelector("span").innerText;
      ul.appendChild(li);
    }
  });
});

function createDOM(text) {
  var container = document.createElement("li");
  container.className = "container";

  var input = document.createElement("input");
  input.type = "checkbox";
  input.className = "checkbox";
  input.disabled = true;

  var span = document.createElement("span");
  span.innerText = text;

  var buttonD = document.createElement("button");
  buttonD.className = "btn-done";
  buttonD.innerText = "mark done";

  var buttonU = document.createElement("button");
  buttonU.className = "btn-undone";
  buttonU.innerText = "mark undone";

  container.appendChild(input);
  container.appendChild(span);
  container.appendChild(buttonD);
  container.appendChild(buttonU);

  makeInteractive(container);

  console.log(container);
  return container;
}

document.querySelector(".add").addEventListener("click", () => {
  var text = document.querySelector(".addText").value;

  document.querySelector(".ol").appendChild(createDOM(text));

  document.querySelector(".addText").value = "";
});
