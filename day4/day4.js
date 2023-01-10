console.log('day3.js');
var students = [
    {
       "name": "Шрамко Владислав",
       "group": "РПЗ 19 1/9",
       "birthday": "25.12.2003",
       "pr": true
    },
    {
        "name": "Зубенко Володимир",
        "group": "РПЗ 19 1/9",
        "birthday": "01.10.2003",
        "pr": false
     },
     {
        "name": "Луценко Олександр",
        "group": "РПЗ 19 2/9",
        "birthday": "07.07.2003",
        "pr": false
     },
     {
        "name": "Студент Владислав",
        "group": "РПЗ 19 1/9",
        "birthday": "09.02.2004",
        "pr": false
     },
]

// console.log(students[1]);

new Vue({
    el:"#students",
    data:{
        s:students,
        pr:[],
        search:"",
        sId:0,
        studentname:'',
        spr:'',
        sgroup:'',
        sbirthday:''
    },
    created(){
        window.localStorage.setItem(students,students);
        console.log(window.localStorage.getItem('s',this.s)); 
    },
    computed:{
        searchHandler(){
            if(this.search){
                return this.s.filter(elem =>{
                return elem.name.toLowerCase().includes(this.search.toLowerCase());
            });
            }else{
                return false;
            }
            
        }
    },
    methods:{
        Sdelete: function(index){
            this.s.splice(index,1);
            console.log(index);
            console.log(this.s);
        },
        Sadd: function(studentname, spr, sgroup, sbirthday){
            var arr = {
                "name": studentname,
                "group": sgroup,
                "birthday": sbirthday,
                "pr": spr
            };
            this.s.push(arr);
            //this.s[this.s.length].name.push(studentname);
            //this.s[this.s.length]["name"] = studentname;
            //console.log(this.s[this.s.length-1].birthday);
            console.log(this.s);
        }
        // searchstudent: function(){
        //     return this.search.filter(elem =>{
        //         return elem.name.toLowerCase().includes(this.search.toLowerCase());}
        //     );
        // },
    },
    
});