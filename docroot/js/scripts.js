'use strict'
let elem = document.querySelector('.header__menu').children[0].children;
let content = document.querySelector('.content').children;
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let comments = document.querySelector('.content__comments-list').children;
let mentors = document.querySelector('.content__mentor-list').children;
let list = document.querySelector('.content__course-itemrow').children;
let comment_nav = document.querySelector('.navigator__comments').children;
let mentors_nav = document.querySelector('.navigator__mentors').children;
let i = 0;


//comments
  setInterval(()=>{
    if (i === 2)
    {
      list[i].classList.remove('active');
      comments[i].classList.remove('active');
      mentors[i].classList.remove('active');
      comment_nav[i].classList.remove('active');
      mentors_nav[i].classList.remove('active');
      i = 0;
      list[i].classList.add('active');
      comments[i].classList.add('active');
      mentors[i].classList.add('active');
      comment_nav[i].classList.add('active');
      mentors_nav[i].classList.add('active');
    }
    else if (comments[i].classList.contains('active') || mentors[i].classList.contains('active') || list[i].classList.contains('active')){
      list[i].classList.remove('active');
      comment_nav[i].classList.remove('active');
      mentors[i].classList.remove('active');
      comments[i].classList.remove('active');
      mentors_nav[i].classList.remove('active');
      i++;
      list[i].classList.add('active');
      comment_nav[i].classList.add('active');
      comments[i].classList.add('active');
      mentors[i].classList.add('active');
      mentors_nav[i].classList.add('active');

    }
  },10000)


//scroll
document.body.addEventListener('click', (event) => {
  if (event.target === elem[0])
  {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  }
  else if (event.target === elem[1])
  {
    window.scrollTo({
      top: content[1].offsetTop - 100,
      behavior: "smooth"
    });
  }
  else if (event.target === elem[2])
  {
    window.scrollTo({
      top: content[3].offsetTop - 100,
      behavior: "smooth"
    });
  }
  else if (event.target === elem[3])
  {
    window.scrollTo({
      top: content[4].offsetTop - 100,
      behavior: "smooth"
    });
  }
  else if (event.target === elem[4])
  {
    window.scrollTo({
      top: content[5].offsetTop - 100,
      behavior: "smooth"
    });
  }
  //burger
  else if(event.target === burger)
  {
     menu.classList.toggle('active');
  }
});