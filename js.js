//00155f1a4e7d4b7b8f09fdc42d6f6984
const source = 'google-news-in'
const apikey = '00155f1a4e7d4b7b8f09fdc42d6f6984'

console.log('this is js .js')
const xhr = new XMLHttpRequest();

let data = [];

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);
//xhr.getResponseHeader('Content-type', 'application/json');
xhr.onload = function () {
    if (this.status === 200) {
        let html = "";
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        data = articles;
        articles.forEach(element => {
            let news =
                `<div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapse show" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        ${element["title"]}
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">${element["content"]} <a href="${element["url"]}" target = __blank>Read more</a></div>
            </div>`;

            html += news;
        });
        newsaccordion.innerHTML = html;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()

let newsaccordion = document.getElementById('Newsaccodion')

const search_input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click',()=>{
    const value = search_input.value;
    console.log(value)
    if(value.trim() === '') window.location.reload();
    let html = "";
    
    data.filter((e) => e.title.toLowerCase().startsWith(value.toLowerCase())).forEach(element => {
        let news =
            `<div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapse show" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    ${element["title"]}
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">${element["content"]} <a href="${element["url"]}" target = __blank>Read more</a></div>
        </div>`

        html += news;
    });
    newsaccordion.innerHTML = html;
})
