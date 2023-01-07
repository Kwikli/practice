console.log('day1.js');

var lcss = "style2.css";
var dcss = "style.css";

var curCss = lcss;
new Vue({
    el:'head',
    data:{
        curCss: curCss
    }
});

var mas = [2,3,4,5,5,6,6,6,6,6,7,7,8,8,3,3,3];
window.localStorage.setItem(mas,mas);
window.localStorage.setItem(2,mas);
console.log(window.localStorage.getItem(mas));
var m = document.querySelector('.mas').textContent = window.localStorage.getItem(mas);

console.log('all localstorage -- ',window.localStorage);


// var header = new Vue({
//     el: 'head',
//     data:{
//         curCss: curCss
//     },
//     mounted: function(){
//         this.curCss = curCss;
//         this.$forceUpdate();
//     } 

// });


// new Vue({
//     el: '.header',
//     data:{
//         lcss: lcss,
//         dcss: dcss,
//         curCss: curCss
//     },
//     methods:{
//         changeCss: function(){
//             console.log('changeCss');
//             console.log(curCss);
//             if (curCss == dcss){
//                 curCss = lcss;
//                     new Vue({
//                         el: 'head',
//                         data:{
//                             curCss: curCss
//                         },
//                     });
//                     console.log('--',curCss);
                    
//             }else{
//                 curCss = dcss;
//                     new Vue({
//                         el: 'head',
//                         data:{
//                             curCss: curCss
//                         },
//                     });
//                     console.log('--',curCss);
//                     this.$forceUpdate();
//             }
//         }
//     },
//     mounted: function(){
//         this.$nextTick(this.changeCss);
        
        
//     }

// });

var picture = new Vue({
    el: '#app',
    data:{
        isFocused: true,
        count: 0,
        msg:"Some text",
        picture:[
            "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg",
            "https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523__340.jpg",
            "https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618__340.jpg",
            "https://cdn.pixabay.com/photo/2017/02/22/17/02/beach-2089936__340.jpg",
        ]
    },
    methods:{
        fancybox: function(e){
            console.log("fancy");
            console.log(e.path[0]);
            if(e.path[0].classList == "pictures_fancy"){
                e.path[0].classList.remove("pictures_fancy");
            }else{
                e.path[0].classList.add("pictures_fancy");
            }; 
        },
        focus: function(e){
            if(this.isFocused){
                if(this.count > 0) this.picture[temporaryId] = temporary;
                console.log(e.srcElement.id);
                temporary = this.picture[e.srcElement.id];
                temporaryId = e.srcElement.id;
                console.log(temporary);
                //console.log(e.srcElement);
                this.picture[e.srcElement.id] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTS4i46oXsIJ_BpAtfKDUaJqvLBO6c_vrarA&usqp=CAU";
                //console.log(this.picture);
                //console.log(e.srcElement);
                this.$forceUpdate();
                this.count++;
            }
        },
        isInFocused: function(){
            if(this.isFocused){
                this.isFocused = false;
                this.picture[temporaryId] = temporary; 
            }else{
                this.isFocused = true;
            }
            
        }
    }
}); 
new Vue({
    el: '#ifelse',
    data:{
        age:"",
        msg:""
    },
    methods:{
        checkAge: function(){
            console.log('keyup');
            if(this.age >= 16){
                this.msg = "Ласкаво просимо!";
            }else{
                this.msg = "Вхід заборонено!";
            }
        }
    },
});

new Vue({
    el:'#ryadok',
    data:{
        length:0,
        ltext:'', 
        picture:[
            "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg",
            "https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523__340.jpg",
            "https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618__340.jpg",
            "https://cdn.pixabay.com/photo/2017/02/22/17/02/beach-2089936__340.jpg",
        ]
    },
    methods:{
        
    }
})

new Vue({
    el: '#for',
    data:{
        mnog:[],
        chislo:5
    },
    methods:{
        umnogit: function(){
            for(i=1;i<=9;i++){
                this.mnog[i] = this.chislo * i;
            }
        }
    },
    mounted: function(){
        this.$nextTick(this.umnogit);
        console.log(this.mnog);this.$forceUpdate();
    }
});

new Vue({
    el: '#funct',
    data:{
        tNumber:'',
        number:0,
        attempt:1,
        msg:''
    },
    methods:{
        createNumber: function(){
            this.number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            console.log('random number ',this.number);
            this.$forceUpdate();
        },
        tryNumber: function(){ 
            console.log('tryNumber', this.tNumber);
            if(this.attempt <= 3){
                this.attempt++;
                    if(this.tNumber == this.number){
                        this.msg = "Ви вгадали число!";
                        this.attempt--;
                        return true;
                }else{
                    if(this.tNumber > this.number){
                        this.msg = "Ваше число більше загаданого!";
                    }else{
                        this.msg = "Ваше число менше загаданого!";
                    }
                    return false;
                }  
            }else{
                this.msg = "Ви не вгадали число!";
            }
            this.$forceUpdate();
        }
    },
    mounted: function(){
        this.$nextTick(this.createNumber);
    }
});