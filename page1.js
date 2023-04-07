const tabHeader=document.querySelector('.navbar_roomlist')
const tabContent=document.querySelector('.block')
function tabClicked(element){
	let activedElement =tabHeader.querySelector('.active')
	let activedTab =tabContent.querySelector('.active')
	let elementName =element.getAttribute('name')
	let displayTab=tabContent.querySelector(`#${elementName}`)
	
	activedElement.classList.remove('active')
	activedTab.classList.remove('active')
	element.classList.add('active')
	displayTab.classList.add('active')
}
var bookButtons = document.querySelectorAll('.room_book');
var bookButtons1 = document.querySelectorAll('.room_book1');
// Gắn sự kiện click cho từng phần tử
bookButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Chuyển sang trang khác
    window.location.href = 'booking.html';
  });
});
// Gắn sự kiện click cho từng phần tử
bookButtons1.forEach(function(button) {
	button.addEventListener('click', function() {
	  // Chuyển sang trang khác
	  window.location.href = 'booking.html';
	});
});

document.getElementById("login_btn").addEventListener("click", function() {
        window.location.href = "login.html";
    });
	document.getElementById("click1").addEventListener("click", function() {
        window.location.href = "page2.html";
    });
	document.getElementById("click2").addEventListener("click", function() {
        window.location.href = "page3.html";
    });