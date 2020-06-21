var tran="false";
var shiftcache="false";
var phonetic="false";
var tamil99="false";

//To append the keyboard
function showkeyboard()
{
var content="<div id='keyboard' style='align:right;display:none;position:fixed;bottom:10px;right:5px;float:right;'><div id='mydivheader' style='width:550px;'><b>⛶</b><span id='kbheader'></span><a style='float:right;' href='https://github.com/neechalkaran/On-screen-keyboard/'>?</a></div><img usemap='#tamil99map' width='565' height='211' border='0' src='Tamil_Keyboard_Tamil_99.jpg'   /><map name='tamil99map'  ><area shape='rect' coords='0,0,39,41' href='javascript:void(0);' onclick='writeme([&#39;`&#39;,&#39;~&#39;,&#39;&#39;])' alt='`'><area shape='rect' coords='40,0,77.6,41' href='javascript:void(0);' onclick='writeme([&#39;1&#39;,&#39;!&#39;,&#39;&#39;])' alt='1'><area shape='rect' coords='77.6,0,115.1,41' href='javascript:void(0);' onclick='writeme([&#39;2&#39;,&#39;@&#39;,&#39;&#39;])' alt='2'><area shape='rect' coords='115.2,0,152.7,41' href='javascript:void(0);' onclick='writeme([&#39;3&#39;,&#39;#&#39;,&#39;&#39;])' alt='3'><area shape='rect' coords='152.8,0,190.3,41' href='javascript:void(0);' onclick='writeme([&#39;4&#39;,&#39;$&#39;,&#39;&#39;])' alt='4'><area shape='rect' coords='190.4,0,227.9,41' href='javascript:void(0);' onclick='writeme([&#39;5&#39;,&#39;\%&#39;,&#39;&#39;])' alt='5'><area shape='rect' coords='228,0,265.5,41' href='javascript:void(0);' onclick='writeme([&#39;6&#39;,&#39;\^&#39;,&#39;&#39;])' alt='6'><area shape='rect' coords='265.6,0,303.1,41' href='javascript:void(0);' onclick='writeme([&#39;7&#39;,&#39;\&&#39;,&#39;&#39;])' alt='7'><area shape='rect' coords='303.2,0,340.7,41' href='javascript:void(0);' onclick='writeme([&#39;8&#39;,&#39;\*&#39;,&#39;&#39;])' alt='8'><area shape='rect' coords='340.8,0,378.1,41' href='javascript:void(0);' onclick='writeme([&#39;9&#39;,&#39;\(&#39;,&#39;&#39;])' alt='9'><area shape='rect' coords='378.2,0,414.5,41' href='javascript:void(0);' onclick='writeme([&#39;0&#39;,&#39;\)&#39;,&#39;&#39;])' alt='0'><area shape='rect' coords='414.6,0,452.9,41' href='javascript:void(0);' onclick='writeme([&#39;-&#39;,&#39;\_&#39;,&#39;&#39;])' alt='-'><area shape='rect' coords='453,0,490.3,41' href='javascript:void(0);' onclick='writeme([&#39;=&#39;,&#39;\+&#39;,&#39;&#39;])' alt='='><area shape='rect' coords='490.4,0,527.7,41' href='javascript:void(0);' onclick='writeme([&#39;&#92;&#92;&#39;,&#39;&#92;&#124;&#39;,&#39;&#39;])' alt='\'><area shape='rect' coords='527.8,0,565,41' href='javascript:void(0);' onclick='writeme([&#39;←&#39;,&#39;←&#39;,&#39;←&#39;])' alt='←'><area shape='rect' coords='0,45,55.7,84' href='javascript:void(0);' onclick='writeme([&#39;\t&#39;,&#39;\t&#39;,&#39;\t&#39;])' alt='→'><area shape='rect' coords='55.8,45,93.2,84' href='javascript:void(0);' onclick='writeme([&#39;q&#39;,&#39;Q&#39;,&#39;&#39;])' alt='q'><area shape='rect' coords='93.3,45,130.6,84' href='javascript:void(0);' onclick='writeme([&#39;w&#39;,&#39;W&#39;,&#39;&#39;])' alt='w'><area shape='rect' coords='130.7,45,168.3,84' href='javascript:void(0);' onclick='writeme([&#39;e&#39;,&#39;E&#39;,&#39;&#39;])' alt='e'><area shape='rect' coords='168.4,45,205.4,84' href='javascript:void(0);' onclick='writeme([&#39;r&#39;,&#39;R&#39;,&#39;&#39;])' alt='r'><area shape='rect' coords='205.5,45,243,84' href='javascript:void(0);' onclick='writeme([&#39;t&#39;,&#39;T&#39;,&#39;&#39;])' alt='t'><area shape='rect' coords='243.1,45,280.6,84' href='javascript:void(0);' onclick='writeme([&#39;y&#39;,&#39;Y&#39;,&#39;&#39;])' alt='y'><area shape='rect' coords='280.7,45,318.2,84' href='javascript:void(0);' onclick='writeme([&#39;u&#39;,&#39;U&#39;,&#39;&#39;])' alt='u'><area shape='rect' coords='318.3,45,355.8,84' href='javascript:void(0);' onclick='writeme([&#39;i&#39;,&#39;I&#39;,&#39;&#39;])' alt='i'><area shape='rect' coords='355.9,45,393.4,84' href='javascript:void(0);' onclick='writeme([&#39;o&#39;,&#39;O&#39;,&#39;&#39;])' alt='o'><area shape='rect' coords='393.5,45,431,84' href='javascript:void(0);' onclick='writeme([&#39;p&#39;,&#39;P&#39;,&#39;&#39;])' alt='p'><area shape='rect' coords='431.1,45,468.6,84' href='javascript:void(0);' onclick='writeme([&#39;\[&#39;,&#39;{&#39;,&#39;&#39;])' alt='\['><area shape='rect' coords='468.7,45,506.2,84' href='javascript:void(0);' onclick='writeme([&#39;\]&#39;,&#39;}&#39;,&#39;&#39;])' alt='\]'><area shape='poly' coords='506.3,45,565,45,565,130,488,130,488,85,506.3,85' href='javascript:void(0);' onclick='writeme([&#39;\\n&#39;,&#39;\\n&#39;,&#39;\\n&#39;])' alt='\⏎'><area shape='rect' coords='0,85,77,130' href='javascript:void(0);' onclick='writeme([&#39;⇧&#39;,&#39;⇧&#39;,&#39;⇧&#39;])' alt='CAP'><area shape='rect' coords='77.1,85,113.5,130' href='javascript:void(0);' onclick='writeme([&#39;a&#39;,&#39;A&#39;,&#39;&#39;])' alt='a'><area shape='rect' coords='113.6,85,151.1,130' href='javascript:void(0);' onclick='writeme([&#39;s&#39;,&#39;S&#39;,&#39;&#39;])' alt='s'><area shape='rect' coords='151.2,85,189.7,130' href='javascript:void(0);' onclick='writeme([&#39;d&#39;,&#39;D&#39;,&#39;&#39;])' alt='d'><area shape='rect' coords='189.8,85,226.8,130' href='javascript:void(0);' onclick='writeme([&#39;f&#39;,&#39;F&#39;,&#39;&#39;])' alt='f'><area shape='rect' coords='226.9,85,263.9,130' href='javascript:void(0);' onclick='writeme([&#39;g&#39;,&#39;G&#39;,&#39;&#39;])' alt='g'><area shape='rect' coords='264,85,301.5,130' href='javascript:void(0);' onclick='writeme([&#39;h&#39;,&#39;H&#39;,&#39;&#39;])' alt='h'><area shape='rect' coords='301.6,85,338.1,130' href='javascript:void(0);' onclick='writeme([&#39;j&#39;,&#39;J&#39;,&#39;&#39;])' alt='j'><area shape='rect' coords='338.2,85,375.7,130' href='javascript:void(0);' onclick='writeme([&#39;k&#39;,&#39;K&#39;,&#39;&#39;])' alt='k'><area shape='rect' coords='375.8,85,413.3,130' href='javascript:void(0);' onclick='writeme([&#39;l&#39;,&#39;L&#39;,&#39;&#39;])' alt='l'><area shape='rect' coords='413.4,85,450.9,130' href='javascript:void(0);' onclick='writeme([&#39;\&#59;&#39;,&#39;\&#58;&#39;,&#39;&#39;])' alt='\;'><area shape='rect' coords='451,85,488.5,130' href='javascript:void(0);' onclick='writeme([&#39;&#92;&#39;&#39;,&#39;&#92;&#34;&#39;,&#39;&#39;])' alt='\&#39;'><area shape='rect' coords='0,131,93.2,172' href='javascript:void(0);' onclick='writeme([&#39;⇧&#39;,&#39;⇧&#39;,&#39;⇧&#39;])' alt='⇧'><area shape='rect' coords='93.3,131,130.6,172' href='javascript:void(0);' onclick='writeme([&#39;z&#39;,&#39;Z&#39;,&#39;&#39;])' alt='z'><area shape='rect' coords='130.7,131,168.3,172' href='javascript:void(0);' onclick='writeme([&#39;x&#39;,&#39;X&#39;,&#39;&#39;])' alt='x'><area shape='rect' coords='168.4,131,205.4,172' href='javascript:void(0);' onclick='writeme([&#39;c&#39;,&#39;C&#39;,&#39;&#39;])' alt='c'><area shape='rect' coords='205.5,131,243,172' href='javascript:void(0);' onclick='writeme([&#39;v&#39;,&#39;V&#39;,&#39;&#39;])' alt='v'><area shape='rect' coords='243.1,131,280.6,172' href='javascript:void(0);' onclick='writeme([&#39;b&#39;,&#39;B&#39;,&#39;&#39;])' alt='b'><area shape='rect' coords='280.7,131,318.2,172' href='javascript:void(0);' onclick='writeme([&#39;n&#39;,&#39;N&#39;,&#39;&#39;])' alt='n'><area shape='rect' coords='318.3,131,355.8,172' href='javascript:void(0);' onclick='writeme([&#39;m&#39;,&#39;M&#39;,&#39;&#39;])' alt='m'><area shape='rect' coords='355.9,131,393.9,172' href='javascript:void(0);' onclick='writeme([&#39;\,&#39;,&#39;\&#60;&#39;,&#39;&#39;])' alt='\,'><area shape='rect' coords='394,131,431.5,172' href='javascript:void(0);' onclick='writeme([&#39;\.&#39;,&#39;\&#62;&#39;,&#39;&#39;])' alt='\.'><area shape='rect' coords='431.6,131,469.6,172' href='javascript:void(0);' onclick='writeme([&#39;\/&#39;,&#39;\?&#39;,&#39;&#39;])' alt='\/'><area shape='rect' coords='469.7,131,565,172' href='javascript:void(0);' onclick='writeme([&#39;⇧&#39;,&#39;⇧&#39;,&#39;⇧&#39;])' alt='⇧'><area shape='rect' coords='0,172,55.7,211' href='javascript:void(0);' onclick='writeme([&#39;⇩&#39;,&#39;⇩&#39;,&#39;⇩&#39;])' alt='CTRL'><area shape='rect' coords='102.5,172,156.3,211' href='javascript:void(0);' onclick='writeme([&#39;⇩&#39;,&#39;⇩&#39;,&#39;⇩&#39;])' alt='ALT'><area shape='rect' coords='156.4,172,407.3,211' href='javascript:void(0);' onclick='writeme([&#39; &#39;,&#39; &#39;,&#39; &#39;])' alt='SPACE'><area shape='rect' coords='407.4,172,460.6,211' href='javascript:void(0);' onclick='writeme([&#39;⇩&#39;,&#39;⇩&#39;,&#39;⇩&#39;])' alt='ALT'><area shape='rect' coords='506.3,172,565,211' href='javascript:void(0);' onclick='writeme([&#39;⇩&#39;,&#39;⇩&#39;,&#39;⇩&#39;])' alt='CTRL'></map></div>";
var node = document.createElement("div");
node.innerHTML = content;
document.body.appendChild(node);
}

$("textarea").keypress(function(e){if(tran=="true"){writeme(String.fromCharCode(e.which));return false;}else{return true;}});
$("input").keypress(function(e){if(tran=="true"){writeme(String.fromCharCode(e.which));return false;}else{return true;}});

dragElement(document.getElementById("keyboard"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
  

function togglemap(virupam)
{

if(virupam == 'phonetic')
{phonetic="true"; tamil99="false";tran="true";
 if($('#kbheader'))$('#kbheader').html('ஒலிபெயர்ப்பு');
//document.getElementById("keyboard").style.display="block";
$('#keyboard').show();}
else if(virupam == 'tamil99')
{phonetic="false"; tamil99="true";tran="true";
 if($('#kbheader'))$('#kbheader').html('தமிழ்99');
$('#keyboard').show();}
else{phonetic="false"; tamil99="false";$('#keyboard').hide();tran="false";}
//if(showkeyboard==false){$('#keyboard').hide();}
/*if(document.getElementById("keyboard").style.display=="block"){tran="false";
document.getElementById("keyboard").style.display="none";
return;}
if(document.getElementById("keyboard").style.display=="none"){
tran="true";
document.getElementById("keyboard").style.display="block";
return;}*/
}
function writeme(a)
{
if((a[0]=="⇧")&&(shiftcache=="false")){shiftcache="true";return;}
if((a[0]=="⇧")&&(shiftcache=="true")){shiftcache="false";return;}
if(a[0]=="⇩"){return;}
if(a[0]=="←"){deleteAtCaret(livebox);return;}

if(shiftcache=="true"){b=a[1];shiftcache="false";}
else{b=a[0];}

if(phonetic=="true"){b = tphonetic(b);}
if(tamil99=="true"){b = ttamil99(b);}


insertAtCaret(livebox,b);
trans();

}

var mem;
var textvalue;
textvalue="";
mem=0;
function trans() {
if (textvalue==document.getElementById(livebox).value){return;}

if ((textvalue+String.fromCharCode(13)+String.fromCharCode(10))==document.getElementById(livebox).value)
{textvalue=document.getElementById(livebox).value;
return;}

var doc = document.getElementById(livebox);
textvalue = doc.value ;
var caret,carot,r;
if (doc.selectionStart || doc.selectionStart == '0')
caret = doc.selectionStart;
else if (document.selection) { 
var oSel = document.selection.createRange();
oSel.moveStart ('character', -1000000);
caret = oSel.text.length;
//alert(caret);
carot = caret-54;
var key=(typeof event!='undefined')?window.event.keyCode:e.keyCode; 
r=0;
if(textvalue.charCodeAt(carot+1)==13){r=r+1;}
if(carot>1)
{for(i=0;i<carot;i++){if(textvalue.charCodeAt(i)==13){r=r+1;}}}
carot=carot-r;
r=0;
if((mem==carot) && (key==13 || key==39)){r=r+1;}
if((mem==carot) && (key==37)){r=r;}
carot=carot+r;
mem=carot;
}
if(phonetic=="true"){var tamil = sphonetic(textvalue);}
if(tamil99=="true"){var tamil = stamil99(textvalue);}
//alert(tamil);
var tot = tamil.length + parseInt('2');
//alert("English length ::::" +textvalue.length+"tamil length "+tamil.length )
doc.value = tamil;
if (doc.selectionStart || doc.selectionStart == '0') {    ///first check
if(textvalue.length == tamil.length) {doc.setSelectionRange(caret, caret);}
else if(textvalue.length > tamil.length && textvalue.length != tot) {doc.setSelectionRange(caret-1, caret-1);}
else if (textvalue.length < tamil.length ) {doc.setSelectionRange(caret+1, caret+1);}
else if (textvalue.length == tot) {doc.setSelectionRange(caret-2, caret-2);}
else {}
}
else if (doc.createTextRange) {  ///second check
//alert("");
var range = doc.createTextRange();
range.collapse(true);
if(textvalue.length<tamil.length)  {
range.moveEnd('character', carot+1);
range.moveStart('character', carot+1);
}
else if (textvalue.length == tamil.length) {
range.moveEnd('character', carot);
range.moveStart('character', carot);
}
else if (textvalue.length>tamil.length && textvalue.length != tot ) {
range.moveEnd('character', carot-1);
range.moveStart('character', carot-1);
}
else if (textvalue.length == tot ) {
range.moveEnd('character', carot-2);
range.moveStart('character', carot-2);
}
range.select();
}
else if (document.selection) {     ///Third check
var newrange = document.selection.createRange ();
newrange.move('character', -1000000);
if(textvalue.length<tamil.length)  {
newrange.moveStart('character', caret+1);
newrange.select();
}
else if (textvalue.length == tamil.length) {
newrange.moveStart('character', caret);
newrange.select();
}
else if (textvalue.length>tamil.length && textvalue.length != tot ) {
newrange.moveStart('character', caret-1);
newrange.select();
}
else if (textvalue.length == tot ) {
newrange.moveStart('character', caret-2);
newrange.select();
}
else {}
}
textvalue=document.getElementById(livebox).value;
}

function deleteAtCaret(areaId) {
    var txtarea = document.getElementById(areaId);
    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
     "ff" : (document.selection ? "ie" : "false" ) );
    if (br == "ie") { 
     txtarea.focus();
     var range = document.selection.createRange();
     range.moveStart ('character', -txtarea.value.length);
     strPos = range.text.length;
    }
    else if (br == "ff") strPos = txtarea.selectionStart;

    var front = (txtarea.value).substring(0,strPos-1);  
    var back = (txtarea.value).substring(strPos,txtarea.value.length); 
    txtarea.value=front+back;
    strPos = strPos -1;
    if (br == "ie") { 
     txtarea.focus();
     var range = document.selection.createRange();
     range.moveStart ('character', -txtarea.value.length);
     range.moveStart ('character', strPos);
     range.moveEnd ('character', 0);
     range.select();
    }
    else if (br == "ff") {
     txtarea.selectionStart = strPos;
     txtarea.selectionEnd = strPos;
     txtarea.focus();
    }
    txtarea.scrollTop = scrollPos;
}


function insertAtCaret(areaId,text) {
    var txtarea = document.getElementById(areaId);
    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
     "ff" : (document.selection ? "ie" : "false" ) );
    if (br == "ie") { 
     txtarea.focus();
     var range = document.selection.createRange();
     range.moveStart ('character', -txtarea.value.length);
     strPos = range.text.length;
    }
    else if (br == "ff") strPos = txtarea.selectionStart;

    var front = (txtarea.value).substring(0,strPos);  
    var back = (txtarea.value).substring(strPos,txtarea.value.length); 
    txtarea.value=front+text+back;
    strPos = strPos + text.length;
    if (br == "ie") { 
     txtarea.focus();
     var range = document.selection.createRange();
     range.moveStart ('character', -txtarea.value.length);
     range.moveStart ('character', strPos);
     range.moveEnd ('character', 0);
     range.select();
    }
    else if (br == "ff") {
     txtarea.selectionStart = strPos;
     txtarea.selectionEnd = strPos;
     txtarea.focus();
    }
    txtarea.scrollTop = scrollPos;
}
function tphonetic(chr) {

var pmap="a,அ,A,அஅ,i,இ,I,இஇ,u,உ,U,உஉ,e,எ,E,எஎ,o,ஒ,O,ஒஒ,k,க்,g,க்,z,ழ்,w,ந்,t,ட்,s,ச்,c,ச்,j,ஜ்,h,ஹ்,S,ஸ்,r,ர்,R,ற்,d,ட்,D,ட்,p,ப்,b,ப்,m,ம்,y,ய்,n,ன்,N,ண்,l,ல்,L,ள்,v,வ்,q,ஃ,f,ஃப்".split(",");
for (i=0;i<pmap.length-1;i++)
{
 chr=chr.replace(RegExp(pmap[i],"g"),pmap[i+1]);
 i=i+1;
}
return chr;
}

function ttamil99(chr) {
chr = chr.replace(/\[/gi,"ச");
var tmap ="a,அ,q,ஆ,s,இ,w,ஈ,d,உ,e,ஊ,g,எ,t,ஏ,r,ஐ,c,ஒ,x,ஓ,z,ஔ,F,ஃ ,h,க,b,ங,E,ஜ,\],ஞ,o,ட,p,ண,l,த,;,ந,i,ன,j,ப,k,ம,\',ய,m,ர,u,ற,n,ல,y,ள,\/,ழ,v,வ,U,ஶ,W,ஷ,Q,ஸ,R,ஹ,f,்,L,\:,O,\[,P,\],M,\/,L,௱,N,ௐ,T,க்ஷ,Y,ஸ்ரீ,A,௹,S,௺,D,௸,Z,௳,X,௴,C,௵,V,௶,B,௷".split(",");

for (i=0;i<tmap.length-1;i++)
{
 chr=chr.replace(RegExp(tmap[i],"g"),tmap[i+1]);
 i=i+1;
}

return chr;
}

function sphonetic(chr) {

var pDB="ச்ர்i,ஸ்ரீ,அஅ,ஆ,இஇ,ஈ,உஉ,ஊ,எஎ,ஏ,ஒஒ,ஓ,க்அ,க,கஅ,கா,க்ஆ,கா,க்இ,கி,கிஇ,கீ,க்ஈ,கீ,க்உ,கு,குஉ,கூ,க்ஊ,கூ,க்எ,கெ,கெஎ,கே,க்ஏ,கே,க்ஒ,கொ,கொஒ,கோ,க்ஓ,கோ,கஉ,கௌ,கஇ,கை,ழ்அ,ழ,ழஅ,ழா,ழ்ஆ,ழா,ழ்இ,ழி,ழிஇ,ழீ,ழ்ஈ,ழீ,ழ்உ,ழு,ழுஉ,ழூ,ழ்ஊ,ழூ,ழ்எ,ழெ,ழெஎ,ழே,ழ்ஏ,ழே,ழ்ஒ,ழொ,ழொஒ,ழோ,ழ்ஓ,ழோ,ழஉ,ழௌ,ழஇ,ழை,ழ்h,ழ்,ன்j,ஞ்,ஞ்அ,ஞ,ஞஅ,ஞா,ஞ்ஆ,ஞா,ஞ்இ,ஞி,ஞிஇ,ஞீ,ஞ்ஈ,ஞீ,ஞ்உ,ஞு,ஞுஉ,ஞூ,ஞ்ஊ,ஞூ,ஞ்எ,ஞெ,ஞெஎ,ஞே,ஞ்ஏ,ஞே,ஞ்ஒ,ஞொ,ஞொஒ,ஞோ,ஞ்ஓ,ஞோ,ஞஉ,ஞௌ,ஞஇ,ஞை,ந்அ,ந,நஅ,நா,ந்ஆ,நா,ந்இ,நி,நிஇ,நீ,ந்ஈ,நீ,ந்உ,நு,நுஉ,நூ,ந்ஊ,நூ,ந்எ,நெ,நெஎ,நே,ந்ஏ,நே,ந்ஒ,நொ,நொஒ,நோ,ந்ஓ,நோ,நஉ,நௌ,நஇ,நை,ன்t,ந்,ட்அ,ட,டஅ,டா,ட்ஆ,டா,ட்இ,டி,டிஇ,டீ,ட்ஈ,டீ,ட்உ,டு,டுஉ,டூ,ட்ஊ,டூ,ட்எ,டெ,டெஎ,டே,ட்ஏ,டே,ட்ஒ,டொ,டொஒ,டோ,ட்ஓ,டோ,டஉ,டௌ,டஇ,டை,ந்h,ந்த்,ட்h,த்,த்அ,த,தஅ,தா,த்ஆ,தா,த்இ,தி,திஇ,தீ,த்ஈ,தீ,த்உ,து,துஉ,தூ,த்ஊ,தூ,த்எ,தெ,தெஎ,தே,த்ஏ,தே,த்ஒ,தொ,தொஒ,தோ,த்ஓ,தோ,தஉ,தௌ,தஇ,தை,ட்ஹ்,த்,ச்அ,ச,சஅ,சா,ச்ஆ,சா,ச்இ,சி,சிஇ,சீ,ச்ஈ,சீ,ச்உ,சு,சுஉ,சூ,ச்ஊ,சூ,ச்எ,செ,செஎ,சே,ச்ஏ,சே,ச்ஒ,சொ,சொஒ,சோ,ச்ஓ,சோ,சஉ,சௌ,சஇ,சை,ச்h,ஷ்,ஷ்அ,ஷ,ஷஅ,ஷா,ஷ்ஆ,ஷா,ஷ்இ,ஷி,ஷிஇ,ஷீ,ஷ்ஈ,ஷீ,ஷ்உ,ஷு,ஷுஉ,ஷூ,ஷ்ஊ,ஷூ,ஷ்எ,ஷெ,ஷெஎ,ஷே,ஷ்ஏ,ஷே,ஷ்ஒ,ஷொ,ஷொஒ,ஷோ,ஷ்ஓ,ஷோ,ஷஉ,ஷௌ,ஷஇ,ஷை,ஜ்அ,ஜ,ஜஅ,ஜா,ஜ்ஆ,ஜா,ஜ்இ,ஜி,ஜிஇ,ஜீ,ஜ்ஈ,ஜீ,ஜ்உ,ஜு,ஜுஉ,ஜூ,ஜ்ஊ,ஜூ,ஜ்எ,ஜெ,ஜெஎ,ஜே,ஜ்ஏ,ஜே,ஜ்ஒ,ஜொ,ஜொஒ,ஜோ,ஜ்ஓ,ஜோ,ஜஉ,ஜௌ,ஜஇ,ஜை,ச்ஹ்்,ஷ்்,ஹ்அ,ஹ,ஹஅ,ஹா,ஹ்ஆ,ஹா,ஹ்இ,ஹி,ஹிஇ,ஹீ,ஹ்ஈ,ஹீ,ஹ்உ,ஹு,ஹுஉ,ஹூ,ஹ்ஊ,ஹூ,ஹ்எ,ஹெ,ஹெஎ,ஹே,ஹ்ஏ,ஹே,ஹ்ஒ,ஹொ,ஹொஒ,ஹோ,ஹ்ஓ,ஹோ,ஹஉ,ஹௌ,ஹஇ,ஹை,-ச்,ஸ்,ஸ்அ,ஸ,ஸஅ,ஸா,ஸ்ஆ,ஸா,ஸ்இ,ஸி,ஸிஇ,ஸீ,ஸ்ஈ,ஸீ,ஸ்உ,ஸு,ஸுஉ,ஸூ,ஸ்ஊ,ஸூ,ஸ்எ,ஸெ,ஸெஎ,ஸே,ஸ்ஏ,ஸே,ஸ்ஒ,ஸொ,ஸொஒ,ஸோ,ஸ்ஓ,ஸோ,ஸஉ,ஸௌ,ஸஇ,ஸை,ர்அ,ர,ரஅ,ரா,ர்ஆ,ரா,ர்இ,ரி,ரிஇ,ரீ,ர்ஈ,ரீ,ர்உ,ரு,ருஉ,ரூ,ர்ஊ,ரூ,ர்எ,ரெ,ரெஎ,ரே,ர்ஏ,ரே,ர்ஒ,ரொ,ரொஒ,ரோ,ர்ஓ,ரோ,ரஉ,ரௌ,ரஇ,ரை,ற்அ,ற,றஅ,றா,ற்ஆ,றா,ற்இ,றி,றிஇ,றீ,ற்ஈ,றீ,ற்உ,று,றுஉ,றூ,ற்ஊ,றூ,ற்எ,றெ,றெஎ,றே,ற்ஏ,றே,ற்ஒ,றொ,றொஒ,றோ,ற்ஓ,றோ,றஉ,றௌ,றஇ,றை,ப்அ,ப,பஅ,பா,ப்ஆ,பா,ப்இ,பி,பிஇ,பீ,ப்ஈ,பீ,ப்உ,பு,புஉ,பூ,ப்ஊ,பூ,ப்எ,பெ,பெஎ,பே,ப்ஏ,பே,ப்ஒ,பொ,பொஒ,போ,ப்ஓ,போ,பஉ,பௌ,பஇ,பை,ம்அ,ம,மஅ,மா,ம்ஆ,மா,ம்இ,மி,மிஇ,மீ,ம்ஈ,மீ,ம்உ,மு,முஉ,மூ,ம்ஊ,மூ,ம்எ,மெ,மெஎ,மே,ம்ஏ,மே,ம்ஒ,மொ,மொஒ,மோ,ம்ஓ,மோ,மஉ,மௌ,மஇ,மை,ய்அ,ய,யஅ,யா,ய்ஆ,யா,ய்இ,யி,யிஇ,யீ,ய்ஈ,யீ,ய்உ,யு,யுஉ,யூ,ய்ஊ,யூ,ய்எ,யெ,யெஎ,யே,ய்ஏ,யே,ய்ஒ,யொ,யொஒ,யோ,ய்ஓ,யோ,யஉ,யௌ,யஇ,யை,ன்அ,ன,னஅ,னா,ன்ஆ,னா,ன்இ,னி,னிஇ,னீ,ன்ஈ,னீ,ன்உ,னு,னுஉ,னூ,ன்ஊ,னூ,ன்எ,னெ,னெஎ,னே,ன்ஏ,னே,ன்ஒ,னொ,னொஒ,னோ,ன்ஓ,னோ,னஉ,னௌ,னஇ,னை,ண்அ,ண,ணஅ,ணா,ண்ஆ,ணா,ண்இ,ணி,ணிஇ,ணீ,ண்ஈ,ணீ,ண்உ,ணு,ணுஉ,ணூ,ண்ஊ,ணூ,ண்எ,ணெ,ணெஎ,ணே,ண்ஏ,ணே,ண்ஒ,ணொ,ணொஒ,ணோ,ண்ஓ,ணோ,ணஉ,ணௌ,ணஇ,ணை,ன்க்,ங்,ங்அ,ங,ஙஅ,ஙா,ங்ஆ,ஙா,ங்இ,ஙி,ஙிஇ,ஙீ,ங்ஈ,ஙீ,ங்உ,ஙு,ஙுஉ,ஙூ,ங்ஊ,ஙூ,ங்எ,ஙெ,ஙெஎ,ஙே,ங்ஏ,ஙே,ங்ஒ,ஙொ,ஙொஒ,ஙோ,ங்ஓ,ஙோ,ஙஉ,ஙௌ,ஙஇ,ஙை,ல்அ,ல,லஅ,லா,ல்ஆ,லா,ல்இ,லி,லிஇ,லீ,ல்ஈ,லீ,ல்உ,லு,லுஉ,லூ,ல்ஊ,லூ,ல்எ,லெ,லெஎ,லே,ல்ஏ,லே,ல்ஒ,லொ,லொஒ,லோ,ல்ஓ,லோ,லஉ,லௌ,லஇ,லை,ள்அ,ள,ளஅ,ளா,ள்ஆ,ளா,ள்இ,ளி,ளிஇ,ளீ,ள்ஈ,ளீ,ள்உ,ளு,ளுஉ,ளூ,ள்ஊ,ளூ,ள்எ,ளெ,ளெஎ,ளே,ள்ஏ,ளே,ள்ஒ,ளொ,ளொஒ,ளோ,ள்ஓ,ளோ,ளஉ,ளௌ,ளஇ,ளை,வ்அ,வ,வஅ,வா,வ்ஆ,வா,வ்இ,வி,விஇ,வீ,வ்ஈ,வீ,வ்உ,வு,வுஉ,வூ,வ்ஊ,வூ,வ்எ,வெ,வெஎ,வே,வ்ஏ,வே,வ்ஒ,வொ,வொஒ,வோ,வ்ஓ,வோ,வஉ,வௌ,வஇ,வை,ன்த்,ந்த்,அஇ,ஐ,அஉ,ஒள,ட்ஹி,தி,ன்ஜ்,ஞ்,ன்ட்,ந்".split(",");
for (i=0;i<pDB.length-1;i++)
{
 chr=chr.replace(RegExp(pDB[i],"g"),pDB[i+1]);
 i=i+1;
}
return chr;
}
function stamil99(chr) {
var tDB="கஆ,கா,கஇ,கி,கஈ,கீ,கஉ,கு,கஊ,கூ,கஎ,கெ,கஏ,கே,கஐ,கை,கஒ,கொ,கஓ,கோ,கஔ,கௌ,ஙஆ,ஙா,ஙஇ,ஙி,ஙஈ,ஙீ,ஙஉ,ஙு,ஙஊ,ஙூ,ஙஎ,ஙெ,ஙஏ,ஙே,ஙஐ,ஙை,ஙஒ,ஙொ,ஙஓ,ஙோ,ஙஔ,ஙௌ,சஆ,சா,சஇ,சி,சஈ,சீ,சஉ,சு,சஊ,சூ,சஎ,செ,சஏ,சே,சஐ,சை,சஒ,சொ,சஓ,சோ,சஔ,சௌ,ஜஆ,ஜா,ஜஇ,ஜி,ஜஈ,ஜீ,ஜஉ,ஜு,ஜஊ,ஜூ,ஜஎ,ஜெ,ஜஏ,ஜே,ஜஐ,ஜை,ஜஒ,ஜொ,ஜஓ,ஜோ,ஜஔ,ஜௌ,ஞஆ,ஞா,ஞஇ,ஞி,ஞஈ,ஞீ,ஞஉ,ஞு,ஞஊ,ஞூ,ஞஎ,ஞெ,ஞஏ,ஞே,ஞஐ,ஞை,ஞஒ,ஞொ,ஞஓ,ஞோ,ஞஔ,ஞௌ,டஆ,டா,டஇ,டி,டஈ,டீ,டஉ,டு,டஊ,டூ,டஎ,டெ,டஏ,டே,டஐ,டை,டஒ,டொ,டஓ,டோ,டஔ,டௌ,ணஆ,ணா,ணஇ,ணி,ணஈ,ணீ,ணஉ,ணு,ணஊ,ணூ,ணஎ,ணெ,ணஏ,ணே,ணஐ,ணை,ணஒ,ணொ,ணஓ,ணோ,ணஔ,ணௌ,தஆ,தா,தஇ,தி,தஈ,தீ,தஉ,து,தஊ,தூ,தஎ,தெ,தஏ,தே,தஐ,தை,தஒ,தொ,தஓ,தோ,தஔ,தௌ,நஆ,நா,நஇ,நி,நஈ,நீ,நஉ,நு,நஊ,நூ,நஎ,நெ,நஏ,நே,நஐ,நை,நஒ,நொ,நஓ,நோ,நஔ,நௌ,னஆ,னா,னஇ,னி,னஈ,னீ,னஉ,னு,னஊ,னூ,னஎ,னெ,னஏ,னே,னஐ,னை,னஒ,னொ,னஓ,னோ,னஔ,னௌ,பஆ,பா,பஇ,பி,பஈ,பீ,பஉ,பு,பஊ,பூ,பஎ,பெ,பஏ,பே,பஐ,பை,பஒ,பொ,பஓ,போ,பஔ,பௌ,மஆ,மா,மஇ,மி,மஈ,மீ,மஉ,மு,மஊ,மூ,மஎ,மெ,மஏ,மே,மஐ,மை,மஒ,மொ,மஓ,மோ,மஔ,மௌ,யஆ,யா,யஇ,யி,யஈ,யீ,யஉ,யு,யஊ,யூ,யஎ,யெ,யஏ,யே,யஐ,யை,யஒ,யொ,யஓ,யோ,யஔ,யௌ,ரஆ,ரா,ரஇ,ரி,ரஈ,ரீ,ரஉ,ரு,ரஊ,ரூ,ரஎ,ரெ,ரஏ,ரே,ரஐ,ரை,ரஒ,ரொ,ரஓ,ரோ,ரஔ,ரௌ,றஆ,றா,றஇ,றி,றஈ,றீ,றஉ,று,றஊ,றூ,றஎ,றெ,றஏ,றே,றஐ,றை,றஒ,றொ,றஓ,றோ,றஔ,றௌ,லஆ,லா,லஇ,லி,லஈ,லீ,லஉ,லு,லஊ,லூ,லஎ,லெ,லஏ,லே,லஐ,லை,லஒ,லொ,லஓ,லோ,லஔ,லௌ,ளஆ,ளா,ளஇ,ளி,ளஈ,ளீ,ளஉ,ளு,ளஊ,ளூ,ளஎ,ளெ,ளஏ,ளே,ளஐ,ளை,ளஒ,ளொ,ளஓ,ளோ,ளஔ,ளௌ,ழஆ,ழா,ழஇ,ழி,ழஈ,ழீ,ழஉ,ழு,ழஊ,ழூ,ழஎ,ழெ,ழஏ,ழே,ழஐ,ழை,ழஒ,ழொ,ழஓ,ழோ,ழஔ,ழௌ,வஆ,வா,வஇ,வி,வஈ,வீ,வஉ,வு,வஊ,வூ,வஎ,வெ,வஏ,வே,வஐ,வை,வஒ,வொ,வஓ,வோ,வஔ,வௌ,ஶஆ,ஶா,ஶஇ,ஶி,ஶஈ,ஶீ,ஶஉ,ஶு,ஶஊ,ஶூ,ஶஎ,ஶெ,ஶஏ,ஶே,ஶஐ,ஶை,ஶஒ,ஶொ,ஶஓ,ஶோ,ஶஔ,ஶௌ,ஷஆ,ஷா,ஷஇ,ஷி,ஷஈ,ஷீ,ஷஉ,ஷு,ஷஊ,ஷூ,ஷஎ,ஷெ,ஷஏ,ஷே,ஷஐ,ஷை,ஷஒ,ஷொ,ஷஓ,ஷோ,ஷஔ,ஷௌ,ஸஆ,ஸா,ஸஇ,ஸி,ஸஈ,ஸீ,ஸஉ,ஸு,ஸஊ,ஸூ,ஸஎ,ஸெ,ஸஏ,ஸே,ஸஐ,ஸை,ஸஒ,ஸொ,ஸஓ,ஸோ,ஸஔ,ஸௌ,ஹஆ,ஹா,ஹஇ,ஹி,ஹஈ,ஹீ,ஹஉ,ஹு,ஹஊ,ஹூ,ஹஎ,ஹெ,ஹஏ,ஹே,ஹஐ,ஹை,ஹஒ,ஹொ,ஹஓ,ஹோ,ஹஔ,ஹௌ".split(",");
for (i=0;i<tDB.length-1;i++)
{
 chr=chr.replace(RegExp(tDB[i],"g"),tDB[i+1]);
 i=i+1;
}

var c = chr.substring(0,chr.length-1);
var b = chr.substr(chr.length-1);
var d = c + b;
if(c.length>1)if((b>=String.fromCharCode(2965))&&(b<=String.fromCharCode(3001)))
{if((c.substr(c.length - 1)==b)&&(c.substr(c.length - 2,1)!="்")){d = c + "்" + b;}

if((c.substr(c.length - 1)=="ங")&&(b=="க")&&(c.substr(c.length - 2,1)!="்")){d=c+"்"+b;}
if((c.substr(c.length - 1)=="ஞ")&&(b=="ச")&&(c.substr(c.length - 2,1)!="்")){d=c+"்"+b;}
if((c.substr(c.length - 1)=="ந")&&(b=="த")&&(c.substr(c.length - 2,1)!="்")){d=c+"்"+b;}
if((c.substr(c.length - 1)=="ண")&&(b=="ட")&&(c.substr(c.length - 2,1)!="்")){d=c+"்"+b;}
if((c.substr(c.length - 1)=="ம")&&(b=="ப")&&(c.substr(c.length - 2,1)!="்")){d=c+"்"+b;}
if((c.substr(c.length - 1)=="ன")&&(b=="ற")&&(c.substr(c.length - 2,1)!="்")){d=c+"்"+b;}
}
return d;
}