"use strict";const modal=document.querySelector(".modal"),paragraph=document.querySelector(".dupa"),overlay=document.querySelector(".overlay"),btnShowModal=document.querySelector(".show-modal"),btnCloseModal=document.querySelector(".close-modal"),btnResetCounter=document.querySelector(".reset-counter");let counter=0;const showModal=function(){modal.classList.remove("hidden"),overlay.classList.remove("hidden")},closeModal=function(){modal.classList.add("hidden"),overlay.classList.add("hidden")};btnShowModal.addEventListener("click",function(){5===(counter+=1)&&btnResetCounter.classList.remove("hidden"),showModal(),paragraph.textContent=`You clicked button ${counter} times`}),btnResetCounter.addEventListener("click",function(){counter=0,btnResetCounter.classList.add("hidden"),paragraph.textContent=`You clicked button ${counter} times`}),btnCloseModal.addEventListener("click",closeModal),overlay.addEventListener("click",closeModal);