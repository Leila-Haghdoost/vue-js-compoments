Vue.component('card', {
    props: ['title', 'content'],
    template:`
    <div class="card">
         <div class="card-body">
            <h3 class="card-title">
                {{title}}
            </h3>
            <div class="card-text">
                {{content}}
            </div>
        </div>
    </div>
        `
})

new Vue({
    el: '#app',
    data: {
        articles: [{
            title:'Build fullstack application with laravel and vuejs',
            content:'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000'

        },
        {
            title:'Where does it come from?',
            content: 'Sed ut perspiciatis unde isdt gdjei error sit voluptden accumnuyim dolorum larumenbd rem torem rem aperion eaque quae ab illo.'
        },
        {
            title:'1914 translation by H. Rackham',
            content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.'
        }
    ]
    }
})