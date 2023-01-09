let tela = document.querySelectorAll(".tela")


tela.forEach(el => {
    let context = el.getContext("2d")
    console.log(context)
    
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(150, 0);
    context.lineWidth = 60
    context.stroke();
    
    context.beginPath();
    context.moveTo(150, 300);
    context.lineTo(0, 300);
    context.lineWidth = 90;
    context.stroke()
    
    context.beginPath();
    context.moveTo(150, 0);
    context.lineTo(150, 300);
    context.moveTo(0, 300);
    context.lineTo(0, 0);
    context.lineWidth = 20;
    context.stroke()

    let x = 75,
    y = 280,
    raio = 4,
    inicio = 0, 
    fim = 2 * Math.PI;
    
    context.beginPath();
    context.strokeStyle = "#fff"
    context.fillStyle = "#fff";
    context.arc(x, y, raio, inicio, fim);
    context.fill()
    context.stroke()
});
