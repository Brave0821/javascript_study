// remove.js 참고
// 왼쪽 썸네일 이미지 js 
/* 
스몰 썸네일 a에 올렸을 때 big 썸네일 이미지 경로가 바뀜?
1. small_thumnail -  마우스를 올리면 ex small2에 마우스를 올렸다면 
2. big_thumnail - img (src) 값이 변경된다. ex big1 이 big2 이미지 변경
*/
const item_detail = document.querySelector(".item_detail")
const small_img = item_detail.querySelectorAll(".small_thumnail a")
const big_img = item_detail.querySelector(".big_thumnail img")
console.log(item_detail, small_img, big_img); /* 성공 */

small_img[0].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small1.jpg"
})
small_img[1].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small2.jpg"
})

small_img[2].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small1.jpg"
})

small_img[3].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small2.jpg"
})

small_img[4].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small1.jpg"
})

small_img[5].addEventListener("mouseover", function(){
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src="./dog_images/small2.jpg"
})

