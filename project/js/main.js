// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
// 햄버거 바 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네비게이션 선택자
const sideMenuEl = document.getElementById('side__menu')


// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 닫는 햄버거 바 아이콘을 안 보이게 처리하고
    menuCloseEl.style.display = 'none'
    // 여는 햄버거 바 아이콘을 보이게 처리하고
    menuOpenEl.style.display = 'block'
    // 사이드 메뉴를 숨깁니다
    sideMenuEl.style.transform = 'translateX(-70%)'
})

// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function(){
    // 여는 햄버거 바 아이콘을 안 보이게 처리하고
    menuOpenEl.style.display = 'none'
    // 닫는 햄버거 바 아이콘을 보이게 처리하고
    menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보입니다.
    sideMenuEl.style.transform = 'translateX(0%)'
})
