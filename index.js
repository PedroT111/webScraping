const Cheerio = require("cheerio");
const request = require("request-promise");

async function init(){
    const $ = await request({
        url:"https://clasificados.lavoz.com.ar/inmuebles/todo/?operacion=venta&provincia=cordoba&ciudad=cordoba",
        transform: body => Cheerio.load(body)
    });
    const websiteTitle = $('title');
    //console.log(websiteTitle.html()); 
    const websiteHeading = $('h1');
    //console.log(websiteHeading.html());
    const casa = $('[class="col-6 flex flex-wrap content-start sm-col-3 md-col-3 align-top"]').each((i, el) =>{
        const title =(i, $(el).find('h2').text());
        const barrio = (i, $(el).find('[class="h5 mx0 mt0 mb1 col-12 font-light title-1lines"]').text());
        const price = $(el).find('span.price').text();
        console.log(title, barrio, price);
    });
    //casa();

    /*$('[class="col-6 flex flex-wrap content-start sm-col-3 md-col-3 align-top"]').each((i, el) => {
        const text = $(el).find('span');
        console.log(text.text());
    })*/

    /*const conteiner = $('[class = "flex flex-wrap"]').children();
    console.log(conteiner.html());*/
    
};

init();