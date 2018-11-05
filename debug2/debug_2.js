/**
 * Created by sstienface on 15/10/2018.
 */

var main = document.getElementById('main');

main.id = "main2";

main.style.display = "hidden";

document.getElementById('main2').innerHTML = "Mon nouveau texte !";

var html = main;

alert(html);

if(html)
{
    console.log(html);
}
else
{
    var test = document.getElementById('test');
    if(test)
    {
        alert(test);
    }
}

main.style.display = "block";


