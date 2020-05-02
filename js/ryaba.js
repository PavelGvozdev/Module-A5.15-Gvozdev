const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  
  $.getJSON(dataURL,
    function(data) {
      handleData(data);
    });
    
}

function handleData(data) {
  const var1 = $("input[name=var1]").val();
  const var2 = $("input[name=var2]").val();
  const var3 = $("input[name=var3]").val();
  const var4 = $("input[name=var4]").val();
  const var5 = $("input[name=var5]").val();
  const var6 = $("input[name=var6]").val();
  const speach = $("input[name=speach]").val();

  // надо сделать так чтобы сообщения подменились на значения из формы
  let text = data.text[0].replace('{var1}', var1).replace('{var2}', var2);
  let text2 = data.text[1].replace('{var3}', var3);
  let text3 = data.text[2].replace('{var3}', var3).replace('{var4}', var4);
  let text4 = data.text[3].replace('{var1}', var1);
  let text5 = data.text[4].replace('{var2}', var2);
  let text6 = data.text[5].replace('{var5}', var5).replace('{var6}', var6).replace('{var4}', var4);
  let text7 = data.text[6].replace('{var1}', var1).replace('{var2}', var2).replace('{var3}', var3);
  let text8 = data.text[7].replace('{speach}', speach);
  
  
  let resultText = text + ". " + text2 + ". "+ text3 + ". " + text4 + ". " + text5 + ". " + text6 + ". " + text7 + " " + text8 + ".";

  
	$("#result").text(resultText);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
