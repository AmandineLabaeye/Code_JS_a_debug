/**
 * Created by sstienface on 15/10/2018.
 */

var main = document.getElementById(main);

main.id = "main2";

main.style.display = "hidden";

document.getElementById('main') = "Mon nouveau texte !";

var html = main.innerHTLM;

alert(html);

if(html)
{
    console.log(html);
}
else
{
    var test = document.getElementParId('test');
    if(test)
    {
        alert(test);
    }
}


var main = getElementById('main');
main[style][display] = "block";


