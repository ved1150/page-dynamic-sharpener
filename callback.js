let posts =[
    {tital : "post one" , body:" this is the post one" ,createdAt : new Date().getTime()  },
    {tital : "post two" , body:" this is the post two",createdAt : new Date().getTime() }
];
let myInterval;
function getPost(){
    clearInterval(myInterval)
    setInterval(() => {
        let outPut ="";
        posts.forEach((post) => {
            outPut += `<li>${post.tital} lastUpdate ${ (new Date().getTime() - post.createdAt)/1000} second ago </li>`        
        });
        document.body.innerHTML= outPut;
    }, 1000);
}
getPost()

function creatPost(post,callback){
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000);
}
 creatPost({tital : "post three" , body:" this is the post three"},getPost)

 function creatPost(post,callback){
    setTimeout(() => {
        posts.push({...post, createdAt:new Date().getTime()})
        callback()
    }, 8000);
}
 creatPost({tital : "post four" , body:" this is the post four"},getPost)

