import './styles.scss'

const blocks = document.querySelectorAll(".navigation-driver__main__item-main")
let activeBlock = null
activeBlock = blocks[0]
activeBlock.classList.add('item-active')

blocks.forEach(block => {
    block.addEventListener('click', () => {
        if (activeBlock) {
            activeBlock.classList.remove('item-active')
        }
        block.classList.add('item-active')
        activeBlock = block
    });
});