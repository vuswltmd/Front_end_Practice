const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');

    // Grab content item from DOM
    // console.log(this.id) //주석해제하고 실행시킨 뒤 tab-1, tab-2, tab-3를 클릭해보세요.
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));