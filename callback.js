let posts =[
    {tital : "post one" , body:" this is the post one" ,createdAt : timestamp  },
    {tital : "post two" , body:" this is the post two"}
];

function getPost(){
    setTimeout(() => {
        let outPut ="";
        posts.forEach((post ,index  ) => {
            outPut += `<li>${post.tital}</li>`        
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
        posts.push(post)
        callback()
    }, 5000);
}
 creatPost({tital : "post four" , body:" this is the post four"},getPost)