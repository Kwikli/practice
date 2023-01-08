console.log('day2.js');
var quotes = [
    {
       "quote": "This is just a Quote1",
       "source": "Christopher"
    },
    {
       "quote": "This is just a Quote2 - 'quote>40 quote>40quot040quote>40'",
       "source": "Martin"
    },
    {
       "quote": "This is just a Quote3",
       "source": "Dennis"
    },
{
       "quote": "This is just a Quote4",
       "source": ""
    },
]

new Vue({
    el:"#day2",
    data:{
        quote: quotes,
        isAuthor: "true",
        sortedQuotes:[]
    },
    computed:{
        filteredQuotes: function(){
            return this.quote.filter(element =>{
                return Boolean(this.isAuthor) == Boolean(element.source);
            })
        }
    },
    methods:{
        sortBySource(){
            this.sortedQuotes = this.quote.sort((a,b) => (a.source > b.source) ? 1: -1);
        }
    },
    
});