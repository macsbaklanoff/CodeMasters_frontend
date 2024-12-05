import './styles.scss'

const blocks_nav_drawer = document.querySelectorAll(".navigation-driver__main__item-main")
let activeBlock_nav_drawer = null
activeBlock_nav_drawer = blocks_nav_drawer[0]
activeBlock_nav_drawer.classList.add('item-active-nav-driver')

blocks_nav_drawer.forEach(block => {
    block.addEventListener('click', () => {
        if (activeBlock_nav_drawer) {
            activeBlock_nav_drawer.classList.remove('item-active-nav-driver')
        }
        block.classList.add('item-active-nav-driver')
        activeBlock_nav_drawer = block
    });
});


const blocks_nav_rail = document.querySelectorAll(".navigation-rail__lower__item")
let activeBlock_nav_rail = null
activeBlock_nav_rail = blocks_nav_rail[0]
activeBlock_nav_rail.classList.add('item-active-nav-rail')

blocks_nav_rail.forEach(block => {
    block.addEventListener('click', () => {
        if (activeBlock_nav_rail) {
            activeBlock_nav_rail.classList.remove('item-active-nav-rail')
        }
        block.classList.add('item-active-nav-rail')
        activeBlock_nav_rail = block
    });
});
