var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ec063233-3a9b-4ef4-9012-553993551884","d46efbd7-b022-436b-b4f7-3e811f5abac7","e2b71920-e9d4-4de0-86f1-d89a0bb72e6a"],"propsByKey":{"ec063233-3a9b-4ef4-9012-553993551884":{"name":"sofia1","sourceUrl":null,"frameSize":{"x":824,"y":765},"frameCount":1,"looping":true,"frameDelay":12,"version":"N1fgHCWqO6jGjY6toqBHbeCqXqT4j8m7","loadedFromSource":true,"saved":true,"sourceSize":{"x":824,"y":765},"rootRelativePath":"assets/ec063233-3a9b-4ef4-9012-553993551884.png"},"d46efbd7-b022-436b-b4f7-3e811f5abac7":{"name":"gatinhoPremioin","sourceUrl":"assets/v3/animations/RNpImsgsT_GOwEeKQuARFOkrCU185xB-N3Dm3AbxcbE/d46efbd7-b022-436b-b4f7-3e811f5abac7.png","frameSize":{"x":900,"y":900},"frameCount":1,"looping":true,"frameDelay":4,"version":"YWgYEP7AyNSZjLcU_OQo7ZaUgLFV_8WQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":900},"rootRelativePath":"assets/v3/animations/RNpImsgsT_GOwEeKQuARFOkrCU185xB-N3Dm3AbxcbE/d46efbd7-b022-436b-b4f7-3e811f5abac7.png"},"e2b71920-e9d4-4de0-86f1-d89a0bb72e6a":{"name":"papelão","sourceUrl":"assets/v3/animations/YGcZVOXZwrJIkL0yU0DwsPhaehkEFDQgWwVV1AReKx0/e2b71920-e9d4-4de0-86f1-d89a0bb72e6a.png","frameSize":{"x":242,"y":209},"frameCount":1,"looping":true,"frameDelay":4,"version":"6jGdRx65hmYF1G48y_jl5PycTAtmbcks","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":209},"rootRelativePath":"assets/v3/animations/YGcZVOXZwrJIkL0yU0DwsPhaehkEFDQgWwVV1AReKx0/e2b71920-e9d4-4de0-86f1-d89a0bb72e6a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gatinhoPremio = createSprite(200,200,0.1,0.1)   //premio do segredo
gatinhoPremio.shapeColor=("MidnightBlue")
gatinhoPremio.scale = 0.5

var esterEgg = createSprite(380,380,50,50)          //objetivo segundario
esterEgg.shapeColor = ("red")

var campo = createSprite(325,50,70,70)              //campo de distância da porta
campo.shapeColor=("MidnightBlue")

var cup = createSprite(163,123,65,45)               //objetivo principal
cup.shapeColor = ("green")

var sofia = createSprite(50, 50, 25,25);            //Sofia
sofia.shapeColor = ("mediumPurple")

var wall1 = createSprite(35,90,75,10)               //paredes
wall1.shapeColor = ("darkGoldenRod")
var wall2 = createSprite(125,45,10,220)
wall2.shapeColor = ("darkGoldenRod")
var wall3 = createSprite(150,150,200,10)
wall3.shapeColor = ("darkGoldenRod")
var wall4 = createSprite(50,220,10,150)
wall4.shapeColor = ("darkGoldenRod")
var wall5 = createSprite(200,100,10,100)
wall5.shapeColor = ("darkGoldenRod")
var wall6 = createSprite(150,290,200,10)
wall6.shapeColor = ("darkGoldenRod")
var wall7 = createSprite(50,400,10,150)
wall7.shapeColor = ("darkGoldenRod")
var wall8 = createSprite(90,325,10,80)
wall8.shapeColor = ("darkGoldenRod")
var wall9 = createSprite(130,400,10,150)
wall9.shapeColor = ("darkGoldenRod")
var wall10 = createSprite(170,325,10,80)
wall10.shapeColor = ("darkGoldenRod")
var wall11 = createSprite(210,400,10,150)
wall11.shapeColor = ("darkGoldenRod")
var wall13 = createSprite(230,250,250,10)
wall13.shapeColor = ("darkGoldenRod")
var wall14 = createSprite(170,215,240,10)
wall14.shapeColor = ("darkGoldenRod")
var wall15 = createSprite(230,185,240,10)
wall15.shapeColor = ("darkGoldenRod")

var wall17 = createSprite(225,100,10,10)
wall17.shapeColor = ("darkGoldenRod")
var wall18 = createSprite(250,100,10,10)
wall18.shapeColor = ("darkGoldenRod")
var wall19 = createSprite(275,100,10,10)
wall19.shapeColor = ("darkGoldenRod")
var wall20 = createSprite(300,100,10,10)
wall20.shapeColor = ("darkGoldenRod")
var wall21 = createSprite(325,100,10,10)
wall21.shapeColor = ("darkGoldenRod")
var wall22 = createSprite(200,100,10,10)
wall22.shapeColor = ("darkGoldenRod")
var wall23 = createSprite(225,120,10,10)
wall23.shapeColor = ("darkGoldenRod")
var wall24 = createSprite(250,120,10,10)
wall24.shapeColor = ("darkGoldenRod")
var wall25 = createSprite(275,120,10,10)
wall25.shapeColor = ("darkGoldenRod")
var wall26 = createSprite(300,120,10,10)
wall26.shapeColor = ("darkGoldenRod")
var wall27 = createSprite(325,120,10,10)
wall27.shapeColor = ("darkGoldenRod")
var wall28 = createSprite(200,120,10,10)
wall28.shapeColor = ("darkGoldenRod")

var topo = createSprite(200,-100,400,10); topo.visible = false
var direita = createSprite(200,10,400,10)
var esquerda = createSprite(-10,200,10,400)
var baixo = createSprite(200,410,400,10)

var porta1 = createSprite(350,45,10,60)             //porta
porta1.shapeColor = ("SaddleBrown")
var macaneta1 = createSprite(341,65,7,7)            //maçaneta da porta
macaneta1.shapeColor = ("gold")

var wall16 = createSprite(350,0,10,30)              //parededa porta
wall16.shapeColor = ("dodgerBlue")
var wall12 = createSprite(350,250,10,350)
wall12.shapeColor = ("dodgerBlue") 
createSprite()

var cabana = createSprite(0,0,100,100)              //spawn Sofia
cabana.shapeColor = ("orange")


function draw() {
  background("MidnightBlue");

 

drawSprites();
if ( sofia.isTouching(cup))                         //check win
{
  textSize(40);
  stroke("red");
  text("Você Venceu", 100,50);
  }
  
  if ( sofia.isTouching(esterEgg))                  //check esterEgg
{
  textSize(20);
  stroke("white");
  text("Nova medalha: gatinhos fofos", 90,20);
  }
  
if (keyDown("up")) {                                //controles de Sofia (w,a,s,d)
   sofia.y=sofia.y-10;
 }
 if (keyDown("down")) {
   sofia.y=sofia.y+10;
 }
 if (keyDown("left")) {
   sofia.x=sofia.x-10;
 }
 if (keyDown("right")) {
   sofia.x=sofia.x+10;
 }
 if (keyDown("w")) {
   sofia.y=sofia.y-10;
 }
 if (keyDown("s")) {
   sofia.y=sofia.y+10;
 }
 if (keyDown("a")) {
   sofia.x=sofia.x-10;
 }
 if (keyDown("d")) {
   sofia.x=sofia.x+10;
 }

if( sofia.isTouching(campo)){                       //check se Sofia alcança a porta
fill("deepPink")
textSize(40);
text("press E", 150, 50);

 if (keyDown("e")) {                               //se alcanda pode se abri-la (e)
porta1.destroy()
macaneta1.destroy()
campo.destroy()
}
}


createEdgeSprites()
sofia.bounceOff(wall1);                            //colisão de Sofia contra objetos
sofia.bounceOff(wall2);
sofia.bounceOff(wall3);
sofia.bounceOff(wall4);
sofia.bounceOff(wall5);
sofia.bounceOff(wall6);
sofia.bounceOff(wall7);
sofia.bounceOff(wall8);
sofia.bounceOff(wall9);
sofia.bounceOff(wall10);
sofia.bounceOff(wall11);
sofia.bounceOff(wall12);
sofia.bounceOff(wall13);
sofia.bounceOff(wall14);
sofia.bounceOff(wall15);
sofia.bounceOff(wall16);
wall17.bounceOff(sofia);
wall18.bounceOff(sofia);
wall19.bounceOff(sofia);
wall20.bounceOff(sofia);
wall21.bounceOff(sofia);
wall23.bounceOff(sofia);
wall24.bounceOff(sofia);
wall25.bounceOff(sofia);
wall26.bounceOff(sofia);
wall27.bounceOff(sofia);
wall28.bounceOff(sofia);
sofia.bounceOff(topo);
sofia.bounceOff(baixo);
sofia.bounceOff(direita);
sofia.bounceOff(esquerda);
sofia.bounceOff(macaneta1);
sofia.bounceOff(porta1);
}

// (Obs: tentei colocar uma animação em Sofia(presente no label)mas não consiguir)
// Reporte de bug (ao precionar as setas juntamente com o w,a,s,d Sofia atravessa parades)
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
